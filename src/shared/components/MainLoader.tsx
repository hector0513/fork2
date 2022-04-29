import React from 'react';
import { CircularProgress } from '@mui/material';

/**
 * @returns {JSX.Element} - Main loader component.
 */
export function MainLoader(): JSX.Element {
  return <CircularProgress size="5rem" />;
}
