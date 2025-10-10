-- Delete tables (ordre inverse) --
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS advertisements CASCADE;
DROP TABLE IF EXISTS companies CASCADE;
DROP TABLE IF EXISTS people CASCADE;

-- Create tables --

CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    status VARCHAR(20) NOT NULL DEFAULT 'candidate' 
           CHECK (status IN ('admin', 'company', 'candidate')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    id_people INTEGER NOT NULL REFERENCES people(id) ON DELETE CASCADE,
    company_name VARCHAR(200) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE advertisements (
    id SERIAL PRIMARY KEY,
    id_company INTEGER NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    short_description TEXT,
    long_description TEXT,
    wages VARCHAR(50),
    working_time VARCHAR(50),
    place VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    id_people INTEGER NOT NULL REFERENCES people(id) ON DELETE CASCADE,
    id_advertisement INTEGER NOT NULL REFERENCES advertisements(id) ON DELETE CASCADE,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);