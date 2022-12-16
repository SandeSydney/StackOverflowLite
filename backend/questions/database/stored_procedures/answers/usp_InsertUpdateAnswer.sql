CREATE OR ALTER PROCEDURE usp_InsertUpdateAnswer(
    @answer_id VARCHAR(150),
    @question_id VARCHAR(150),
    @user_id VARCHAR(150),
    @answer_date DATE,
    @answer TEXT,
    @upvotes VARCHAR(20),
    @downvotes VARCHAR(20),
    @IsValid BIT,
    @IsDeleted BIT = 0
)
AS
BEGIN
    IF EXISTS (SELECT *
    FROM [dbo].[Answers]
    WHERE answer_id = @answer_id)
    BEGIN
        UPDATE [dbo].[Answers] SET 
            answer_date = @answer_date,
            answer = @answer,
            upvotes = @upvotes,
            downvotes = @downvotes, 
            IsValid = @IsValid
    END
    ELSE
    BEGIN
        INSERT INTO [dbo].[Answers]
        VALUES
            (@answer_id, @question_id, @user_id, @answer_date, @answer, @upvotes, @downvotes, @IsValid, @IsDeleted)
    END
END