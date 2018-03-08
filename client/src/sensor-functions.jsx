const SensorFunctions = {
  edit: function(sensor) { 
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
    document.getElementById('long').innerHTML = 'Sensor Longitude: ';
    document.getElementById('long').appendChild(longInput);
    document.getElementById('lat').innerHTML = 'Sensor Latitude: ';
    document.getElementById('lat').appendChild(latInput);
    document.getElementById('editButton').style.display ='none';
    document.getElementById('saveButton').style.display ='block';
    
    return 'finished'
  },
  save: function(sensor) {
    sensor.name = document.getElementById('nameInput').value;
    sensor.group = document.getElementById('groupInput').value;
    sensor.location = document.getElementById('locationInput').value;
    sensor.long = document.getElementById('longInput').value;
    sensor.lat = document.getElementById('latInput').value;

    document.getElementById('name').innerHTML = 'Sensor Name: ' + sensor.name;
    document.getElementById('group').innerHTML = 'Sensor Group: ' + sensor.group;
    document.getElementById('location').innerHTML = 'Sensor Location: ' + sensor.location;
    document.getElementById('long').innerHTML = 'Sensor Longitude: ' + sensor.long;
    document.getElementById('lat').innerHTML = 'Sensor Latitude: ' + sensor.lat;

    document.getElementById('editButton').style.display ='block';
    document.getElementById('saveButton').style.display ='none';

    console.log(sensor);
    return ('saved ' + sensor.id)
  }
}

export default SensorFunctions
