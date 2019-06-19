// controllers
var api = require('../api/api.controller');

// -----------------------
// Expose
// -----------------------

module.exports = function(app, db) {
  // --------------------
  // API
  // --------------------
  //Middleware
  app.use(function (req, res, next) {
    req.db = db;
    next()
  });

  // API Routes
  app.post('/api/sensor-data', api.createSensorData);

}
