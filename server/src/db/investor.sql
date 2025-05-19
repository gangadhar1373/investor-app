-- in psql
CREATE DATABASE investor_db;

\c investor_db

CREATE TABLE investors (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  dob DATE NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  file_path TEXT NOT NULL
);