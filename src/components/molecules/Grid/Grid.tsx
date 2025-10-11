import React from 'react';
import { GridProps, GridColumns, ResponsiveColumns } from './Grid.types';

export const Grid: React.FC<GridProps> = ({ columns = 2, children, className = '' }) => {
  const getGridClasses = (): string => {
    if (typeof columns === 'number') {
      return `grid-cols-${columns}`;
    }

    const responsiveColumns = columns as ResponsiveColumns;
    const classes: string[] = [];

    if (responsiveColumns.default) {
      classes.push(`grid-cols-${responsiveColumns.default}`);
    }
    if (responsiveColumns.sm) {
      classes.push(`sm:grid-cols-${responsiveColumns.sm}`);
    }
    if (responsiveColumns.md) {
      classes.push(`md:grid-cols-${responsiveColumns.md}`);
    }
    if (responsiveColumns.lg) {
      classes.push(`lg:grid-cols-${responsiveColumns.lg}`);
    }
    if (responsiveColumns.xl) {
      classes.push(`xl:grid-cols-${responsiveColumns.xl}`);
    }
    if (responsiveColumns['2xl']) {
      classes.push(`2xl:grid-cols-${responsiveColumns['2xl']}`);
    }

    return classes.join(' ');
  };

  return <div className={`grid gap-6 ${getGridClasses()} ${className}`}>{children}</div>;
};

Grid.displayName = 'Grid';
