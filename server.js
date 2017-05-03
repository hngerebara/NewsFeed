const express = require('express');
const path = require('path');
// Create new app
const app = express();
const port = process.env.PORT || 8000;
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'app', 'index.html'));
});
app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});