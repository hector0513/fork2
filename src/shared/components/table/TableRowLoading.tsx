import { TableRow } from '@mui/material';
import React from 'react';
import Loader from 'react-loader-spinner';
import { theme } from '../../css/theme';
import { StyledTableCell } from './TableRowStyled';

interface TableRowLoadingProps {
  colSpan: number;
  loading?: boolean;
}
/**
 * @param {number} colSpan - ColSpan.
 * @returns {JSX.Element} - User manangement view.
 */
export const TableRowLoading: React.FC<TableRowLoadingProps> = ({
  colSpan,
  loading,
}) => {
  const content = loading ? (
    <Loader type="ThreeDots" color={theme.palette.primary.main} />
  ) : (
    'No Records'
  );
  return (
    <TableRow>
      <StyledTableCell align="center" colSpan={colSpan}>
        {content}
      </StyledTableCell>
    </TableRow>
  );
};
