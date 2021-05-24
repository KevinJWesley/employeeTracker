DROP DATABASE IF EXISTS --database;

CREATE DATABASE --database;

USE --database;

CREATE TABLE department (
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(30) 
  
);

CREATE TABLE role (
id INT PRIMARY KEY NOT NULL,
title VARCHAR(30),
salary DECIMAL(10,4),
department_id INT NOT NULL

);

CREATE TABLE employee (
    id INT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT
);

INSERT INTO department (name)
VALUES ();

INSERT INTO role (title, salary, department_id)
VALUES ();

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VLAUES();
