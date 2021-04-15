import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItemtext from './ListItemtext'
import Ch from './charts'
import Pie from './Pie'
import Barr from './Bar'
import Table from './Table'
import Table2 from './Table2'
import Table3 from './Table3'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  bar:{
    backgroundColor:"black",
    borderBottom: "2px grey"
},
bg:
{
  backgroundColor:"pink"
}
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [view,setView]=useState(<Ch/>)
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const setContainerView=(n)=>
 { if(n===1)
   {setView(<Ch />)}
   else if(n===2)
   {setView(<Pie/>)}
   else if(n===3)
   { setView(<Barr/>)}
   else if(n===4)
   { setView(<Table />)}
   else if(n===5)
   { setView(<Table2/>)} 
   else if(n===6)
   { setView(<Table3/>)}
 }
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed" className={classes.bar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onMouseEnter={handleDrawerOpen}
            edge="start"
          >
              
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemtext setContainerView={setContainerView}/>
        </List>
      </Drawer>
      <main className={classes.content}  >
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        {view}
        
         
        </Container>
        </main>
    </div>
  );
}
