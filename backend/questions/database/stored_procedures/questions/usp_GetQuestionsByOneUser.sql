CREATE OR ALTER PROCEDURE usp_GetQuestionsByOneUser(@user_id VARCHAR(150))
AS
BEGIN
    SELECT * FROM [dbo].[Questions] WHERE user_id = @user_id
END