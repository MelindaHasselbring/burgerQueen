// // Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;




// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.envJAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
	connection = mysql.createConnection({
		host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  		user: "ojeghqbqsgrhhf3p",
  		password: "zvw92fg25n3k56qq",
  		database: "huoqmuf6na9hfre2"
	});
}


connection.connect();
module.exports = connection;
