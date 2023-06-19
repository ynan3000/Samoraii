const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('The project is alive!'));
app.listen(port, () => console.log(`Samoraii Bot is listening to http://localhost:${port}`));

