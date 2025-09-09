const { neon, neonConfig } = require('@vercel/postgres');

// Configure neon
neonConfig.fetchConnectionCache = true;

module.exports = async function handler(req, res) {
  // Handle CORS for frontend requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  try {
    // Create the sql client using neon
    const sql = neon(process.env.DATABASE_URL);
    
    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS connects (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255), 
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Insert data
    await sql`
      INSERT INTO connects (name, email, message) 
      VALUES (${name}, ${email}, ${message})
    `;

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error: ' + error.message });
  }
}