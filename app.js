var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	

	console.log("Travel application is running!");

	var myName = "Kelsey Guerin";
	app.get("/", function (req, resp) {
		db.findArray({}, function(results) {
      resp.render("index", { locations: results});
    })
	});
  
  app.get("/rating/:rating", function (req, resp) {
    var rating = parseInt(req.params.rating)
    db.findArray({ rating: rating }, function(results) {
      resp.render("index", { locations: results});
    })
	});
  
  app.get("/hello/:name", function (req, resp){
    resp.render("hello", { name: req.params.name });
  })
  
  app.get("/icecream/:flavor/:topping", function (req, resp){
    resp.render("icecream", { flavor: req.params.flavor, topping: req.params.topping });
  })
  
  
})