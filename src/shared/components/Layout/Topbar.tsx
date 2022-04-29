import React from 'react';
import {
  AppBar,
  Divider,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Grid,
  Badge,
} from '@mui/material';
import clsx from 'clsx';
import { Box } from '@mui/system';
import { createStyles, makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface StylesProps {
  drawerWidth: number;
}

const useStyles = makeStyles<Theme, StylesProps>(() =>
  createStyles({
    appBar: {
      /* transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }), */
    },
    appBarShift: {
      /**
       *
       * @param {object} props - Styles Props.
       * @param {number} props.drawerWidth - DrawerWidth.
       * @returns {string} - Width Style.
       */
      width: (props) => `calc(100% - ${props.drawerWidth}px)`,
      /**
       *
       * @param {object} props - Styles Props.
       * @param {boolean} props.drawerWidth - Drawer Width.
       * @returns {number} - Drawer Width.
       */
      marginLeft: (props) => props.drawerWidth,
      backgroundColor: '#F6F6F6',
      /* transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }), */
    },
    menuButton: { marginRight: '8px' },
    hide: { display: 'none' },
    toolbar: { color: '#B2B2B2' },
    badge: {
      padding: 0,
      fontSize: 10,
      minWidth: 15,
      height: 15,
      backgroundColor: '#263238',
      color: '#fff  ',
    },
    badgeAnchorRight: { transform: 'scale(1) translate(60%, -15%)' },
    divider: { marginLeft: '8px', marginRight: '8px' },
    userTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
      lineHeight: 1.2,
    },
    userRole: {
      lineHeight: 1.2,
      fontSize: 14,
      fontWeight: 500,
    },
  }),
);

interface TopbarProps {
  sidebarOpen: boolean;
  drawerWidth: number;
}

/**
 * @param {object} props - Sidebar Props.
 * @param {boolean} props.sidebarOpen - Open Boolean.
 * @param {number} props.drawerWidth - Drawer Width.
 * @returns Component.
 */
export const Topbar: React.FC<TopbarProps> = ({ drawerWidth, sidebarOpen }) => {
  const classes = useStyles({ drawerWidth });
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );
  const isOpenMenu = Boolean(menuAnchorEl);

  /**
   * @param event - Event.
   */
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setMenuAnchorEl(event.currentTarget);
  };

  /**
   * @returns {void}
   */
  const handleCloseMenu = (): void => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      className={clsx(classes.appBar, { [classes.appBarShift]: sidebarOpen })}
    >
      <Toolbar className={classes.toolbar}>
        <Box flexGrow={1}>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton
                color="inherit"
                // onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>Home</Typography>
            </Grid>
          </Grid>
        </Box>
        <div>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton color="inherit">
                <Badge
                  color="default"
                  badgeContent="+4"
                  classes={{
                    badge: classes.badge,
                    anchorOriginTopRightRectangular: classes.badgeAnchorRight,
                  }}
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
            <Divider
              className={classes.divider}
              orientation="vertical"
              flexItem
            />
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar alt="user" />
                </Grid>
                <Grid item>
                  <Grid container direction="column" justifyContent="center">
                    <Grid item>
                      <Typography className={classes.userTitle}>
                        Wilson Carson
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.userRole}>
                        Administrator
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleOpenMenu}>
                    <ArrowDropDownIcon />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={isOpenMenu}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
};
