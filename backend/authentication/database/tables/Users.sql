CREATE TABLE Users(
    user_id VARCHAR(150) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(300) NOT NULL, 
    password VARCHAR(250) NOT NULL,
    IsDeleted BIT NOT NULL DEFAULT 0 
    PRIMARY KEY (user_id)
)
