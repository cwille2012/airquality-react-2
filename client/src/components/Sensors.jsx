import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SensorList from './SensorList'
import Sensor from './Sensor'

const Sensors = () => (
  <div>
    <h3>Sensor List</h3>
    <Switch>
      <Route exact path='/sensors' component={SensorList}/>
      <Route path='/sensors/:id' component={Sensor}/>
    </Switch>
  </div>
)

export default Sensors