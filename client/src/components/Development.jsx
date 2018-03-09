import React from 'react'
import DevFunctions from '../dev-functions'

const Development = () => (
  <div className='main'>
    <h3 style={{marginBottom: '0'}}>Development Options</h3>
    <h5 style={{marginTop: '0'}}>WARNING: For development use only.</h5>

    <button id='testButton' onClick={() => {console.log(DevFunctions.test('test'))}}>Test</button>
    <button id='testPostButton' onClick={() => {console.log(DevFunctions.postTest())}}>Test Post</button>
    <br/>
    <br/>
    <textarea id='postTextArea' rows="4" cols="50"></textarea>
    <br/>
    <select id='destinationSelect'>
      <option style={{display: 'none'}}>Destination</option>
      <option value="sensors">sensors</option>
      <option value="users">users</option>
      <option value="whitelist">whitelist</option>
    </select>
    <br/>
    <button id='postTextButton' onClick={() => {console.log(DevFunctions.postTextArea())}}>Post Text Area</button>
    <br/>
    <br/>
    <button id='getSensorsButton' onClick={() => {console.log(DevFunctions.getSensors())}}>Get Sensors</button>
    <div id='sensorResultDiv' style={{maxWidth: '400px', fontSize: '12px'}}></div>
  </div>
)

export default Development
