// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
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
// const mysql = require('mysql2/promise');
async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', password: 'root1234', database: 'emtracker_db'});
  // query database
  await connection.execute('SELECT * FROM department', function (err, results) {
    console.log(results);
    }
)};


// Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: 'root1234',
//     database: 'emtracker_db'
//   },
//   console.log(`Connected to the emtracker_db database.`)
// );

// Query database for showing SQL
// db.query('SELECT * FROM department.job_name', function (err, results) {
//   console.table(results);
// });

// let allDep = db.query('SELECT * FROM department.job_name', function (err, results) {
//   console.table(results);
// });

function init() {
  console.log(
    chalk.magentaBright('***********************************************************************************************************************************************'
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
        return main();
        
      
    };
    
  });
}



init();