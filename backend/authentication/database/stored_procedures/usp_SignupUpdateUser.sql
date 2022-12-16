CREATE OR ALTER PROCEDURE usp_SignupUpdateUser(
    @user_id VARCHAR(150),
    @username VARCHAR(100),
    @email VARCHAR(300),
    @password VARCHAR(250),
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS (SELECT *
    FROM [dbo].[Users]
    WHERE user_id = @user_id)
        BEGIN
        UPDATE [dbo].[Users] SET
                username = @username,
                email = @email,
                password = @password
    END
    ELSE 
        BEGIN
        INSERT INTO [dbo].[Users]
        VALUES
            (@user_id, @username, @email, @password, @IsDeleted)
    END
END