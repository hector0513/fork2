import { TableCell, TableRow } from '@mui/material';
import { createStyles, withStyles } from '@mui/styles';

export const StyledTableCell = withStyles(() =>
  createStyles({
    head: {
      padding: '30px',
      borderBottom: '0px',
      color: '#8492A6',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.01em',
      background: '#FAFAFB',
      boxShadow: 'inset 0px -1px 0px #EDF2F7',
    },
    body: {
      borderBottom: '0px',
      padding: '30px',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '19px',
      background: '#FFFFFF',
      color: '#8392AB',
    },
  }),
)(TableCell);

export const StyledTableRow = withStyles(() =>
  createStyles({
    root: {
      cursor: 'pointer',
    },
  }),
)(TableRow);
