// Dependencies -----------------------------------------------------
var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

// Router -----------------------------------------------------

// create routes that will connect the model and view

// route that gets/shows all the burgers
router.get("/", function(req,res){
	burger.selectAll(function(data){
		var burgerObject = {
			burgers: data
		};

		res.render("index", burgerObject);
	});
});

// route to post/add a burger
router.post("/", function(req,res){
	burger.insertOne([
		// columns
		"name"
		], [
		// values
		req.body.name
		], function() {
			res.redirect("/");
		});
});

// route to update a burger
router.put("/:id", function(req,res){
	// the condition = id where to update the burger
	var condition = "id = " + req.params.id;

	burger.updateOne({
		name: req.body.name
	}, condition, function(){
		res.redirect("/");
	});
});

// route to devour a burger
router.put("/:id", function(req,res){

	// update the burger status devoured to true
	connection.query("UPDATE burgers SET devoured = true WHERE id = ?", req.params.id, function(err, result){
		if(err) throw err;

		res.redirect("/");
	});

});

module.exports = router;