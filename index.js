const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 7070;
const TestRouter = require('./routes/routes.js');
const app = express();

app.use(express.json());
app.use(TestRouter);
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/test/:id', (req, res) => res.sendFile(path.join(__dirname, 'public', 'single.html')));
app.get('/help', (req, res) => res.send('Hello from help'));

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}...`));