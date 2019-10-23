var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "theworldmayneverknow",
  database: "bamazon"
});

connection.connect();

function startShopping() {
  connection.query('SELECT * FROM products', function (error, results) {
    if (error) throw error;
  
    console.log(" ");
    console.log("Items for sale:");
    
    for (let i = 0; i < results.length; i++) {
      console.log(" ");
      console.log("ID: " + results[i].item_id.toString());
      console.log("NAME: " + results[i].product_name.toString());
      console.log("PRICE: " + results[i].price.toString());
      console.log(" ");
    }
    
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Enter the ID of the item you'd like to buy:"
        }
      ])
      .then(function(answer) {
        // connection.query(UPDATE products SET ? WHERE ?,)


      })
  });

};

startShopping();