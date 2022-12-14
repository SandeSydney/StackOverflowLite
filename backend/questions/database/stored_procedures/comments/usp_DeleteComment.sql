CREATE OR ALTER PROCEDURE usp_DeleteComment(@comment_id VARCHAR(150))
AS
BEGIN
    DELETE FROM [dbo].[Comments] WHERE comment_id = @comment_id
END