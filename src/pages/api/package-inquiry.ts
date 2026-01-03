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

  const { name, email, phone, packageName, packageId, travelDate, travelers, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  const client = new Client(clientConfig);

  try {
    await client.connect();

    // Create table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS package_inquiry (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        package_name VARCHAR(255),
        package_id INTEGER,
        travel_date DATE,
        travelers VARCHAR(50),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert the inquiry
    await client.query(
      `INSERT INTO package_inquiry (name, email, phone, package_name, package_id, travel_date, travelers, message) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, email, phone, packageName, packageId, travelDate || null, travelers, message]
    );

    res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error', details: (error as Error).message });
  } finally {
    await client.end();
  }
}
