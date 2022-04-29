import { Button, Typography, ButtonProps } from '@mui/material';
import { Box } from '@mui/system';
import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { createStyles, withStyles } from '@mui/styles';

export const LinkBehavior = forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Omit<LinkProps, 'to'> & { href: LinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;

  // Map href (MUI) -> to (react-router)
  return <Link ref={ref} to={href} {...other} />;
});

interface BackButtonProps {
  onClick: () => void;
  text: string;
}

/**
 * @param {BackButtonProps} BackButtonProps - Props.
 * @param {string} BackButtonProps.onClick - Function onClick.
 * @param {string} BackButtonProps.text - Text for the button.
 * @returns {JSX.Element} - Button.
 */
export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  text,
}): JSX.Element => (
  <Box
    display="flex"
    flexDirection="row"
    alignItems="center"
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    <KeyboardArrowLeftIcon />
    <Typography sx={{ fontSize: '14px', color: '#181518' }}>{text}</Typography>
  </Box>
);

const MuiButton = withStyles(() =>
  createStyles({
    root: {
      '&:hover': {
        backgroundColor: '#3A526A',
      },
      backgroundColor: '#5BC2BA',
      fontSize: '14px',
    },
  }),
)(Button);

const MuiRedButton = withStyles(() =>
  createStyles({
    root: {
      '&:hover': {
        backgroundColor: '#FE5722',
        color: '#fff',
      },
      backgroundColor: '#FE57224D',
      color: '#FE5722',
      fontSize: '14px',
    },
  }),
)(Button);

/**
 * @param {ButtonProps} props - Button Props.
 * @returns {JSX.Element} - Cases view.
 */
export const PrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => (
  <MuiButton variant="contained" {...props} />
);

/**
 * @param {ButtonProps} props - Button Props.
 * @returns {JSX.Element} - Cases view.
 */
export const RedButton: React.FC<ButtonProps> = (props: ButtonProps) => (
  <MuiRedButton variant="contained" {...props} />
);
