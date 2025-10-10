-- Delete data base if already exist --
DROP DATABASE IF EXISTS job_board;

-- Create data base --
CREATE DATABASE job_board;

-- Connect to data base --
\c job_board;

-- Execution tables.sql --
\i tables.sql

-- Execution seed.sql --
\i seed.sql
