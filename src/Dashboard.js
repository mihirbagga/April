import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar:
  {
      backgroundColor:"cyan",
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Mihir 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
