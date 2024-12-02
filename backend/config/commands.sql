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
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Technical and Professional Communication in Computer Science', 'CS277', 'required', 200, 4);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Languages and Automata', 'CS301', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Programming Language Design and Implementation', 'CS341', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Design', 'CS342', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Systems Programming', 'CS361', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Design', 'CS362', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Ethical Issues in Computing', 'CS377', 'required', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Framework-based Software Development for Hand-held Devices', 'CS378', 'technical', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Algorithms', 'CS401', 'required', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Economics and Computation', 'CS407', 'technical', 300, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Artificial Intelligence I', 'CS411', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to Machine Learning', 'CS412', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Vision I', 'CS415', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to Data Science', 'CS418', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Natural Language Processing', 'CS421', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('User Interface Design and Programming', 'CS422', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Natural User Interactions', 'CS423', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Visualization and Visual Analytics', 'CS424', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Graphics I', 'CS425', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Video Game Design and Development', 'CS426', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Creative Coding', 'CS427', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Virtual, Augmented and Mixed Reality', 'CS428', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Engineering I', 'CS440', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Engineering Distributed Objects for Cloud Computing', 'CS441', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Engineering II', 'CS442', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to Networking', 'CS450', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to Parallel and Distributed Processing', 'CS453', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Principles of Concurrent Programming', 'CS454', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to High Performance Computing', 'CS455', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Operating Systems Design and Implementation', 'CS461', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Systems Performance and Concurrent Programming', 'CS463', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Computer Architecture', 'CS466', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Network Security', 'CS468', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Provably Correct Programming', 'CS472', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Compiler Design', 'CS473', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Object-Oriented Languages and Environments', 'CS474', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Object-Oriented Programming', 'CS475', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Programming Language Design', 'CS476', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Public Policy, Legal, and Ethical Issues in Computing, Privacy, and Security', 'CS477', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Software Development for Mobile Platforms', 'CS478', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Wearables and Nearables Technology Laboratory', 'CS479', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Database Systems', 'CS480', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Big Data Mining', 'CS483', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Secure Web Application Development', 'CS484', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Networked Operating Systems Programming', 'CS485', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Building Secure Computer Systems', 'CS487', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Introduction to Cryptography', 'CS488', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Human Augmentics', 'CS489', 'technical', 400, 3);
INSERT INTO courses (title, code, type, level, credits_ug) VALUES ('Professional Development Seminar', 'CS499', 'required', 400, 3);

-- Courses Layout
-- CS111 - 1       CS277 - 6       CS378 - 11       CS415 - 16       CS424 - 21       ... so on and so forth
-- CS141 - 2       CS301 - 7       CS401 - 12       CS418 - 17       CS425 - 22       
-- CS151 - 3       CS341 - 8       CS407 - 13       CS421 - 18       CS426 - 23       
-- CS251 - 4       CS342 - 9       CS411 - 14       CS422 - 19       CS427 - 24       
-- CS261 - 5       CS377 - 10      CS412 - 15       CS423 - 20       CS428 - 25       

INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (1, 'Standard intro class.', 4, 4, 5, 1, 2, 8, 'Fall', 2020, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (3, 'Theory is a tough pill to swallow.', 4, 4, 5, 1, 2, 8, 'Spring', 2023, 'C');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'The fastest learning you will do in your first year.', 4, 4, 5, 1, 2, 8, 'Fall', 2022, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (3, 'Loveeed it.', 3, 3.5, 4, 1.5, 2, 8, 'Fall', 2023, 'A');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'Could be more project based ngl', 3, 3, 2, 2, 3, 8, 'Spring', 2024, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (5, 'I hate Zybooooks', 4.5, 4.5, 5, 3, 2, 8, 'Spring', 2023, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (11, 'Interesting concept with apps. A lot of do it yourself and learn how to code it on your own.', 4, 4, 5, 2, 0, 8, 'Fall', 2024, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (23, 'Love this class. Very fun but it does require a good amount of outside learning.', 5, 4, 5, 5, 0, 10, 'Spring', 2024, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (21, 'Easy going course. If you love to design youll enjoy this class. No backend at all.', 4, 1, 5, 3, 0, 8, 'Fall', 2023, 'B');
INSERT INTO reviews (course_id, comment, rating, difficulty, technical, creative, theory, hours, semester, year, grade_earned) VALUES (8, '3 languages in one semester. Its not hard to grasp if you listen in lecture and go to the TAs right away with questions.', 3, 3, 5, 1, 0, 8, 'Fall', 2024, 'B');

-- INSERT INTO reviews () VALUES ()

-- If you want to reset
DROP TABLE reviews;
DROP TABLE courses;