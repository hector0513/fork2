import * as React from 'react';
import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  MenuItem,
  Popover,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import { CustomInput } from './inputs/CustomInput';

// For filter menu
export interface FilterValuesProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
}
interface FilterMenuProps {
  onCancel: () => void;
  onApply: (filter: FilterValuesProps) => void;
}
const colorRadio = {
  '&': {
    color: '#32324733',
  },
};
/**
 * @param {FilterMenuProps} props - Properties.
 * @returns {JSX.Element} - Filter Menu.
 */
export const FilterMenu: React.FC<FilterMenuProps> = (props) => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  const [open, setOpen] = React.useState(false);

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <IconButton size="small" {...bindTrigger(popupState)}>
            <AddRoadIcon style={{ color: '#000000' }} />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            sx={{ marginTop: 15 }}
          >
            <Grid container spacing={2} sx={{ p: 2, width: 300 }}>
              <Grid item xs={12}>
                <Typography
                  style={{
                    color: '#8392AB',
                    marginLeft: '5px',
                    marginBottom: '15px',
                  }}
                >
                  Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    open={open}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                      if (newValue[0] !== null && newValue[1] !== null) {
                        setOpen(false);
                      }
                    }}
                    renderInput={(startProps, endProps) => (
                      <>
                        <TextField
                          {...startProps}
                          onClick={() => setOpen(true)}
                          label="From"
                          size="small"
                          style={{ marginRight: 5, width: '50%' }}
                        />
                        <TextField
                          {...endProps}
                          onClick={() => setOpen(true)}
                          label="To"
                          size="small"
                          style={{ marginLeft: 5, width: '50%' }}
                        />
                      </>
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ color: '#8392AB', marginLeft: '5px' }}>
                  Dropdown
                </Typography>
                <CustomInput
                  style={{ width: '80%', marginLeft: '5px' }}
                  select
                  fullWidth
                >
                  <MenuItem>Select ...</MenuItem>
                </CustomInput>
              </Grid>

              <Grid item xs={12}>
                <Typography style={{ color: '#8392AB', marginLeft: '5px' }}>
                  Gender
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio sx={colorRadio} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio sx={colorRadio} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio sx={colorRadio} />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs style={{ marginRight: 5 }}>
                  <Button
                    variant="text"
                    onClick={() => {
                      setValue([null, null]);
                      popupState.close();
                      props.onCancel();
                    }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid
                  item
                  xs
                  style={{ marginLeft: 5 }}
                  justifyContent="right"
                  display="flex"
                >
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => {
                      props.onApply({
                        startDate: value[0] ?? undefined,
                        endDate: value[1] ?? undefined,
                      });
                    }}
                  >
                    Apply
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};
