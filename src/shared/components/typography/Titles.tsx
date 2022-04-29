import { Typography, TypographyProps } from '@mui/material';
import { createStyles, withStyles } from '@mui/styles';

const MuiTitle = withStyles(() =>
  createStyles({
    root: {
      fontSize: '18px',
      color: '#425466',
      fontWeight: 'bold',
      textAlign: 'left',
    },
  }),
)(Typography);

/**
 * @param {TypographyProps} props - Typography Props.
 * @returns {JSX.Element} - Title Text.
 */
export const Title: React.FC<TypographyProps> = (props: TypographyProps) => (
  <MuiTitle {...props} />
);

const MuiSubTitle = withStyles(() =>
  createStyles({
    root: {
      fontSize: '14px',
      color: '#425466',
      fontWeight: 600,
    },
  }),
)(Typography);

/**
 * @param {TypographyProps} props - Typography Props.
 * @returns {JSX.Element} - Title Text.
 */
export const SubTitle: React.FC<TypographyProps> = (props: TypographyProps) => (
  <MuiSubTitle {...props} />
);
