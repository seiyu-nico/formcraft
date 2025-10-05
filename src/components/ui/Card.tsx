import React from 'react';
import {
  CardProps,
  CardHeaderProps,
  CardHeaderActionsProps,
  CardFooterProps,
  CardFooterActionsProps,
} from './Card.types';

// Card.Header.Actions subcomponent
const CardHeaderActions: React.FC<CardHeaderActionsProps> = ({ children }) => {
  return <div className="flex items-center justify-end gap-3">{children}</div>;
};

CardHeaderActions.displayName = 'Card.Header.Actions';

// Card.Header subcomponent
const CardHeaderComponent: React.FC<CardHeaderProps> = ({ title, subtitle, children }) => {
  // Extract actions from children
  let actionsContent: React.ReactNode = null;
  let otherContent: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === CardHeaderActions) {
      actionsContent = child;
    } else {
      otherContent.push(child);
    }
  });

  // If there's custom content (non-actions), render it
  if (otherContent.length > 0) {
    return <>{otherContent}</>;
  }

  // Default header layout with title/subtitle
  return (
    <div className="flex items-center justify-between gap-x-4">
      <div className="grid flex-1 gap-y-1">
        {title && (
          <h3 className="text-base font-semibold leading-6 text-gray-950 dark:text-white">
            {title}
          </h3>
        )}
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>
      {actionsContent && <div className="flex-shrink-0">{actionsContent}</div>}
    </div>
  );
};

CardHeaderComponent.displayName = 'Card.Header';

const CardHeader = Object.assign(CardHeaderComponent, {
  Actions: CardHeaderActions,
});

// Card.Footer.Actions subcomponent
const CardFooterActions: React.FC<CardFooterActionsProps> = ({ children }) => {
  return <div className="flex items-center justify-end gap-3">{children}</div>;
};

CardFooterActions.displayName = 'Card.Footer.Actions';

// Card.Footer subcomponent
const CardFooterComponent: React.FC<CardFooterProps> = ({ title, subtitle, children }) => {
  // Extract actions from children
  let actionsContent: React.ReactNode = null;
  let otherContent: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === CardFooterActions) {
      actionsContent = child;
    } else {
      otherContent.push(child);
    }
  });

  // If there's custom content (non-actions), render it
  if (otherContent.length > 0) {
    return <>{otherContent}</>;
  }

  // Default footer layout with title/subtitle
  return (
    <div className="flex items-start justify-between gap-x-4">
      <div className="grid flex-1 gap-y-1">
        {title && (
          <h3 className="text-base font-semibold leading-6 text-gray-950 dark:text-white">
            {title}
          </h3>
        )}
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
      </div>
      {actionsContent && <div className="flex-shrink-0">{actionsContent}</div>}
    </div>
  );
};

CardFooterComponent.displayName = 'Card.Footer';

const CardFooter = Object.assign(CardFooterComponent, {
  Actions: CardFooterActions,
});

// Main Card component
const CardComponent: React.FC<CardProps> = ({
  heading,
  description,
  header,
  headerAction,
  footer,
  children,
  className = '',
}) => {
  // Extract header and footer from children if they exist
  let headerContent: React.ReactNode = null;
  let footerContent: React.ReactNode = null;
  let bodyContent: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === CardHeader) {
        headerContent = child;
      } else if (child.type === CardFooter) {
        footerContent = child;
      } else {
        bodyContent.push(child);
      }
    } else {
      bodyContent.push(child);
    }
  });

  // Fallback to props for backward compatibility
  if (!headerContent && (heading || description || headerAction || header)) {
    if (header) {
      headerContent = header;
    } else if (heading || description || headerAction) {
      headerContent = (
        <CardHeader title={heading} subtitle={description}>
          {headerAction && <CardHeader.Actions>{headerAction}</CardHeader.Actions>}
        </CardHeader>
      );
    }
  }

  if (!footerContent && footer) {
    footerContent = footer;
  }

  const hasHeader = !!headerContent;
  const hasFooter = !!footerContent;

  return (
    <div
      className={`
        rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5
        dark:bg-white/5 dark:ring-white/10
        ${className}
      `}
    >
      {/* Header */}
      {hasHeader && (
        <div className="px-6 py-4 border-b border-gray-950/5 dark:border-white/10">
          {headerContent}
        </div>
      )}

      {/* Content */}
      <div className="px-6 py-4">{bodyContent.length > 0 ? bodyContent : null}</div>

      {/* Footer */}
      {hasFooter && (
        <div className="px-6 py-4 border-t border-gray-950/5 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
          {footerContent}
        </div>
      )}
    </div>
  );
};

CardComponent.displayName = 'Card';

// Compound component with subcomponents
export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Footer: CardFooter,
});
