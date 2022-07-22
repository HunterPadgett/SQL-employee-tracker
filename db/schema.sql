DROP DATABASE IF EXISTS emtracker_db;

CREATE DATABASE emtracker_db;

USE emtracker_db;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  job_name VARCHAR(30) NOT NULL
);

CREATE TABLE jobrole (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
  );

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES jobrole(id) ON DELETE CASCADE
  );