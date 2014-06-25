var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();
client.on('navdata', console.log);

client
  .after(4000, function() {
    this.up(0.7);
  })
  .after(1500, function() {
    this.stop();
    this.animate('thetaDance', 3000);
  })
  .after(4000, function() {
    this.land();
  });