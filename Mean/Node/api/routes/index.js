var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
.route('/hotels')
.get(ctrlHotels.hotelsGetAll);
// .post(function(request, response){
// 	console.log("POST the JSON");
// 	response
// 		.status(200)
// 		.json( {"jsonData" : "POST received"} );
// });

module.exports = router;