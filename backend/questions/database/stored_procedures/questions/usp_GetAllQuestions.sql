CREATE OR ALTER PROCEDURE usp_GetAllQuestions
AS
BEGIN
    SELECT
        Questions.question_id,
        Questions.user_id,
        Users.username,
        Questions.subject,
        Questions.question,
        Questions.question_date
    FROM Questions
        INNER JOIN Users on Questions.user_id = Users.user_id
        ORDER BY Questions.question_date DESC
END
