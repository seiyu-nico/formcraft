import React from 'react';
import { HiddenProps } from './Hidden.types';

export const Hidden: React.FC<HiddenProps> = ({
  name,
  value,
  extraInputAttributes = {},
}) => {
  return (
    <input
      type="hidden"
      name={name}
      value={value}
      {...extraInputAttributes}
    />
  );
};

Hidden.displayName = 'Hidden';
