const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('<iframe src="https://discord.com/widget?id=1120308736783827076&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>'));
app.listen(port, () => console.log(`Samoraii Bot is listening to http://localhost:${port}`));

