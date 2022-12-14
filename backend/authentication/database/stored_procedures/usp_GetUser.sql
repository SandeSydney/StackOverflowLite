CREATE OR ALTER PROCEDURE usp_GetUser(
    @email VARCHAR(300)
)
AS
BEGIN
    SELECT *
    FROM [dbo].[Users]
    WHERE email = @email
END