
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

// let a = 'frog wrangler';


db.query('SELECT * FROM employee', (err, result) => {
  
  console.log(result)
})

db.query('SELECT * FROM employee', (err, result) => {
  const currentMan = result.map(({first_name, last_name, id}) => ({name: `${first_name} ${last_name}`, value: id}));
  console.table(currentMan)
})




// console.log(currentRoles)

// db.query('SELECT * FROM jobrole', function (err, results) {
//   console.log(currentRoles);
// });

// manager as own name
// SELECT employee.id, employee.first_name AS "First Name", employee.last_name AS "Last Name", jobrole.title, department.job_name AS "Department", jobrole.salary AS "Salary", CONCAT(first_name," ",last_name) AS "Manager" 
// FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id 
// INNER JOIN department ON jobrole.department_id = department.id 
// ORDER BY employee.id ASC


// SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name", jobrole.title, department.job_name AS "department", jobrole.salary, employee.manager_id AS "manager" 
// FROM employee INNER JOIN jobrole ON employee.role_id = jobrole.id 
// INNER JOIN department ON jobrole.department_id = department.id 
// ORDER BY employee.id ASC