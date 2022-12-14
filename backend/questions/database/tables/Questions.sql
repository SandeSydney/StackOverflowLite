CREATE TABLE Questions
(
    question_id VARCHAR(150) NOT NULL,
    user_id VARCHAR(150) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    question_date DATE NOT NULL,
    question TEXT NOT NULL,
    IsDeleted BIT NOT NULL DEFAULT 0
        PRIMARY KEY (question_id)
        FOREIGN KEY (user_id) REFERENCES [dbo].[Users]
)