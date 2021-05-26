const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const { connect } = require("http2");

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

const time = 2000;

// Build a command-line application that at a minimum allows the user to:

// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles

// command-line application that allows the user to:
const start = () => {
  inquirer
    .prompt({
      name: "mainmenu",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Departments",
        "View Roles",
        "View Employees",
        "Add Departments",
        "Add Roles",
        "Add Employee",
        "Update Roles",
      ],
    })
    .then((answer) => {
      if (answer.mainmenu === "View Departments") {
        viewDepartments();
      } else if (answer.mainmenu === "Add Departments") {
        addDepartments();
      } else if (answer.mainmenu === "Add Roles") {
        addRoles();
      } else if (answer.mainmenu === "Add Employee") {
        addEmployee();
      } else if (answer.mainmenu === "Update Roles") {
        updateRoles();
      } else if (answer.mainmenu === "View Roles") {
        viewRoles();
      } else if (answer.mainmenu === "View Employees") {
        viewEmployees();
      } else {
        connection.end();
      }
    });
};

// * View Departments

const viewDepartments = () => {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    setTimeout(start, time);
    // start();
  });
};

// View Roles
const viewRoles = () => {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    setTimeout(start, time);
    // start();
  });
};

// View Employees
const viewEmployees = () => {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    setTimeout(start, time);
    // start();
  });
};

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
      {
        name: "roleId",
        message: "What is your Role ID number?",
      },
      {
        name: "managerId",
        message: "What is your namager ID number?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        (err) => {
          if (err) throw err;
          start();
        }
      );
    });
};

// UPDATE Employee Roles

const updateRoles = () => {
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
      {
        name: "roleId",
        message: "What is your Role ID number?",
      },
      {
        name: "managerId",
        message: "What is your namager ID number?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        (err) => {
          if (err) throw err;
          start();
        }
      );
    });
};
