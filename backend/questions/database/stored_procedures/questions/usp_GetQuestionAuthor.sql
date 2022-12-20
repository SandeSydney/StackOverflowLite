CREATE OR ALTER PROCEDURE usp_GetQuestionAuthor(
    @question_id VARCHAR(150))
AS
BEGIN

    SELECT username
    FROM dbo.Users
    WHERE user_id = (SELECT user_id
    FROM dbo.Questions
    WHERE question_id = @question_id )
END