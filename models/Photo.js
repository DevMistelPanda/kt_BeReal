const { pool } = require('../db/connection');

class Photo {
  static async create(imageUrl) {
    const [result] = await pool.execute(
      'INSERT INTO photos (image_url) VALUES (?)',
      [imageUrl]
    );
    return { id: result.insertId, imageUrl };
  }

  static async findAll() {
    const [rows] = await pool.query(
      'SELECT * FROM photos ORDER BY created_at DESC'
    );
    return rows;
  }

  static async count() {
    const [rows] = await pool.query('SELECT COUNT(*) as count FROM photos');
    return rows[0].count;
  }
}

module.exports = Photo;