INSERT INTO department (job_name)
VALUES  ('Engineering'),
        ('Finance'),
        ('Legal'),
        ('Sales');

INSERT INTO jobrole (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 4),
        ('Salesperson', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Account Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Hunter', 'Padgett', 3, null),
        ('William', 'Summerlin', 7, null),
        ('Jules', 'Franklin', 1, null),
        ('Vince', 'Yang', 5, null),
        ('Teagrin', 'Forde', 8, 2),
        ('Paulo', 'Pinedo', 4, 1),
        ('Ashley', 'Thompson', 6, 4),
        ('Charli', 'Dunlap', 2, 2);
