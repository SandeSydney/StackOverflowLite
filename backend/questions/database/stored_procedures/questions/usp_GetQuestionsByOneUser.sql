CREATE OR ALTER PROCEDURE usp_GetQuestionsByOneUser(@user_id VARCHAR(150))
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
    WHERE Questions.user_id = @user_id
    ORDER BY Questions.question_date
END