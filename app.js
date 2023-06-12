const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/updateCount', (req, res) => {
    const { count } = req.body;

    // 将 count 写入 JSON 文件
    fs.writeFile('data.json', JSON.stringify({ count }), err => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error saving count' });
        } else {
            res.json({ message: 'Count updated successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
