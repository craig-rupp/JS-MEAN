var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(request, response){
	console.log("GET the hotels");
	console.log(request.query);

	//default pagination
	var offset = 0;
	var count = 5;
	//see if request object has a query string and offset 
	if(request.query && request.query.offset){
		offset = parseInt(request.query.offset, 10);
	}
	//same as above however just checking count
	if(request.query && request.query.count){
		count = parseInt(request.query.count, 10);
	}
	//slice data array from json doc and set offset and count in new returnData array
	var returnData = hotelData.slice(offset, offset + count);
	response
		.status(200)
		.json(returnData);
};

module.exports.hotelsGetOne  = function(request, response){
	var hotelId = request.params.hotelId;
	var thisHotel = hotelData[hotelId];
	console.log("GET hotelId", hotelId);
	response
		.status(200)
		.json(thisHotel);
};

module.exports.hotelsAddOne = function(request, response){
	console.log("POST new hotel");
	//body parser middleware outputs the data from the post it form
	console.log(request.body);
	response	
		.status(200)
		.json(request.body); 
};