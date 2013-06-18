/**
 * Created with JetBrains WebStorm.
 * User: andy
 * Date: 6/18/13
 * Time: 12:52 AM
 */

var arDrone = require('ar-drone');
var fs = require('fs');

var counter = 0;
var client = arDrone.createClient();
client.getPngStream().on('data', function(data){
    var fileName = 'camFootage_' + counter++ + '.png';
    fs.writeFile(fileName, data, function(err){
        if (err) console.log(err);
        console.log(fileName + ' Saved');
    });
});