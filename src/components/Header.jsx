/* eslint-disable react/prop-types */
import React from 'react';

import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#cc1c5d',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

const Header = ({ classes }) => (
  <AppBar position="absolute" className={classNames(classes.appBar)}>
    <Toolbar className={classes.toolbar}>
      <IconButton color="inherit" aria-label="Home">
        <Home />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Home
      </Typography>
      <IconButton color="inherit">
        <Person />
        <ArrowDownward />
      </IconButton>
    </Toolbar>
  </AppBar>
);
export default withStyles(styles)(Header);
