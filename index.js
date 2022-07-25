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

// chalk & figma opening message / calls the prompt question
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

// initial prompts that leads into a switch case to determine what to do next based off of choice selected 
function prompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'Here are your choices:',
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
    },
  ]).then(answers => { 
    switch (answers.choices) {
      // query shows all depts
      case "View All Departments":
        db.query('SELECT department.id, department.job_name AS "department" FROM department', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
      // query shows all roles 
      case "View All Roles":
        db.query('SELECT jobrole.id, jobrole.title, department.job_name AS "department", jobrole.salary FROM jobrole JOIN department ON jobrole.department_id = department.id ORDER BY jobrole.id ASC', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
      // query shows all employees 
      case "View All Employees":
        db.query('SELECT employee.id, employee.first_name AS "First Name", employee.last_name AS "Last Name", jobrole.title AS "Title", department.job_name AS "Department", jobrole.salary AS "Salary", CONCAT (manager.first_name," ",manager.last_name) AS "Manager" FROM employee LEFT JOIN jobrole ON employee.role_id = jobrole.id LEFT JOIN department ON jobrole.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY employee.id ASC', function (err, results) {
          console.table(results);
          prompt();
        }); 
        break;
        // query adds a dept
      case "Add a Department":
        inquirer.prompt([
          {
            type: 'input',
            name: 'addDept',
            message: 'What is the name of the department?',
            validate: (answer) => {
              if(answer === '') {
                  return `Please enter a name for the department`
              }
              return true;
            }
          }
        ]).then(depAnswer => {
          let newDept = depAnswer.addDept;
      
          db.query('INSERT INTO department(job_name) VALUES (?)', newDept, (err, result) => {
            console.log(`${depAnswer.addDept} succesfully added to the dapartment list`);
            console.table('SELECT * FROM department');
            prompt();
          });        
        })
        break;

      case "Add a Role":
        addRole();
        break;

      case "Add an Employee":
        addEmployee();
        break;

    };
  });
}

// add new role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: 'What is the name of the role?',
      validate: (answer) => {
        if(answer === '') {
            return `Please enter a name for the department`
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'roleSal',
      message: 'What is the salary of the role?',
      validate: (answer) => {
        if(isNaN(answer)) {
          return `Please enter a valid number:`
        }
        return true;
      }
    }
  ]).then(roleAnswer => {
    let newRole = roleAnswer.roleName;
    let roleSal = roleAnswer.roleSal;
    const roleAr = [newRole, roleSal];

        db.query('SELECT * FROM department', (err, result) => {
          if (err) {
            throw err;
          }
        
    const currentDeps = result.map(({job_name, id}) => ({name: job_name, value: id}));

  inquirer.prompt([
    {
      type: 'list',
      name: 'roleLoc',
      message: 'What department does the role belong in?',
      choices: currentDeps
    }        
  ]).then(roleLocAnswer => {
    let roleLocation = roleLocAnswer.roleLoc;
    roleAr.push(roleLocation);

      db.query('INSERT INTO jobrole (title, salary, department_id) VALUES (?, ?, ?)', roleAr, (err, result) => {
        console.log(`${roleAnswer.roleName} succesfully added as a new role`);
        prompt();
        });        
      });
    });
  });
}

// add new employee / couldn't get the mananger section to show
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'fName',
      message: 'What is their first name?',
      validate: (answer) => {
        if(answer === '') {
            return `Please enter a name`
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'lName',
      message: 'What is their last name?',
      validate: (answer) => {
        if(answer === '') {
            return `Please enter a name`
        }
        return true;
      }
    }
  ]).then(nameAnswer => {
    let firstName = nameAnswer.fName;
    let lastName = nameAnswer.lName;
    const empArr = [firstName, lastName];

        db.query('SELECT * FROM jobrole', (err, result) => {
          if (err) {
            throw err;
          }
        
    const currentRoles = result.map(({title, id}) => ({name: title, value: id}));

  inquirer.prompt([
    {
      type: 'list',
      name: 'empRole',
      message: 'What is their role?',
      choices: currentRoles
    }        
  ]).then(roleAnswer => {
    let newRole = roleAnswer.empRole;
    empArr.push(newRole);
    console.table(empArr);

        db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', empArr, (err, result) => {
          if (err) {
            throw err;
          }

          console.log(`${nameAnswer.fName} ${nameAnswer.lName} succesfully added as new employee`);
          prompt();
        }); 
      })
    })
  })
}

init();