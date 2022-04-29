import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

export interface TextLoadingProps {
  children: React.ReactNode;
  loading: boolean;
  circularProgressProps?: CircularProgressProps;
}

/**
 * @param {loading} loading - Boolean.
 * @returns {JSX.Element} - TextLoading.
 */
export const TextLoading: React.FC<TextLoadingProps> = ({
  loading,
  circularProgressProps,
  children,
}) => {
  const defaultCircularProgressProps: CircularProgressProps = {
    style: { marginLeft: 5 },
    size: 15,
    color: 'primary',
  };

  if (circularProgressProps)
    Object.assign(defaultCircularProgressProps, circularProgressProps);

  return (
    <>
      {children}
      {loading ? <CircularProgress {...defaultCircularProgressProps} /> : null}
    </>
  );
};
