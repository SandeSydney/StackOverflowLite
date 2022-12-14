CREATE OR ALTER PROCEDURE usp_GetCommentById(@comment_id VARCHAR(150))
AS 
BEGIN
    SELECT * FROM [dbo].[Comments] WHERE comment_id = @comment_id
END