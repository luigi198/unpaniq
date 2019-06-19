// ------------------------------
//  Imports
// ------------------------------
var sensorDataModel = require('../models/sensorData/sensorData.model');
var responses = require('./utils/apiResponses.utils');
var Promise = require("bluebird");

// ------------------------------
//  Private
// ------------------------------


// ------------------------------
//  Public
// ------------------------------

module.exports = {
    createSensorData: function (req, res) {

        var sensorData = req.body;
        sensorData.createdAt = Date.now();
        sensorDataModel.init(req.body)
            .then(function (data) {
                sensorData = data;
                return sensorDataModel.insertSensorDataModel(req.db, sensorData);
            })
            .then(function () {
                responses.successResponse(res, {status: 'ok'});
            })
            .catch(function (e) {
                console.error(e);
                responses.catchResponse(res, e);
            });
    }
};
