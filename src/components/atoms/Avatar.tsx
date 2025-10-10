import React from 'react';
import { AvatarProps } from './Avatar.types';

const sizeClasses = {
  xs: 'size-5',
  sm: 'size-6',
  md: 'size-8',
  lg: 'size-10',
  xl: 'size-12',
};

const textSizeClasses = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  circular = true,
  initials,
  loading = 'lazy',
  className = '',
  onClick,
}) => {
  const baseClasses = `
    inline-block object-cover object-center
    ${circular ? 'rounded-full' : 'rounded-md'}
    ${sizeClasses[size]}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // If we have a src, render an image
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={baseClasses}
        onClick={onClick}
      />
    );
  }

  // If no src but we have initials, render a fallback
  if (initials) {
    return (
      <div
        className={`
          inline-flex items-center justify-center bg-gray-100 font-medium text-gray-600
          dark:bg-gray-500/20 dark:text-gray-400
          ${circular ? 'rounded-full' : 'rounded-md'}
          ${sizeClasses[size]}
          ${textSizeClasses[size]}
          ${onClick ? 'cursor-pointer' : ''}
          ${className}
        `
          .trim()
          .replace(/\s+/g, ' ')}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  // If no src and no initials, render a default user icon
  return (
    <div
      className={`
        inline-flex items-center justify-center bg-gray-100 text-gray-400
        dark:bg-gray-500/20 dark:text-gray-500
        ${circular ? 'rounded-full' : 'rounded-md'}
        ${sizeClasses[size]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={alt}
    >
      <svg
        className="h-3/5 w-3/5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

Avatar.displayName = 'Avatar';
