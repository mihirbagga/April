import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TimelineIcon from '@material-ui/icons/Timeline';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import TableChartIcon from '@material-ui/icons/TableChart';
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
      <ListItemText primary="Dashboard" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>
 <ListItem button onClick={()=>handleClickOpen('chart')}>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="Charts" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
      <ListItem button className={classes.nested} onClick={()=>handleClick(1)}>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="Line Chart" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(2)}>
      <ListItemIcon>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="Pie Chart" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(3)}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Bar Chart" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>
  

        </List>
      </Collapse>
    
    
    
      <ListItem button onClick={()=>handleClickOpen('table')}>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="Table" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}}/>
        {openTab ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTab} timeout="auto" unmountOnExit>
        <List component="div" >
          
      <ListItem button className={classes.nested} onClick={()=>handleClick(4)}>
      <ListItemIcon>
        <TableChartIcon/>
      </ListItemIcon>
      <ListItemText primary="Table 1" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>

    <ListItem button className={classes.nested} onClick={()=>handleClick(5)}>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Table 2" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>
     
    <ListItem button className={classes.nested} onClick={()=>handleClick(6)}>
      <ListItemIcon>
        <TableChartIcon />
      </ListItemIcon>
      <ListItemText primary="Table 3" style={{fontFamily: 'Brush Script MT',fontStyle: "oblique",color:"#fc4c4e"}} />
    </ListItem>

    </List>
      </Collapse>
      </div>
      )
    }

