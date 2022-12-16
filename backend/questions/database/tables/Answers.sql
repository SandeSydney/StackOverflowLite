CREATE TABLE Answers(
    answer_id VARCHAR(150) NOT NULL,
    question_id VARCHAR(150) NOT NULL,
    user_id VARCHAR(150) NOT NULL,
    answer_date DATE NOT NULL,
    answer TEXT NOT NULL, 
    upvotes VARCHAR(20) DEFAULT 0,
    downvotes VARCHAR(20) DEFAULT 0,
    IsValid BIT NOT NULL DEFAULT 0, 
    IsDeleted BIT NOT NULL DEFAULT 0,
    PRIMARY KEY (answer_id),
    FOREIGN KEY (question_id) REFERENCES [dbo].[Questions],
    FOREIGN KEY (user_id) REFERENCES [dbo].[Users]
)