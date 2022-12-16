CREATE OR ALTER PROCEDURE usp_GetQuestionById(@question_id VARCHAR(150))
AS
BEGIN
    SELECT * FROM [dbo].[Questions] WHERE question_id = @question_id
END
