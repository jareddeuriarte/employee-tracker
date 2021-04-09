-- Adding DB

DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;


-- Creating Tables

USE employee_tracker_db;

CREATE TABLE department(
	id INT,
	name VARCHAR (30)
);

CREATE TABLE role(
	id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    -- FOREIGN KEY(department_id) REFERENCES department (id) ON DELETE CASCADE
);


CREATE TABLE employee(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
-- FOREIGN KEY(role_id) REFERENCES role (id),
-- FOREIGN KEY(manager_id) REFERENCES employee (id)
);


-- Selecting (not working correctly, and not sure why)
SELECT employee.id as 'Emp ID', employee.first_name AS 'First Name' , employee.last_name as 'Last Name', department.name as 'Department', 
role.salary, employee.manager_id as 'Manager ID' FROM employee 
LEFT JOIN role ON employee.role_id = role.id 
LEFT JOIN department on role.department_id = department.id;



