import sqlite3 from 'sqlite3';

const selectAll = (db, query) => {
    return new Promise((resolve, reject) => {
        db.all(query, (err, rows) => {
            if (err) return reject(err);
            return resolve(rows);
        });
    });
};

export default async function handler(req, res) {
    const db = new sqlite3.Database('./api_users.sqlite');
    const users = await selectAll(db, 'SELECT * FROM users');
    db.close();
    
    res.status(200).json({ users });
}
