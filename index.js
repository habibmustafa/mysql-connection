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
                    

                    
                    
//                     "ADDITION"
// const express = require('express');
// const app = express();

// // post metodu ucun
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // server ne qederki calisir, onda terminalda bu gorunur
// app.listen(3000, () => {
//    console.log("server is starter");
// });

// const users = [
//    { "id": "1", "name": "habib", "age": "19" },
//    { "id": "2", "name": "Eli", "age": "16" },
//    { "id": "3", "name": "Veli", "age": "23" }
// ]

// app.get('/', (req, res) => {
//    res.json(users)
// })

// app.post('/', (req, res) => {
//    users.push(req.body)
//    res.json(users)
// })

// app.put('/user/:id', (req, res) => {
//    const idOfUser = parseInt(req.params.id);
//    const userIndex = users.findIndex(user => String(user.id) == idOfUser);

//    if (userIndex !== -1) {
//       users[userIndex] = { ...users[userIndex], ...req.body }
//    }
//    else res.status(404).json()
// })

// app.delete('/user/:id', (req, res) => {
//    const idOfUser = parseInt(req.params.id)
//    const userIndex = users.findIndex(user => String(user.id) == idOfUser);
//    if (userIndex !== -1) {
//       console.log("User deleted");
//       users.splice(idOfUser - 1, 1)
//    }
//    else {
//       res.status(404).json()
//       console.log("User not deleted");
//    }
// })
//       (err, data) => {
//          if (err) {
//             return res.status(500)
//          }
//          const id = parseInt(req.params.id)
//          const index = data.findIndex(data => data.id == id);
//          if(index === -1) {
//             return res.status(404).json()
//          }
//          res.json(data[index])
//       })
// });
