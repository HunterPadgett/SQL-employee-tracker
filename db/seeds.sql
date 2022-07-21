INSERT INTO department (jobName)
VALUES  ('Engineering')
        ('Finance')
        ('Legal')
        ('Sales')
        ('Service');

INSERT INTO jobRole (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 1)
        ('Salesperson', 80000, 2)
        ('Lead Engineer', 150000, 3)
        ('Software Engineer', 120000, 4)
        ('Account Manager', 160000, 5)
        ('Accountant', 125000, 6)
        ('Legal Team Lead', 250000, 7)
        ('Lawyer', 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Hunter', 'Padgett', 01, 001)
        ('William', 'Summerlin', 02, 002)
        ('Jules', 'Franklin', 03, 003)
        ('Teagrin', 'Forde', 04, 004)
        ('Paulo', 'Pinedo', 07, 007)
        ('Charli', 'Dunlap', 08, 007)
