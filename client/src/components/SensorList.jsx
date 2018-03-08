import React from 'react'
import SensorAPI from '../api-sensors'
import { Link } from 'react-router-dom'

const SensorList = () => (
  <div>
    <ul>
      {
        SensorAPI.all().map(s => (
          <li key={s.id}>
            <Link to={`/sensors/${s.id}`}>{s.id}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default SensorList
