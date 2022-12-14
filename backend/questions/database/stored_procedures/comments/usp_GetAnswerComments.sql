CREATE OR ALTER PROCEDURE usp_GetAnswerComments(@answer_id VARCHAR(150))
AS
BEGIN
    SELECT * FROM [dbo].[Comments] WHERE answer_id = @answer_id
END