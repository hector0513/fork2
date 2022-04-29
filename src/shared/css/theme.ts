// import { createMuiTheme } from '@mui/material/styles';
import { PaletteColorOptions, PaletteColor } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { LinkBehavior } from '../components/buttons';
// import type {} from '@mui/lab/themeAugmentation';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    delete: PaletteColorOptions;
    accent: PaletteColorOptions;
    surfaceOverlay: PaletteColorOptions;
    variant: PaletteColorOptions;
    white?: PaletteColorOptions;
    black?: PaletteColorOptions;
    icons: PaletteColorOptions;
  }

  interface PaperPropsVariantOverrides {
    card: true;
  }
  interface Palette {
    surfaceOverlay: PaletteColor;
    icons: PaletteColor;
    delete: PaletteColor;
    variant: PaletteColor;
    accent: PaletteColor;
  }
}
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    card: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    delete: true;
    default: true;
  }
}

export const LAYOUT_SIZE = 60;
export const PRIMARY = '#005A42';
export const PRIMARY_LIGTH = '#F6F6F6';
export const GRAY = '#969CBA';
export const GRAY_LIGTH = '#A6ACBE';
export const RED_DELETE = '#EF5350';

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: PRIMARY,
      },
      icons: {
        main: '#C9CED6',
      },
      accent: {
        main: '#E62021',
      },
      secondary: {
        main: PRIMARY_LIGTH,
        light: '#7b4bc9',
      },
      error: {
        main: RED_DELETE,
      },
      delete: {
        main: RED_DELETE,
      },
      variant: {
        main: '#FFB800',
        light: '#5BC2BA',
      },
      surfaceOverlay: {
        main: '#21212108',
      },
      white: {
        main: '#fff',
      },
      black: {
        main: '#000000',
        dark: '#181518',
      },
      text: {
        primary: GRAY,
        secondary: GRAY_LIGTH,
      },
    },
    typography: {
      body1: {
        color: GRAY,
      },
      body2: {
        color: GRAY,
      },
      h4: {
        color: '#000',
      },
      h5: { color: '#000' },
      allVariants: {
        fontFamily: [
          'Poppins',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ].join(','),
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            color: 'rgba(0,0,0,.75)',
          },
        },
      },
      MuiSnackbar: {
        styleOverrides: {
          root: {
            left: '100px !important',
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            minHeight: '100%',
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            minHeight: '100%',
            overflowY: 'auto',
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          groupLabel: {
            color: '#000',
            fontWeight: 'bold',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            maxHeight: '100%',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {},
        variants: [
          {
            props: {
              variant: 'card',
            },
            style: {
              borderRadius: '10px',
              padding: 20,
              boxShadow: '0px 3px 0px #EDEDF6',
              maxHeight: '100%',
              overflowY: 'auto',
            },
          },
        ],
      },
      MuiInputLabel: {
        defaultProps: {},
        styleOverrides: {
          outlined: {
            '&:not(.Mui-focused):not(.MuiFormLabel-filled)': {
              top: '-7px',
            },
            // color: 'rgba(0,0,0,.75)',
          },
        },
      },
      MuiTableCell: {
        defaultProps: {
          size: 'small',
        },
      },
      MuiSelect: {
        styleOverrides: {
          outlined: {
            lineHeight: '1.5rem',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            borderColor: 'red',
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          root: {
            '& fieldset': {
              border: '3px solid #CCCCCC',
              boxSizing: 'borderbox',
              borderRadius: '12px',
            },
            '& .MuiInputAdornment-root': {
              color: '#CCCCCC',
            },
            background: '#fff',
            color: 'rgba(0,0,0,.75)',
            lineHeight: '1rem',
            '& input': {
              border: 'none',
            },
            'label[data-shrink="false"] + &': {
              '& input': {
                color: 'transparent',
              },
            },
          },
        },
        // variants: {},
      },
      MuiFab: {
        styleOverrides: {
          circular: {
            borderRadius: '24px',
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          color: 'primary',
          variant: 'contained',
          style: {
            textTransform: 'none',
          },
        },
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
        variants: [
          {
            props: {
              variant: 'delete',
            },
            style: {
              color: RED_DELETE,
              '&:hover': {
                backgroundColor: '#EF53503B',
              },
            },
          },
          {
            props: {
              variant: 'default',
            },
            style: {
              color: GRAY,
              '&:hover': {
                backgroundColor: '#b6b6b62d',
              },
            },
          },
          {
            props: {
              variant: 'contained',
              color: 'error',
            },
            style: {
              color: '#EF5350',
              backgroundColor: '#EF53503B',
              borderRadius: '12px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#EF5350',
                color: '#fafafa',
                boxShadow: 'none',
              },
            },
          },
          {
            props: {
              variant: 'contained',
              color: 'secondary',
            },
            style: {
              color: '#fff',
              backgroundColor: '#5BC2BA',
              borderRadius: '12px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#207f77',
                color: '#fafafa',
                boxShadow: 'none',
              },
            },
          },
          {
            props: {
              variant: 'text',
              color: 'primary',
            },
            style: {
              color: ' #3A526A',
              fontWeight: 'bold',
            },
          },
        ],
      },
      MuiTypography: {},
    },
  },
  {
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        },
        variants: [
          {
            props: {
              color: 'blue',
            },
            style: {
              color: GRAY,
              '&:hover': {
                color: PRIMARY,
              },
            },
          },
          {
            props: {
              color: 'gray',
            },
            style: {
              textAling: 'left',
              svg: { fontSize: '12px' },
            },
          },
        ],
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiChip: {
        variants: [
          {
            props: {
              variant: 'outlined',
            },
            style: {
              border: 'none',
              fontSize: '15px',
              svg: {
                width: '10px',
              },
            },
          },
          {
            props: {
              color: 'error',
            },
            style: {
              color: RED_DELETE,
              svg: {
                color: RED_DELETE,
              },
            },
          },
          {
            props: {
              color: 'secondary',
            },
            style: {
              color: PRIMARY_LIGTH,
              svg: {
                color: PRIMARY_LIGTH,
              },
            },
          },
          {
            props: {
              color: 'warning',
            },
            style: {
              color: '#FFB800',
              svg: {
                color: '#FFB800',
              },
            },
          },
        ],
      },
    },
  },
);

export const formTheme = createTheme({
  components: {
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& fieldset,&.Mui-focused fieldset': {
            borderWidth: '3px !important',
            borderRadius: '10px',
          },
          color: 'rgba(0,0,0,.75)',
          background: '#fff',
          // color: GRAY_LIGTH,
          lineHeight: '1rem',
          '& input': {
            border: 'none',
          },
          'label[data-shrink="false"] + &': {
            '& input': {
              color: 'transparent',
            },
          },
        },
      },
    },
  },
});
