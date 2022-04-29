import { Box, BoxProps } from '@mui/system';

/**
 * @param {BoxProps} props - Props.
 * @param {JSX.Element}  props.children - Children components.
 * @returns {JSX.Element} - Card.
 */
export const CardBox: React.FC<BoxProps> = (props) => (
  <Box
    style={{
      background: '#fff',
      margin: '50px 0px',
      padding: '60px 40px',
      boxShadow: '0px 3px 0px #EDEDF6',
      borderRadius: '10px',
      ...props.style,
    }}
    {...props}
  >
    {props.children}
  </Box>
);
