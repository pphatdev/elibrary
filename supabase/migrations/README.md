# Contents of /database-schema/database-schema/README.md

# Books Library Database Schema

This project provides a database schema for a books library application. It includes the necessary migrations to create tables for books, authors, genres, members, and loans.

## Migrations

- **20240327000000_create_books.sql**: Creates the `books` table with fields:
  - `id`: Primary key
  - `title`: Title of the book
  - `author_id`: Foreign key referencing the `authors` table
  - `genre_id`: Foreign key referencing the `genres` table
  - `published_date`: Date the book was published

- **20240327000001_create_authors.sql**: Creates the `authors` table with fields:
  - `id`: Primary key
  - `name`: Name of the author
  - `bio`: Biography of the author

- **20240327000002_create_genres.sql**: Creates the `genres` table with fields:
  - `id`: Primary key
  - `genre_name`: Name of the genre

- **20240327000003_create_members.sql**: Creates the `members` table with fields:
  - `id`: Primary key
  - `name`: Name of the member
  - `email`: Email of the member
  - `membership_date`: Date the member joined

- **20240327000004_create_loans.sql**: Creates the `loans` table with fields:
  - `id`: Primary key
  - `book_id`: Foreign key referencing the `books` table
  - `member_id`: Foreign key referencing the `members` table
  - `loan_date`: Date the book was loaned
  - `return_date`: Date the book was returned

## Setup

To set up the database schema, run the migrations in your database environment. Ensure that you have the necessary permissions to create tables.

## License

This project is licensed under the MIT License.