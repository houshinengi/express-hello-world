const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 10000;
const dataFilePath = "data.json";

// 静态文件中间件，将public文件夹作为静态资源提供
app.use(express.static("public"));

// 处理GET请求，返回存储的数字
app.get("/", (req, res) => {
  const data = getDataFromFile();
  res.send(`当前数字为：${data.number}`);
});

// 处理POST请求，增加数字
app.post("/increment", (req, res) => {
  const data = getDataFromFile();
  data.number += 1;
  saveDataToFile(data);
  res.send("数字已增加");
});

// 读取JSON文件的数据
function getDataFromFile() {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data);
}

// 将数据保存到JSON文件
function saveDataToFile(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data));
}

app.listen(PORT, () => {
  console.log(`服务器已启动，端口号：${PORT}`);
});
