
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
db.query('SELECT employee.id, employee.first_name AS "First Name", employee.last_name AS "Last Name", jobrole.title, department.job_name AS "Department", jobrole.salary AS "Salary", CONCAT(first_name," ",last_name) AS "Manager" FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id INNER JOIN department ON jobrole.department_id = department.id ORDER BY employee.id ASC', function (err, results) {
  console.table(results);
});

// `SELECT employee.id, employee.first_name AS "First Name", employee.last_name AS "Last Name", jobrole.title, department.job_name AS "Department", jobrole.salary AS "Salary", CONCAT(manager_id.first_name," ",manager_id.last_name) AS "Manager" FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id INNER JOIN department ON jobrole.department_id = department.id ORDER BY employee.id ASC`