const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to ComplyTex 🚀</h1><p>Your app is running successfully.</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
