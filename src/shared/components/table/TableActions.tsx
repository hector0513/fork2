import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { grey } from '@mui/material/colors';

interface Option {
  label: string;
  value: string;
}

interface TableActionsProps {
  options: Array<Option>;
  onChange: (option: Option) => void;
}

/**
 * @param {TableActionsProps} props - Properties.
 * @returns {JSX.Element} - Actions menu.
 */
export const TableActions: React.FC<TableActionsProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * @param {React.MouseEvent<HTMLElement>} event - Event.
   */
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * @param {number} index - Index.
   */
  const handleMenuItemClick = (index: number): void => {
    props.onChange(props.options[index]);
    setAnchorEl(null);
  };

  /**
   * @description - Close menu.
   */
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="small"
        style={{ background: grey[300], borderRadius: '5px' }}
        onClick={handleClickListItem}
      >
        <MoreHorizIcon style={{ color: '#000000' }} />
      </IconButton>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {props.options.map((option, index) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(index)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
