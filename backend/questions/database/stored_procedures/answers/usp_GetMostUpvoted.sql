CREATE OR ALTER PROCEDURE usp_GetMostUpvoted
AS 
BEGIN
    SELECT * FROM [dbo].[Answers]
    ORDER BY CONVERT(INT, upvotes) DESC
END