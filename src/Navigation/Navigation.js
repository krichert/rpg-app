import React from 'react';

import withStyles from "@material-ui/core/es/styles/withStyles";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navigation = props => {
    const { classes } = props;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            RPG App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
};

export default withStyles(styles)(Navigation);
