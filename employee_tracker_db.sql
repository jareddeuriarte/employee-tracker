-- Adding DB

DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;


-- Creating Tables

USE employee_tracker_db;

CREATE TABLE department(
	id INT PRIMARY KEY,
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


-- Selecting 
SELECT employee.id as 'ID', employee.first_name AS 'First Name' , employee.last_name as 'Last Name', 
employee.manager_id as 'Manager ID', department.id as 'Dept Id' , department.name as 'Department Name',
role.id as 'RoleID' , role.title, role.salary
FROM employee  JOIN role ON role.id = employee.role_id
JOIN department on department.id=role.department_id;

