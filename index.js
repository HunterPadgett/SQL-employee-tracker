
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root1234',
    database: 'emtracker_db'
  },
  console.log(`Connected to the emtracker_db database.`)
);


init();


function init() {
  console.log(
    chalk.magentaBright('************************************************************************************************************************************************'
  ));
  console.log(
    chalk.magentaBright(
      figlet.textSync('Employee-Tracker-App', { horizontalLayout: 'full', font: 'crawford'})
    )
  );
  console.log(
    chalk.magentaBright(`                                                                                                                  -created by Hunter Padgett 🥷
************************************************************************************************************************************************`
  ));
  prompt();
}

function prompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'Here are your choices:',
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add an Employee", "Update an Employee Role"]
    },
  ]).then(answers => { 
    switch (answers.choices) {
      case "View All Departments":
        db.query('SELECT department.id, department.job_name AS "department" FROM department', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
      case "View All Roles":
        db.query('SELECT jobrole.id, jobrole.title, department.job_name AS "department", jobrole.salary FROM jobrole JOIN department ON jobrole.department_id = department.id ORDER BY jobrole.id ASC', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
      case "View All Employees":
        db.query('SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", jobrole.title, department.job_name AS "department", jobrole.salary, employee.manager_id AS "manager" FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id INNER JOIN department ON jobrole.department_id = department.id ORDER BY employee.id ASC', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
     
    };
  });
}