DROP DATABASE IF EXISTS emtracker_db;

CREATE DATABASE emtracker_db;

USE emtracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  job_name VARCHAR(30) NOT NULL
);

CREATE TABLE jobrole (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
  );

CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES jobrole(id) ON DELETE SET NULL,
  FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
  );