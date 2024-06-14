const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./db.js');
const port = 3000;

app.use(cors());
app.use(bodyParser.json()); // Use bodyParser.json() for JSON payloads

app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

app.post('/', async (req, res) => {
  try {
    const { site, username, password, id } = req.body;
    const user = new User({ site, username, password, id });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.deleteOne({ id });
    console.log("Deleted");
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
