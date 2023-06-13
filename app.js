const express = require('express');
const app = express();
const fs = require('fs');

const dataFile = 'data.json';

// 设置静态文件目录
app.use(express.static('public'));

// 设置路由处理更新数字请求
app.get('/update-number', (req, res) => {
  // 读取当前数字
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    let number = JSON.parse(data).number;

    // 增加数字
    number++;

    // 更新json文件
    fs.writeFile(dataFile, JSON.stringify({ number }), err => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // 返回更新后的数字
      res.json({ number });
    });
  });
});

// 设置路由处理根目录请求
app.get('/', (req, res) => {
  // 读取当前数字
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    let number = JSON.parse(data).number;

    // 渲染模板并传递数字
    res.render('index', { number });
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
