CREATE OR ALTER PROCEDURE usp_GetAnswerById(@answer_id VARCHAR(150))
AS
BEGIN
    SELECT * FROM [dbo].[Answers] WHERE answer_id = @answer_id
END