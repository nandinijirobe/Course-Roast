CREATE DATABASE IF NOT EXISTS cs480db;
USE cs480db;
-- create table and insert values into courses
CREATE TABLE courses (
    course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL,
    type VARCHAR(20),
    level INT NOT NULL,
    credits_ug INT DEFAULT 0,
    credits_g INT DEFAULT 0,
    website VARCHAR(100),
    rating FLOAT DEFAULT 0,
    difficulty FLOAT DEFAULT 0,
    hours FLOAT DEFAULT 0
);


CREATE TABLE reviews (
    review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    comment VARCHAR(400),
    rating FLOAT NOT NULL,
    difficulty FLOAT NOT NULL,
    technical FLOAT DEFAULT 0,
    creative FLOAT DEFAULT 0,
    theory FLOAT DEFAULT 0,
    hours INT DEFAULT 0,
    semester VARCHAR(8),
    year INT,
    grade_earned VARCHAR(1),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
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
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Artificial Intelligence I', 'CS411', 'required', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Engineering I', 'CS440', 'technical', 400, 3);

INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (1, 'Standard intro class.', 4, 4, 5, 1, 2, 8, 'Fall', 2020, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (3, 'Theory is a tough pill to swallow.', 4, 4, 5, 1, 2, 8, 'Spring', 2023, 'C');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'The fastest learning you will do in your first year.', 4, 4, 5, 1, 2, 8, 'Fall', 2022, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (3, 'Loveeed it.', 3, 3.5, 4, 1.5, 2, 8, 'Fall', 2023, 'A');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'Could be more project based ngl', 3, 3, 2, 2, 3, 8, 'Spring', 2024, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'I hate Zybooooks', 4.5, 4.5, 5, 3, 2, 8, 'Spring', 2023, 'B');

INSERT INTO reviews () VALUES ()

-- If you want to reset
DROP TABLE courses;
DROP TABLE reviews;