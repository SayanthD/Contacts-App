const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/signup.html'));
});

app.get('/signin', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/signin.html'));
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
