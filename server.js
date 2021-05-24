const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

// connection object with my configuration

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "three1g!",
  //   create database??
  database: "",
});

// command-line application that allows the user to:
const start = () => {
  inquirer
    .prompt({
      name: "mainmenu",
      type: "list",
      message: "What would you like to do?",
      choices: ["View Departments", "Add Departments", "Update Employee Roles"],
    })
    .then((answer) => {
      if (answer.mainmenu === "View Employees") {
        viewEmployees();
      } else if (answer.mainmenu === "View Employees By Departments") {
        viewDepartments();
      } else if (answer.mainmenu === "View Employees by Role") {
        viewRoles();
      } else if (answer.mainmenu === "Add Departments") {
        addDepartments();
      } else if (answer.mainmenu === "Update Employee Roles") {
        updateRoles();
      } else {
        connection.end();
      }
    });
};

// View Employees
const viewEmployees = () => {};

// * View Departments
const viewDepartments = () => {
  inquirer.prompt({
    name: "viewDepartment",
    type: "list",
    message: "View Employee By Department",
  });
};

// View Roles
const viewRoles = () => {};

//   * Add departments, roles, employees
const addDepartments = () => {};

// * Update employee roles
const updateRoles = () => {};

// Connect to the DB

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  start();
});
