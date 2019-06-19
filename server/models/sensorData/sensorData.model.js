//
//  Variables
//

var Promise = require("bluebird");
var ObjectId = require('mongodb').ObjectID;

// Constructor
function SensorDataModel () {
  this.temperature = '';
  this.heartRate = '';
  this.createdBy = '';
  this.createdAt = '';
  this.deletedBy = '';  
};

var init = function (sensorDataModel) {
  //Promise
  return new Promise(function (resolve, reject) {
    //New variable using the sensorDataModelModel.
    var initSensorDataModel = new SensorDataModel();
    //Save the new sensorDataModel with the passed values that are defined
    if (typeof sensorDataModel.temperature !== 'undefined') {
        initSensorDataModel.temperature = sensorDataModel.temperature;
    }
    if (typeof sensorDataModel.heartRate !== 'undefined') {
        initSensorDataModel.heartRate = sensorDataModel.heartRate;
    }
    if (typeof sensorDataModel.createdBy !== 'undefined') {
        initSensorDataModel.createdBy = sensorDataModel.createdBy;
    }
    if (typeof sensorDataModel.createdAt !== 'undefined') {
      initSensorDataModel.createdAt = sensorDataModel.createdAt;
    }
    if (typeof sensorDataModel.deletedBy !== 'undefined') {
        initSensorDataModel.deletedBy = sensorDataModel.deletedBy;
    }
    //Resolve the Promise
    return resolve(initSensorDataModel);
  });
};

var insertSensorDataModel = function (db, sensorDataModel) {
  return db.collection('SensorDataModel').insertOne(sensorDataModel);
};

module.exports = {
  init: init,
  insertSensorDataModel: insertSensorDataModel
};
