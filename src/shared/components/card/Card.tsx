import React from 'react';
import Paper from '@mui/material/Paper';

const cardStyles = {
  background: '#FFFFFF',
  boxShadow: '0px 3px 0px #EDEDF6',
  borderRadius: '8px',
};

/**
 * @param {React.ElementType} children -Children.
 * @returns {JSX.Element} - Paper.
 */
export const PaperStyled: React.FC = ({ children }) => (
  <Paper style={cardStyles}>{children}</Paper>
);
