const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "three1g!",
  //   create database??
  database: "tracker_db",
});

// Connect to the DB

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  start();
});

// command-line application that allows the user to:
const start = () => {
  inquirer
    .prompt({
      name: "mainmenu",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Departments",
        "Add Departments",
        "Update Employee Roles",
        "Add Employee",
      ],
    })
    .then((answer) => {
      if (answer.mainmenu === "View Departments") {
        viewDepartments();
      } else if (answer.mainmenu === "Add Departments") {
        addDepartments();
      } else if (answer.mainmenu === "Update Employee Roles") {
        addRoles();
      } else if (answer.mainmenu === "Add Employee") {
        addEmployee();
      } else {
        connection.end();
      }
    });
};

// View Employees
const viewEmployees = () => {};

// * View Departments
const viewDepartments = () => {
  inquirer.prompt({});
};

// View Roles
const viewRoles = () => {};

//   * Add departments,
const addDepartments = () => {
  inquirer
    .prompt([
      {
        name: "depName",
        message: "What is the name of the Department you would like to add?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.depName,
        },
        (err) => {
          if (err) throw err;
          start();
        }
      );
    });
};

// * Add employee roles
const addRoles = () => {
  inquirer
    .prompt([
      {
        name: "title",
        message: "What is the role of the employee?",
      },
      {
        name: "salary",
        message: "How much is their salary?",
      },
      {
        name: "depId",
        message: "What is their department ID number?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.depId,
        },
        (err) => {
          if (err) throw err;
          start();
        }
      );
    });
};

// * Add employee
const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "firstName",
        message: "What is employee's first name?",
      },
      {
        name: "lastName",
        message: "What is employee's last name?",
      },
      // { FIND A AWAY TO ADD DEPT ID(ROLE ID)
      //   name: "roleID",
      //   message: "What is their department ID number?",
      // },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          // insert dept id??
          // department_id: answer.depId,
        },
        (err) => {
          if (err) throw err;
          start();
        }
      );
    });
};
