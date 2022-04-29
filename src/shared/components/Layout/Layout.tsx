import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@mui/styles';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';

const drawerWidth = 88;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
    },
    content: {
      backgroundColor: '#F0F0F0',
      flexGrow: 1,
      /* transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }), */
      marginLeft: -drawerWidth,
      overflow: 'auto',
    },
    contentShift: {
      /* transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }), */
      marginLeft: 0,
    },
    toolbar: {
      /* marginBottom: '50px', */
    },
    children: {
      marginTop: '64px',
      /* marginLeft: '88px',
      padding: '40px', */
    },
  }),
);

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * @param {object} props - Props.
 * @param {JSX.Element} props.children - Children to render.
 @returns {JSX.Element} - Layout component of the app.
 */
export function Layout({ children }: LayoutProps): JSX.Element {
  const [sidebarOpen] = useState(true);
  const classes = useStyles();

  /**
   * Handle Drawer Open Status.
   *
   * @returns {void}
   */
  // const handleDrawerToggle = (): void => setDrawerOpen(!drawerOpen);
  return (
    <div className={classes.root}>
      <Topbar sidebarOpen={sidebarOpen} drawerWidth={drawerWidth} />
      <Sidebar open={sidebarOpen} drawerWidth={drawerWidth} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: sidebarOpen,
        })}
      >
        <div className={classes.toolbar} />
        <div className={classes.children}>{children}</div>
      </main>
    </div>
  );
}
