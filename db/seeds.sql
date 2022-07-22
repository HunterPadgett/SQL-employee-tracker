INSERT INTO department (job_name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales'),
        ('Service');

INSERT INTO jobrole (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 4),
        ('Salesperson', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Account Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3),
        ('Customer Service', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Hunter', 'Padgett', 1, null),
        ('William', 'Summerlin', 1, 1),
        ('Jules', 'Franklin', 2, null),
        ('Teagrin', 'Forde', 3, 1),
        ('Paulo', 'Pinedo', 4, 1),
        ('Charli', 'Dunlap', 3, 4);
