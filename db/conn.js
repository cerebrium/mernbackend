const { MongoClient } = require('mongodb');
const Db = process.env.MONGO_STRING
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // verify there is a db object
            if (db) {
                _db = db.db('sample_airbnb');
                console.log("successfully got the backend flowing");
            }
            return callback(err);
        })
    },

    // get the database
    getDb: function () {
        return _db
    }
}