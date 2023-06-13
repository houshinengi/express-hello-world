document.addEventListener('DOMContentLoaded', () => {
  const qiaoDiv = document.getElementById('qiao');
  const gongdeSpan = document.getElementById('gongde');

  function updateNumber() {
    fetch('/get-number')
      .then(response => response.json())
      .then(data => {
        const number = data.number;
        gongdeSpan.innerText = number;
      })
      .catch(error => {
        console.error('Error getting number:', error);
      });
  }

  // 初始化数字
  updateNumber();

  qiaoDiv.addEventListener('click', () => {
    fetch('/update-number')
      .then(response => response.json())
      .then(data => {
        const number = data.number;
        gongdeSpan.innerText = number;
      })
      .catch(error => {
        console.error('Error updating number:', error);
      });
  });
});
