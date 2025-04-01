const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

// Middleware для favicon
app.use(favicon(path.join(__dirname, 'public', '/favicon.ico')))
// папка public с публичными файлами
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

app.get('/edit', (req,res) => {
  res.send('Для входа в панель управления, введите ключ: 123');
});

app.get('/ss', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server alive on 3000 port'));