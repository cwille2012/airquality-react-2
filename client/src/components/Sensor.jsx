import React from 'react'
import SensorAPI from '../api-sensors'
import { Link } from 'react-router-dom'
import SensorFunctions from '../sensor-functions'

const Sensor = (props) => {
  console.log(props.match.params.id)
  const sensor = SensorAPI.get(
    String(props.match.params.id)
  )
  console.log(sensor)
  if (!sensor) {
    return <div>Sorry, but the sensor was not found</div>
  }
  return (
    <div>
      <h1>{sensor.id}</h1>
      <h4 id='name'>Sensor Name: {sensor.name}</h4>
      <h4 id='group'>Sensor Group: {sensor.group}</h4>
      <h4 id='location'>Sensor Location: {sensor.location}</h4>
      <h4 id='long'>Sensor Longitude: {sensor.long}</h4>
      <h4 id='lat'>Sensor Latitude: {sensor.lat}</h4>
      <h4>Sensor Status: {sensor.status}</h4>
      <h4>Sensor ID: {sensor.id}</h4>

      <button id='editButton' onClick={() => {console.log(SensorFunctions.edit(sensor))}}>Edit Sensor</button>
      <button id='saveButton' style={{display: 'none' }} onClick={() => {console.log(SensorFunctions.save(sensor))}}>Save Sensor</button>

      <br/>
      <br/>

      <Link to='/sensors'>Back</Link>
    </div>
  )
}

export default Sensor
