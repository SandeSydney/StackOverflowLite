CREATE OR ALTER PROCEDURE usp_InsertUpdateComments(
    @comment_id VARCHAR(150),
    @comment TEXT,
    @comment_date DATE,
    @answer_id VARCHAR(150),
    @question_id VARCHAR(150),
    @user_id VARCHAR(150),
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS (SELECT *
    FROM [dbo].[Comments]
    WHERE comment_id = @comment_id)
    BEGIN
        UPDATE [dbo].[Comments] SET 
            comment = @comment
    END
    ELSE
        BEGIN
        INSERT INTO [dbo].[Comments]
        VALUES
            (@comment_id, @comment, @comment_date, @answer_id, @question_id, @user_id, @IsDeleted)
    END
END