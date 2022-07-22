// const express = require('express');


// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const mysql = require('mysql2');
// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: 'root1234',
//     database: 'emtracker_db'
//   },
//   console.log(`Connected to the classlist_db database.`)
// );

// // Query database
// db.query('SELECT * FROM jobrole', function (err, results) {
//   console.table(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });