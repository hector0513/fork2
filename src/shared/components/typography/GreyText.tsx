import { Typography, TypographyProps } from '@mui/material';
import { createStyles, withStyles } from '@mui/styles';

const MuiGreyText = withStyles(() =>
  createStyles({
    root: {
      fontSize: '14px',
      color: '#8C8C8C',
      fontWeight: 400,
      lineHeight: '20px',
    },
  }),
)(Typography);

/**
 * @param {TypographyProps} props - Typography Props.
 * @returns {JSX.Element} - Grey Text.
 */
export const GreyText: React.FC<TypographyProps> = (props: TypographyProps) => (
  <MuiGreyText {...props} />
);
