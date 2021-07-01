const express = require('express');

// define this as a route
const recordRoutes = express.Router()

// get route for all records
recordRoutes.route('/listings').get(function (req, res) {

    // connect to database
    let db_connect = dbo.getDb('listingsAndReviews');

    // db_connect

    //     // connect to collection
    //     .collection('listingsAndReviews')

    //     // find all
    //     .find().limit(50)

    //     // convert data to array
    //     .toArray(function (err, results) {
    //         if (err) throw err;
    //         res.json(results)
    //     })
})

// // update customer by id
// recordRoutes.route('/listings/:id').post(function (req, res) {
//     let db_connect = dbo.getDb('listingsAndReviews');

//     // search for the id submitted in body
//     let myquery = { id: req.body.id};

//     let newValues = {
//         $set: {
//             username: req.body.username,
//             email: req.body.email
//         },
//     };
//     db_connect  
//         .collection('listings')
//         .updateOne(myquery, newValues, function (err, res) {
//             if (err) throw err;
//             console.log("1 document updated")
//         });
// });

// // delete a customer
// recordRoutes.route('/customer/:id').delete((req, res) => {
//     // establish connection to database
//     let db_connect = dbo.getDb('listingsAndReviews');

//     // define query
//     let myQuery = { id: req.body.id};

//     db_connect
//         .collection('listingsAndReviews')
//         .deleteOne(myQuery, function (err, obj) {
//             if (err) throw err;
//             console.log('customer deleted')
//         });
// });

module.exports = recordRoutes
