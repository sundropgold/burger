// Dependencies -----------------------------------------------------

// sets up MySQL connection
var mysql = require("mysql");

// MySQL Connection -----------------------------------------------------

var connection = mysql.createConnection({
	port:3306,
	host:"localhost",
	user:"root",
	password:"",
	database:"burgers_db"
});

// create connection 
connection.connect(function(err){
	if (err) {
		console.error("Error connecting: " + err.stack);
		return;
	}

	//console.log("Connected as ID: " + connection.threadId);
});

// export connection for ORM use
module.exports = connection;