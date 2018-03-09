const SensorFunctions = {
  edit: function(sensor) { 
    //EDIT
    var nameInput = document.createElement("INPUT");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", 'nameInput');
    nameInput.setAttribute("value", sensor.name);

    var groupInput = document.createElement("INPUT");
    groupInput.setAttribute("type", "text");
    groupInput.setAttribute("id", 'groupInput');
    groupInput.setAttribute("value", sensor.group);

    var locationInput = document.createElement("INPUT");
    locationInput.setAttribute("type", "text");
    locationInput.setAttribute("id", 'locationInput');
    locationInput.setAttribute("value", sensor.location);

    var addressInput = document.createElement("INPUT");
    addressInput.setAttribute("type", "text");
    addressInput.setAttribute("id", 'addressInput');
    addressInput.setAttribute("value", sensor.address);

    var floorInput = document.createElement("INPUT");
    floorInput.setAttribute("type", "text");
    floorInput.setAttribute("id", 'floorInput');
    floorInput.setAttribute("value", sensor.floor);

    var roomInput = document.createElement("INPUT");
    roomInput.setAttribute("type", "text");
    roomInput.setAttribute("id", 'roomInput');
    roomInput.setAttribute("value", sensor.room);

    var longInput = document.createElement("INPUT");
    longInput.setAttribute("type", "number");
    longInput.setAttribute("id", 'longInput');
    longInput.setAttribute("value", sensor.long);

    var latInput = document.createElement("INPUT");
    latInput.setAttribute("type", "number");
    latInput.setAttribute("id", 'latInput');
    latInput.setAttribute("value", sensor.lat);

    document.getElementById('name').innerHTML = 'Sensor Name: ';
    document.getElementById('name').appendChild(nameInput);
    document.getElementById('group').innerHTML = 'Sensor Group: ';
    document.getElementById('group').appendChild(groupInput);
    document.getElementById('location').innerHTML = 'Sensor Location: ';
    document.getElementById('location').appendChild(locationInput);
    document.getElementById('address').innerHTML = 'Sensor Address: ';
    document.getElementById('address').appendChild(addressInput);
    document.getElementById('floor').innerHTML = 'Sensor Floor: ';
    document.getElementById('floor').appendChild(floorInput);
    document.getElementById('room').innerHTML = 'Sensor Room: ';
    document.getElementById('room').appendChild(roomInput);
    document.getElementById('long').innerHTML = 'Sensor Longitude: ';
    document.getElementById('long').appendChild(longInput);
    document.getElementById('lat').innerHTML = 'Sensor Latitude: ';
    document.getElementById('lat').appendChild(latInput);

    document.getElementById('editButton').style.display ='none';
    document.getElementById('removeButton').style.display ='none';
    document.getElementById('cancelButton').style.display ='block';
    document.getElementById('saveButton').style.display ='block';
    
    return ('sensor now editable')
  },
  //CANCEL-EDIT
  cancelEdit: function(sensor) {
    document.getElementById('name').innerHTML = 'Sensor Name: ' + sensor.name;
    document.getElementById('group').innerHTML = 'Sensor Group: ' + sensor.group;
    document.getElementById('location').innerHTML = 'Sensor Location: ' + sensor.location;
    document.getElementById('address').innerHTML = 'Sensor Address: ' + sensor.address;
    document.getElementById('floor').innerHTML = 'Sensor Floor: ' + sensor.floor;
    document.getElementById('room').innerHTML = 'Sensor Room: ' + sensor.room;
    document.getElementById('long').innerHTML = 'Sensor Longitude: ' + sensor.long;
    document.getElementById('lat').innerHTML = 'Sensor Latitude: ' + sensor.lat;

    document.getElementById('editButton').style.display ='block';
    document.getElementById('removeButton').style.display ='block';
    document.getElementById('cancelButton').style.display ='none';
    document.getElementById('saveButton').style.display ='none';

    return ('editing cancelled')
  },
  //SAVE
  save: function(sensor) {
    sensor.name = document.getElementById('nameInput').value;
    sensor.group = document.getElementById('groupInput').value;
    sensor.location = document.getElementById('locationInput').value;
    sensor.address = document.getElementById('addressInput').value;
    sensor.floor = document.getElementById('floorInput').value;
    sensor.room = document.getElementById('roomInput').value;
    sensor.long = document.getElementById('longInput').value;
    sensor.lat = document.getElementById('latInput').value;

    document.getElementById('name').innerHTML = 'Sensor Name: ' + sensor.name;
    document.getElementById('group').innerHTML = 'Sensor Group: ' + sensor.group;
    document.getElementById('location').innerHTML = 'Sensor Location: ' + sensor.location;
    document.getElementById('address').innerHTML = 'Sensor Address: ' + sensor.address;
    document.getElementById('floor').innerHTML = 'Sensor Floor: ' + sensor.floor;
    document.getElementById('room').innerHTML = 'Sensor Room: ' + sensor.room;
    document.getElementById('long').innerHTML = 'Sensor Longitude: ' + sensor.long;
    document.getElementById('lat').innerHTML = 'Sensor Latitude: ' + sensor.lat;

    document.getElementById('editButton').style.display ='block';
    document.getElementById('removeButton').style.display ='block';
    document.getElementById('saveButton').style.display ='none';
    document.getElementById('cancelButton').style.display ='none';

    var postData = JSON.stringify(sensor);
    var validJSON = true;
    try {
      JSON.parse(postData);
    } catch (e) {
      validJSON = false;
      return('JSON error: ' + e)
    }
    if (validJSON) {
      var url = String(window.location.href);
      url = url.replace(sensor.id, '');
      url = url.replace(/sensors/g, 'api/sensors');
      url = url.replace(/3000/g, '5000');
      console.log(url);

      var method = "POST";
      var shouldBeAsync = true;
      var request = new XMLHttpRequest();

      request.onload = function() {
          var status = request.status;
          var data = request.responseText;
          if (status === 200) {
              console.log('success: ' + data);
          } else {
              console.log('error: ' + data);
          }
      }
      request.open(method, url, shouldBeAsync);
      request.setRequestHeader("Content-Type", "application/json");
      request.send(postData);
    }

    return ('saved ' + sensor.id)
  },
  //ADD
  add: function(sensor) {

    //check if exists 
    //add list of detected but not set up sensors
    return ('adding ' + sensor.id)
  },
  //REMOVE-VERIFY
  removeVerify: function() {
    document.getElementById('removePopup').style.display ='block';
    return ('please verify')
  },
  //REMOVE-CANCEL
  removeCancel: function() {
    document.getElementById('removePopup').style.display ='none';
    return ('action cancelled')
  },
  //REMOVE
  remove: function(sensor) {
    document.getElementById('removePopupBody').style.display ='none';
    document.getElementById('removeLoader').style.display ='block';

    var newLocation = window.location.href.replace(sensor.id, '');
    newLocation = newLocation.slice(0, -1);
    console.log(newLocation);
    return ('removed ' + sensor.id)
  }
}

export default SensorFunctions
