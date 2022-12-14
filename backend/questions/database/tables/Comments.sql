CREATE TABLE Comments(
    comment_id VARCHAR(150) NOT NULL,
    comment TEXT NOT NULL, 
    comment_date DATE NOT NULL,
    answer_id VARCHAR(150) NOT NULL,
    question_id VARCHAR(150) NOT NULL,
    user_id VARCHAR(150) NOT NULL,
    IsDeleted BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (answer_id) REFERENCES [dbo].[Answers],
    FOREIGN KEY (question_id) REFERENCES [dbo].[Questions],
    FOREIGN KEY (user_id) REFERENCES [dbo].[Users]
)
