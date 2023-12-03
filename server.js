const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;

// App config
app.use(express.static('public'))
app.use(express.json())

// LIST

app.listen(PORT, () => console.log('Server ready at port 3030!'))
