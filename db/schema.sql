DROP DATABASE IF EXISTS emTracker_db;
CREATE DATABASE emTracker_db;
USE DATABASE emTracker_db;
SELECT DATABASE(emTracker_db);

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  jobName VARCHAR(30) NOT NULL
);

CREATE TABLE jobRole (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
  );

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES jobRole(id)
  ON DELETE SET NULL
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
  );