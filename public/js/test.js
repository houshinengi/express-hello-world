

function incrementNumber() {
  fetch("/increment", { method: "POST" })
    .then(() => {
      updateNumber();
    })
    .catch((error) => {
      console.error("增加数字时发生错误：", error);
    });
}

function updateNumber() {
  fetch("/")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("number").textContent = data;
    })
    .catch((error) => {
      console.error("获取数字时发生错误：", error);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  updateNumber();
});
