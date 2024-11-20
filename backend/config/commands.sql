CREATE DATABASE IF NOT EXISTS cs480db;
USE cs480db;
-- create table and insert values into courses
CREATE TABLE courses (
    course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    code VARCHAR(10) NOT NULL,
    type VARCHAR(20),
    level INT NOT NULL,
    credits_ug INT DEFAULT 0,
    credits_g INT DEFAULT 0,
    website VARCHAR(100),
    rating INT DEFAULT 0,
    difficulty INT DEFAULT 0,
    hours INT DEFAULT 0
);

INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Program Design I', 'CS111', 'required', 100, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Program Design II', 'CS141', 'required', 100, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Mathematical Foundations of Computing', 'CS151', 'required', 100, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Programming Practicum', 'CS211', 'required', 200, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Data Structures', 'CS251', 'required', 200, 4);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Machine Organization', 'CS261', 'required', 200, 4);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Languages and Automata', 'CS301', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Design', 'CS342', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Systems Programming', 'CS361', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Algorithms', 'CS401', 'required', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Engineering I', 'CS440', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Artificial Intelligence I', 'CS411', 'required', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Algorithms', 'CS401', 'required', 400, 3);

