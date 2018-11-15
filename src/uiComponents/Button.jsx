import React from 'react';
import PropTypes from 'prop-types';

import MaterialButton from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const style = {
  progress: {
    marginTop: 12,
  },
};

const Button = ({ classes, children }) => (
  <p>
    <MaterialButton
      className={classes.progress}
      variant="contained"
      color="primary"
    >
      {children}
    </MaterialButton>
  </p>
);

Button.defaultProps = {
  classes: {},
};

Button.propTypes = {
  classes: PropTypes.shape(PropTypes.object),
  children: PropTypes.node.isRequired,
};

export default withStyles(style)(Button);
