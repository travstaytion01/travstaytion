-- Tables the public marketing site writes to from src/pages/api/*.
-- On the old hosted database these existed already; package_inquiry is the only
-- one its route creates for itself. Column types mirror that route's own
-- CREATE TABLE so the two agree.
-- Safe to run repeatedly.

CREATE TABLE IF NOT EXISTS quote (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  phone        VARCHAR(50),
  destination  VARCHAR(255),
  details      TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  phone        VARCHAR(50),
  subject      VARCHAR(255),
  message      TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS feedback (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  message      TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS package_inquiry (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  phone        VARCHAR(50) NOT NULL,
  package_name VARCHAR(255),
  package_id   INTEGER,
  travel_date  DATE,
  travelers    VARCHAR(50),
  message      TEXT,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS quote_created_idx           ON quote (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_created_idx         ON contact (created_at DESC);
CREATE INDEX IF NOT EXISTS feedback_created_idx        ON feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS package_inquiry_created_idx ON package_inquiry (created_at DESC);
