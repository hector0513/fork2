import { createStyles, withStyles } from '@mui/styles';
import { TextField as MuiTexfield, TextFieldProps } from '@mui/material';
import React from 'react';

const TextField = withStyles(() =>
  createStyles({
    root: {
      '& .MuiInputBase-root': {
        background: '#fff',
        color: '#8C8C8C',
        padding: '5px',
        '& fieldset': {
          boxShadow:
            '0px 1px 2px rgba(50, 50, 71, 0.2), 0px 0px 1px rgba(50, 50, 71, 0.2)',
          borderRadius: '6px',
        },
        '& .MuiInputAdornment-root': {
          color: '#CCCCCC',
        },
      },
      '&:focus': {
        '& .MuiInputBase-root fieldset': {
          border: '3px solid #5BC2BA',
        },
      },
      '&:hover': {
        '& .MuiInputBase-root fieldset': {
          border: '2px solid #5BC2BA',
        },
      },
      /* '& label.Mui-focused': {
        color: 'white',
      }, */
    },
  }),
)(MuiTexfield);

/**
 * @param {TextFieldProps} props - Textfield Props.
 * @returns {JSX.Element} - Cases view.
 */
export const CustomInput: React.FC<TextFieldProps> = (
  props: TextFieldProps,
) => <TextField variant="outlined" {...props} />;
