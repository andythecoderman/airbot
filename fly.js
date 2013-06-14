/**
 * Created with JetBrains WebStorm.
 * User: andy
 * Date: 6/13/13
 * Time: 9:55 PM
 * To change this template use File | Settings | File Templates.
 */

var arDrone = require('ar-drone');
var client = arDrone.createClient();

//client.calibrate(0);
client.takeoff();

client
    .after(5000, function() {
        this.up(0.5);
    })
    .after(2000, function() {
        this.stop();
        this.clockwise(0.5);
    })
    .after(5000, function() {
        this.counterClockwise(0.5);
        //this.animate('flipLeft', 15);
    })
    .after(5000, function(){
        this.animateLeds('snakeGreenRed', 5, 5);
        this.animate('yawDance', 5);
    })
    .after(5000, function() {
        this.stop();
        this.land();
    });