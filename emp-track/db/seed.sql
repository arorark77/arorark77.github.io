USE emptrack;

INSERT into department (name) VALUES ("Sales");
INSERT into department (name) VALUES ("IT");
INSERT into department (name) VALUES ("Marketing");
INSERT into department (name) VALUES ("HR");

INSERT into role (title, salary, department_id) VALUES ("Sales Manager", 100000, 1);
INSERT into role (title, salary, department_id) VALUES ("Sales Person", 50000, 1);
INSERT into role (title, salary, department_id) VALUES ("IT Manager", 100000, 2);
INSERT into role (title, salary, department_id) VALUES ("Engineer", 900000, 2);
INSERT into role (title, salary, department_id) VALUES ("Marketing Manager", 100000, 3);
INSERT into role (title, salary, department_id) VALUES ("Marketing Engineer", 30000, 3);
INSERT into role (title, salary, department_id) VALUES ("Marketing Rep1", 30000, 3);
INSERT into role (title, salary, department_id) VALUES ("Marketing Rep2", 30000, 3);
INSERT into role (title, salary, department_id) VALUES ("HR Manager", 80000, 4);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Rakesh", "Arora", 1, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jeff", "Bezos", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Sundar", "Pichai", 2, 1);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Warren", "Buffett", 3, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Satya", "Nadela", 4, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Indira", "Nooyi", 4, 3);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Mark", "Zuckerberg", 4, 3);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Larry", "Ellison", 5, null);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Elon", "Musk", 6, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Tim", "Cook", 7, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Jack", "Dorsey", 7, 5);
INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Bob", "Chepak", 8, 5);

INSERT into employee (first_name, last_name, role_id, manager_id) VALUES ("Bob", "Iger", 9, null);
