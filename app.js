const express = require('express');
const app = express();
const PORT = process.env.PORT ||3030;
const fs = require('fs');
const path = require('path');

const dataFile = 'data.json';

// 设置静态文件目录
app.use(express.static('public'));

// 设置路由处理更新数字请求
app.get('/update-number', (req, res) => {
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    let number = JSON.parse(data).number;
    number++;

    fs.writeFile(dataFile, JSON.stringify({ number }), err => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      res.json({ number });
    });
  });
});

// 设置路由处理根目录请求
app.get('/get-number', (req, res) => {
  if (!fs.existsSync(dataFile) || fs.readFileSync(dataFile, 'utf8').trim() === '') {
    fs.writeFileSync(dataFile, JSON.stringify({ number: 0 }));
  }

  fs.readFile(dataFile, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    let number = JSON.parse(data).number;

    res.json({ number });
  });
});

// 设置路由处理根目录请求
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log('Server started on port ${PORT}');
});
