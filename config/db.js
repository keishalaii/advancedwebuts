const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: 'interchange.proxy.rlwy.net',
  port: 15980,
  user: 'root',
  password: 'QruvdmevlkRZpZomOxHRlExknCVUytvQ',
  database: 'railway'
});

conn.connect((err) => {
  if (err) throw err;
  console.log("✅ Database connected...");
});

module.exports = conn;
