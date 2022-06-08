const express = require('express')
const app = express()
const mysql = require('mysql')
const connection = mysql.createConnection({
   host: '127.0.0.1',
   port: 3306,
   user: 'root',
   password: 'hebib',
   database: 'bootcamp'
})

connection.connect(err => {
   if (!err) {
      console.log("Connected");
   }
   else {
      console.log(err.sqlMessage);
      process.exit();
   }
})

app.listen(3000, () => {
   console.log('app listening..');
})

app.get('/', (req, res) => {
   connection.query('SELECT * FROM task;',
      (err, data) => {
         if (err) return res.status(500);
         res.json(data);
      })
});

app.get('/task/:id', (req, res) => {
   connection.query('SELECT * FROM task;',
      (err, data) => {
         if (err) {
            return res.status(500)
         }
         const id = parseInt(req.params.id)
         const index = data.findIndex(data => data.id == id);
         if(index === -1) {
            return res.status(404).json()
         }
         res.json(data[index])
      })
});
