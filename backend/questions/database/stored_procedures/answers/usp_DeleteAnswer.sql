CREATE OR ALTER PROCEDURE usp_DeleteAnswer(@question_id VARCHAR(150),
    @answer_id VARCHAR(150))
AS
BEGIN
    DELETE FROM [dbo].[Answers] WHERE answer_id = @answer_id AND question_id = @question_id
END