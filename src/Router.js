import React from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import  Ch from './charts'

import Drawer from './Drawer'
import Piec from './Pie'
import Barc from './Bar'
import Table from './Table'

function AdminRouter(props) {
 return(
<div>
  <Router>
  <Route  component={Drawer} path='/'  exact strict history={props.history} /> 
     <Route  component={Ch} path='/Line'  exact strict history={props.history} /> 
     <Route  component={Barc} path='/Bar'  exact strict history={props.history} /> 
     <Route  component={Piec} path='/Pie'  exact strict history={props.history} /> 
     <Route  component={Table} path='/Table'  exact strict history={props.history} /> 
     <Route  component={Ch} path='/Line'  exact strict history={props.history} /> 
  </Router>
</div>


 )

}
export default AdminRouter;