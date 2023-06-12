const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 10000;
const dataFilePath = "data.json";

app.use(express.static("public"));

app.get("/", (req, res) => {
  const data = getDataFromFile();
  res.send(data.number.toString());
});

app.post("/increment", (req, res) => {
  const data = getDataFromFile();
  data.number += 1;
  saveDataToFile(data);
  res.send("数字已增加");
});

function getDataFromFile() {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data);
}

function saveDataToFile(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data));
}

app.listen(PORT, () => {
  console.log(`服务器已启动，端口号：${PORT}`);
});
