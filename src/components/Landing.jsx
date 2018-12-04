/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Sort from '@material-ui/icons/Sort';
import Filter from '@material-ui/icons/Filter';
import Search from '@material-ui/icons/Search';
import Upload from '@material-ui/icons/CloudUpload';
import ListItem from '@material-ui/core/ListItem/ListItem';
import Grid from '@material-ui/core/Grid/Grid';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Card from '@material-ui/core/Card/Card';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button/Button';
import MainListItems from './listItems';
import Header from './Header';

const drawerWidth = 240;
const anotherDrawerWidth = 350;

const userList = [
  {
    name: 'Some random user 1',
    subtitle: 'Application developer',
    empId: 17929,
    selected: true,
  },
  {
    name: 'Some random user 2',
    subtitle: 'Application developer',
    empId: 17930,
  },
  {
    name: 'Some random user 3',
    subtitle: 'Application developer',
    empId: 17930,
    alreadyRead: true,
  },
  {
    name: 'Some random user 4',
    subtitle: 'Application developer',
    empId: 17930,
    alreadyRead: true,
  },
];
const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  anotherDrawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: anotherDrawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  card: {
    margin: theme.spacing.unit * 3,
  },
  primaryButton: {
    background: '#cc1c5d',
    color: '#fff',
    margin: theme.spacing.unit * 2,
  },
  secondaryButton: {
    background: '#fff',
    color: '#cc1c5d',
    border: '1px solid #cc1c5d',
    margin: theme.spacing.unit * 2,
  },
  buttons: {
    float: 'right',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: 300,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cat in the Hat',
      multiline: 'Controlled',
    };
  }

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { name, multiline } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
        >
          <div className={classes.appBarSpacer} />
          <Divider />
          <List>
            <MainListItems />
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.anotherDrawerPaper),
          }}
        >
          <div className={classes.appBarSpacer} />
          <div className={classes.toolbarIcon}>
            <IconButton>
              <Sort />
            </IconButton>
            <IconButton>
              <Filter />
            </IconButton>
            <IconButton>
              <Search />
            </IconButton>
          </div>
          <Divider />
          <List component="nav">
            {userList.map(user => (
              <Fragment>
                <ListItem
                  selected={user.selected}
                  button
                  style={{ display: 'block' }}
                >
                  <Typography align="center" variant="h6">
                    {user.name}
                  </Typography>
                  <Typography align="center" variant="body1">
                    {user.subtitle}
                  </Typography>
                  <Typography align="center" variant="body2">
                    {user.empId}
                  </Typography>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Some random user 1</Typography>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
                <TextField
                  id="standard-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  error
                  id="standard-error"
                  label="Error"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                />
                <TextField
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  id="standard-dense"
                  label="Dense"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  value={multiline}
                  onChange={this.handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                />
              </form>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Typography variant="h6">Upload Documents</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body2">RTO Set</Typography>
                </Grid>
                <Grid item xs={2}>
                  <div style={{ display: 'flex' }}>
                    <Upload />
                    <Typography style={{ color: '#cc1c5d' }} variant="body2">
                      Upload
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.buttons}>
            <Button variant="contained" className={classes.secondaryButton}>
              Secondary
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.primaryButton}
            >
              Primary
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
