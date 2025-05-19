# Investor submission Web application

PERN stack app (PostgreSQL, Express, React, Vite, Node, TS)

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [PostgreSQL](https://www.postgresql.org/download/)
- npm or yarn

## Setup Instructions

1. Clone the repository `git clone https://github.com/gangadhar1373/investor-app.git`

2. Install dependencies in both client and server

   ```bash
   cd client
   npm i
   npm run dev

   # open new terminal
   cd server
   npm i
   npm run dev
   ```

3. Create postgres DB in your local machine

   ```bash
   # replace postgres with your username
   psql -U postgres
   ```

4. Run the sql script from `server/db/investor.sql` this should create the db and table.

5. Replace user and password in `server/db/pool.ts` it should be your local user and password.

6. Fill and submit the form in browser. You should see the file in uploads dir and table updated with data.
