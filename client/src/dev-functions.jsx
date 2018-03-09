const DevFunctions = {
  test: function(passthrough) { 
    return(passthrough)
  },
  postTest: function() { 
    var postData = new Object({
      "text": "test text",
      "number": 300
    });
    var url = String(window.location.href);
    url = url.replace(/dev/g, 'api/test');
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
    request.send(JSON.stringify(postData));
    return('finished')
  },
  postTextArea: function() {
    var postData = document.getElementById('postTextArea').value;
    console.log(JSON.parse(postData));
    var validJSON = true;
    try {
      JSON.parse(postData);
    } catch (e) {
      validJSON = false;
      return('JSON error: ' + e)
    }
    if (validJSON) {
      var url = String(window.location.href);
      var destination = document.getElementById('destinationSelect').value;
      if (destination === 'sensors'){
        url = url.replace(/dev/g, 'api/sensors');
      } else if (destination === 'users') {
        url = url.replace(/dev/g, 'api/users');
      } else if (destination === 'whitelist'){
        url = url.replace(/dev/g, 'api/whitelist');
      } else {
        return('destination not set')
      }
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
      return('finished')
    }
  },
  getSensors: function() { 
    var url = String(window.location.href);
    url = url.replace(/dev/g, 'api/sensors');
    url = url.replace(/3000/g, '5000');
    this.httpGet(url, function(sensors) {
      console.log(JSON.parse(sensors))
      sensors = sensors.replace(/},/g, '},\n');
      sensors = sensors.replace(/"/g, '');
      document.getElementById('sensorResultDiv').innerHTML = sensors;
    });
    return('ok')
  }, 
  httpGet: function(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  }
}

export default DevFunctions
