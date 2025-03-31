const express = require('express');
const path = require('path');
const app = express();

// папка public с публичными файлами
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/edit', (req,res) => {
  res.send('Для входа в панель управления, введите ключ:');
});

app.listen(3000, () => console.log('Server alive on 3000 port'));