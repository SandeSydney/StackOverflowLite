CREATE OR ALTER PROCEDURE usp_DeleteQuestion(@question_id VARCHAR(150))
AS
BEGIN
    DELETE FROM [dbo].[Questions] WHERE question_id = @question_id
    PRINT 'Question deleted!'
END