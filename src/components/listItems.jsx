/* eslint-disable react/prop-types */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Inbox from '@material-ui/icons/MoveToInbox';
import Profile from '@material-ui/icons/Person';
import List from '@material-ui/core/List/List';
import Dashboard from '@material-ui/icons/Dashboard';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import Button from '@material-ui/core/Button/Button';

const styles = () => ({
  root: {
    display: 'flex',
  },
  list: {
    color: '#cc1c5d',
  },
  button: {
    margin: 0,
    padding: 0,
    background: '#cc1c5d',
    color: '#fff',
  },
});

const inboxItems = ['Rework', 'Submitted', 'Closed', 'Rejected', 'Discarded'];
const MainListItems = ({ classes }) => (
  <div>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <Inbox />
        </ListItemIcon>
        <ListItemText primary="Inbox/Tasks" />
      </ListItem>
    </List>
    <List component="nav">
      <ListItem button>
        <ListItemText
          secondary="New"
          color="inherit"
          classes={{ secondary: classNames(classes.list) }}
        />
        <Button variant="small" aria-label="Add" className={classes.button}>
          4
        </Button>
      </ListItem>
      {inboxItems.map(item => (
        <ListItem button>
          <ListItemText secondary={item} />
        </ListItem>
      ))}
    </List>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <Profile />
        </ListItemIcon>
        <ListItemText primary="Profile settings" />
      </ListItem>
    </List>
  </div>
);

export default withStyles(styles)(MainListItems);
