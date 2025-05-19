import { Pool } from 'pg';

export const pool = new Pool({
  // use your db user name
  user: 'postgres',
  host: 'localhost',
  database: 'investor_db',
  // use your db user password
  password: 'your_password',
  port: 5432,
});
