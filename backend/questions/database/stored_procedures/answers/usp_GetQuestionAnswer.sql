CREATE OR ALTER PROCEDURE usp_GetQuestionAnswer(@question_id VARCHAR(150))
AS
BEGIN
    SELECT * FROM [dbo].[Answers] WHERE question_id = @question_id
END