const express = require('express');
const app = express();
const port = 3000;

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
