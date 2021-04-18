import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles } from '@material-ui/core/styles';

//Styling 
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


//Function
export default function ListItemtext(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(false);
  
  //Open Menu
  const handleClickOpen = (state) => {
    if(state==='chart')
    setOpen(!open);
    else if(state==='table')
    setOpenTab(!openTab)
  };

//Open Submenu
const handleClick=(n)=>{
 props.setContainerView(n)
}

  return(
  <div>
  <ListItem button className={classes.nested} onClick={()=>handleClick(0)}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

 <ListItem button onClick={()=>handleClickOpen('chart')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
      <ListItem button className={classes.nested} onClick={()=>handleClick(1)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Line Chart" />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(2)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pie Chart" />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(3)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Bar Chart"  />
    </ListItem>
  

        </List>
      </Collapse>
    
    
    
      <ListItem button onClick={()=>handleClickOpen('table')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Table" />
        {openTab ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTab} timeout="auto" unmountOnExit>
        <List component="div" >
          
      <ListItem button className={classes.nested} onClick={()=>handleClick(4)}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Table 1" />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(5)}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Table 2" />
    </ListItem>
     
    <ListItem button className={classes.nested} onClick={()=>handleClick(6)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Table 3"  />
    </ListItem>

    </List>
      </Collapse>
      </div>
      )
    }

