# Node Copter quick setup

### A handy helper for getting into some programmatically controlled flying robots

## Instructions:

* Make sure you have node and npm installed
  * npm (Node Package Manager) comes with node these days, see *link to node* for installation instructions relevant to your operating system.
* clone this repo from github: *insert instructions here*
* `npm install`
* Connect to an AR-Drone's wifi near you
* `node basic.js` will make the drone takeoff, turn around a bit, and land.
* `node repl.js` will give you a interactive commandline interface to control the drone with.

See *link to ar-drone* for documentation on the commands that are available.


**NOTE:** The ar-drone library has built in animation routines for flips. PLEASE USE THIS WISELY. The drones need a reasonable amount of space around them to perform a flip.