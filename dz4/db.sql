-- create
CREATE TABLE STUDENTS (
  empId INTEGER PRIMARY KEY,
  name  TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
  
);

-- insert
INSERT INTO STUDENTS VALUES (0001, 'Clark', 25,'Moscow');
INSERT INTO STUDENTS VALUES (0002, 'Dave', 35,'Moscow');
INSERT INTO STUDENTS VALUES (0003, 'Ava', 40,'Korolev');


SELECT * FROM STUDENTS