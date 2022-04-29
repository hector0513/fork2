import { styled } from '@mui/material/styles';
import { theme as appTheme } from '../css/theme';

const StyledPill = styled('span')<{
  color: string;
}>(({ color, theme }) => ({
  background: color,
  color: '#fff',
  borderRadius: '100px',
  fontWeight: 'bold',
  padding: '8px 12px',
  fontsize: '12px',
  maxWidth: 100,
  minWidth: 100,
  display: 'inline-block',
  [theme.breakpoints.down('md')]: {
    minWidth: '110px',
    textAlign: 'center',
  },
}));

const { text: textColor, variant, delete: deleteColor } = appTheme.palette;

const blackColor = '#181518';
const orange = '#FE5722';
const blue = '#4C6FFF';

const colors = [
  variant.light,
  blackColor,
  deleteColor.main,
  textColor.primary,
  orange,
  blue,
] as const;

type Indices<T extends readonly unknown[]> = Exclude<
  Partial<T>['length'],
  T['length']
>;

export type PillsTypeProp =
  | Indices<typeof colors>
  | Exclude<keyof typeof colors, keyof []>;

/**
 * @param root0 - Props.
 * @param root0.text - Children text.
 * @param root0.type - Type.
 * @returns Component.
 */
export function Pill({
  text,
  type,
}: {
  text: string;
  type: PillsTypeProp;
}): JSX.Element {
  const color = colors[type];

  return <StyledPill color={color}>{text}</StyledPill>;
}
