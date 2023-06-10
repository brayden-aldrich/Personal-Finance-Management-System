const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const budgetsFilePath = path.join(__dirname, 'budgets.json');

app.use(express.json());

// Read budgets data
app.get('/api/budgets', (req, res) => {
  fs.readFile(budgetsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading budgets file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let budgets = [];

    try {
      budgets = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing budgets file:', parseError);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(budgets);
  });
});

// Write budgets data
app.post('/api/budgets', (req, res) => {
  const budgets = req.body;

  fs.writeFile(budgetsFilePath, JSON.stringify(budgets), (err) => {
    if (err) {
      console.error('Error writing budgets file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});