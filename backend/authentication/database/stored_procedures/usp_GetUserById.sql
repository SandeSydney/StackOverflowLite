CREATE OR ALTER PROCEDURE usp_GetUserById(
    @user_id VARCHAR(150)
)
AS
BEGIN
    SELECT *
    FROM [dbo].[Users]
    WHERE user_id = @user_id
END