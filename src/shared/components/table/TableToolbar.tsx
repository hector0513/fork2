import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  StandardTextFieldProps,
  Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import * as React from 'react';
import { useDelay } from '../../hooks/delay';
import { CustomInput } from '../inputs/CustomInput';

export type DefaultRowSize = 10 | 20 | 50;

interface RowSelectorProps {
  onSelectRow?: (row: DefaultRowSize) => void;
  defaultRow?: DefaultRowSize;
}

/**
 * @param {StandardTextFieldProps} props - Material ui standard text field properties.
 * @returns {JSX.Element} - Table row per page options.
 */
export const RowSelector: React.FC<StandardTextFieldProps> = (props) => {
  const options = [
    { label: '10 Row(s)', value: 10 },
    { label: '20 Row(s)', value: 20 },
    { label: '50 Row(s)', value: 50 },
  ];

  return (
    <FormControl variant="outlined" fullWidth>
      <CustomInput select label="Rows" {...props}>
        {options.map((option) => (
          <MenuItem key={option.label} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomInput>
    </FormControl>
  );
};

/**
 * @param {StandardTextFieldProps} props - Properties.
 * @returns {JSX.Element} - Searcher table component.
 */
export const SearchInput: React.FC<StandardTextFieldProps> = (props) => (
  <FormControl variant="outlined" fullWidth>
    <CustomInput
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      label="Search"
      {...props}
    />
  </FormControl>
);

interface TableToolbarProps extends RowSelectorProps {
  rightComponent?: React.ReactNode | null | undefined;
  onSearch?: (value: string) => void;
  menuButtonComponent?: React.ReactNode | null | undefined;
}

/**
 * @param {TableToolbarProps} props - Properties.
 * @returns {JSX.Element} - Toolbar.
 */
export const TableToolbar: React.FC<TableToolbarProps> = (props) => {
  const { delayExecution } = useDelay();
  return (
    <Toolbar variant="dense" disableGutters>
      <Grid container direction="row" spacing={0}>
        {
          // Left component
        }
        <Grid
          container
          item
          xs={12}
          md={8}
          lg={10}
          alignContent="center"
          spacing={3}
        >
          <Grid item xs={12} sm={6} lg={3}>
            <SearchInput
              onChange={(e) => {
                // Delay execution to avoid the search to be executed on every key stroke.
                delayExecution(() => {
                  if (props.onSearch) props.onSearch(e.target.value);
                }, 300);
              }}
            />
          </Grid>

          {
            // Rows selector.
          }
          <Grid
            item
            xs={8}
            sm={4}
            lg={2}
            sx={{
              marginBottom: {
                xs: '24px',
                md: '0px',
              },
            }}
          >
            <RowSelector
              defaultValue={props.defaultRow || 10}
              onChange={(e) => {
                if (props.onSelectRow)
                  props?.onSelectRow(Number(e.target.value) as DefaultRowSize);
              }}
            />
          </Grid>

          {
            // Filter component.
          }
          <Grid item xs sm md lg>
            {props.menuButtonComponent || props.menuButtonComponent}
          </Grid>
        </Grid>
        {
          // Right Button.
        }
        {props.rightComponent ? (
          <Grid
            container
            item
            xs={12}
            sm
            md
            lg={2}
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={12} sm justifyContent="flex-end" display="flex">
              {props.rightComponent}
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </Toolbar>
  );
};
