CREATE OR ALTER PROCEDURE usp_InsertUpdateQuestion(
    @question_id VARCHAR(150),
    @user_id VARCHAR(150),
    @subject VARCHAR(200),
    @question_date DATE,
    @question TEXT,
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS (SELECT *
    FROM [dbo].[Questions]
    WHERE question_id = @question_id)
        BEGIN
        UPDATE [dbo].[Questions] SET
                subject = @subject,
                question = @question
    END
        ELSE 
            BEGIN
        INSERT INTO [dbo].[Questions]
        VALUES
            (@question_id, @user_id, @subject, @question_date, @question, @IsDeleted)
    END
END