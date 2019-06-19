/**
 * Any checkup before launch:
 * 1. Check if the price value data exists in the DB, if not, create it
 */

var Promise = require("bluebird");

var beforeLaunchCheck = function (db) {
    return new Promise (function (resolve, reject) {
        db.collection('LocalPrice').find().toArray()
            .then(function (array) {
                if (array.length === 0) {
                    db.collection('LocalPrice').insertOne({price: 3.5})
                        .then(function () {
                            resolve();
                        })
                        .catch(function (e) {
                            reject(e);
                        });
                } else {
                    resolve();
                }
            })
            .catch(function (e) {
                reject(e);
            })
    });
};

module.exports = {
    beforeLaunchCheck: beforeLaunchCheck
};