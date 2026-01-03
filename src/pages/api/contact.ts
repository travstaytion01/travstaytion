import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

// Aiven uses certificates that may not be in Node's trust store
// For development and Aiven cloud, we need to allow self-signed certificates
const clientConfig = {
  connectionString: process.env.DATABASE_URL || 'postgres://avnadmin:AVNS_81fjW_YZ-0yVK3ymq1r@pg-39f81324-travstaytion-01.k.aivencloud.com:28730/defaultdb',
  ssl: {
    rejectUnauthorized: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const client = new Client(clientConfig);
  try {
    await client.connect();
    await client.query(
      'INSERT INTO contact (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, subject, message]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Database error', details: (error as Error).message });
  } finally {
    await client.end();
  }
}
