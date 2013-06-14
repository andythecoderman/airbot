/**
 * Created with JetBrains WebStorm.
 * User: andy
 * Date: 6/13/13
 * Time: 9:55 PM
 * To change this template use File | Settings | File Templates.
 */

var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client
    .after(5000, function() {
        this.clockwise(0.5);
    })
    .after(3000, function() {
        //this.animate('flipLeft', 15);
    })
    .after(1000, function() {
        this.stop();
        this.land();
    });