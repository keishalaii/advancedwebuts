const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "yamabiko.proxy.rlwy.net",
  user: "root",      
  password: "PWpvRQZDWvofiGnLdhoENpYmQmtKPCLl",    
  database: "railway",
  port: "58708"
});

conn.connect((err) => {
  if (err) throw err;
  console.log("✅ Database connected...");
});

module.exports = conn;
