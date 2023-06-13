const qiaoDiv = document.getElementById('qiao');
const gongdeSpan = document.getElementById('gongde');

// 监听点击事件
qiaoDiv.addEventListener('click', () => {
  // 发送请求到后端
  fetch('/update-number')
    .then(response => response.json())
    .then(data => {
      // 更新数字显示
      gongdeSpan.textContent = data.number;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
