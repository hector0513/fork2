import {
  BoxProps,
  Box,
  Typography,
  useMediaQuery,
  Pagination as MuiPagination,
  PaginationItem,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
// import { Box } from "@mui/system";

/**
 * @param root0 - Props.
 * @param root0.page - Page.
 * @param root0.pageSize - PageSize.
 * @param root0.totalCount - Total count of records.
 * @param root0.onChange - OnChange handler.
 * @returns Component.
 */
export function Pagination({
  page,
  pageSize,
  totalCount,
  onChange,
  ...props
}: Omit<BoxProps, 'onChange'> & {
  page: number;
  pageSize: number;
  totalCount: number;
  onChange: (page: number) => void;
}): JSX.Element {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const showing = Math.min(pageSize, totalCount ?? 0);

  return (
    <>
      {matches ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
              sx={{ height: '100px', width: '100%', margin: 0 }}
              {...props}
            >
              <MuiPagination
                count={Math.ceil(totalCount / pageSize)}
                shape="rounded"
                page={page}
                showFirstButton
                showLastButton
                onChange={(event: unknown, changedPage: number) => {
                  onChange(changedPage);
                }}
              />
            </Box>
            <Box sx={{ width: '50px', height: '100%' }}> </Box>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          {...props}
        >
          <Typography variant="body2" style={{ color: grey[500] }}>
            Showing {showing} of {totalCount}
          </Typography>
          <MuiPagination
            count={Math.ceil(totalCount / pageSize)}
            shape="rounded"
            page={page}
            showFirstButton
            showLastButton
            renderItem={(item) => (
              <PaginationItem
                {...item}
                style={{
                  color: '#000000',
                  background: item.selected ? grey[400] : grey[300],
                  borderRadius: '5px',
                }}
              />
            )}
            onChange={(event: unknown, changedPage: number) => {
              onChange(changedPage);
            }}
          />
        </Box>
      )}
    </>
  );
}
