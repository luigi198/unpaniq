//
//  Variables
//

var Promise = require("bluebird");
var ObjectId = require('mongodb').ObjectID;

// Constructor
function SensorDataModel () {
  this.temperature = '';
  this.heartRate = 0;
  this.timestamp = 0;
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
    if (typeof sensorDataModel.timestamp !== 'undefined') {
      initSensorDataModel.timestamp = sensorDataModel.timestamp;
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

var getLatestSensorData = function (db) {
  return db.collection('SensorDataModel').find().sort({createdAt: -1}).limit(1).toArray();
};

module.exports = {
  init: init,
  insertSensorDataModel: insertSensorDataModel,
  getLatestSensorData: getLatestSensorData
};
