// Add get request to server instead of hardcoding

const SensorAPI = {
  sensors: [
    { name: "Sensor 1", location: "Orlando", group: "Test Group 1", id: "B8:27:EB:DA:8F:F5", long: "-81.4076", lat: "28.2920", status: "ok" },
    { name: "Sensor 2", location: "Melbourne", group: "Test Group 2", id: "B8:27:EB:CE:93:69", long: "-80.6081", lat: "28.0836", status: "danger" },
    { name: "Sensor 3", location: "Orlando", group: "Test Group 1", id: "B8:27:EB:97:19:1E", long: "-81.4125", lat: "28.2834", status: "ok" }
  ],
  all: function() { return this.sensors},
  get: function(id) {
    const isSensor = s => s.id === id
    return this.sensors.find(isSensor)
  }
}

export default SensorAPI
