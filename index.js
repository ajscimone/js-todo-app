const express = require('express')
const app = express()
const port = 3000

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./todos.db"
    }
  });

app.get('/', async(req, res) => {
    let data = await (knex.select('*').from('users')
    .then((data) => {
        console.log(data)
        return data
    }));
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})