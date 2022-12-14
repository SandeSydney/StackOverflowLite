CREATE OR ALTER PROCEDURE usp_GetAllQuestions
AS
BEGIN
    SELECT * FROM [dbo].[Questions]
END