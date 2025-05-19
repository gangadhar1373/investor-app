import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { pool } from './db/pool';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
const upload = multer({ dest: 'uploads/' });

app.post(
  '/api/investors',
  upload.single('file'),
  async (req, res): Promise<void> => {
    const { firstName, lastName, dob, phone, address, state, zip } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).send('File is required');
      return;
    }

    try {
      const result = await pool.query(
        `INSERT INTO investors 
        (first_name, last_name, dob, phone, address, state, zip, file_path)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [firstName, lastName, dob, phone, address, state, zip, file.path]
      );
      res.status(201).json(result.rows[0]);
      return;
    } catch (err) {
      console.error('Database error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
  }
);

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
