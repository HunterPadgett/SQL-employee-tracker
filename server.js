
const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'emtracker_db'
  },
  console.log(`Connected to the emtracker_db database.`)
);

// Query database
db.query('SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", jobrole.title, department.job_name AS "department", jobrole.salary, employee.manager_id AS "manager" FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id INNER JOIN department ON jobrole.department_id = department.id ORDER BY employee.id ASC', function (err, results) {
  console.table(results);
});

// SELECT jobrole.id, jobrole.title, department.job_name AS "department", jobrole.salary 
// FROM jobrole JOIN department ON jobrole.department_id = department.id 
// ORDER BY jobrole.id ASC

// SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", jobrole.title, department.job_name AS "department", jobrole.salary, employee.manager_id AS "manager" 
// FROM employee INNER JOIN employee ON employee.manager_id = employee.id
// INNER JOIN jobrole ON employee.role_id = jobrole.id 
// INNER JOIN department ON jobrole.department_id = department.id 
// ORDER BY employee.id ASC