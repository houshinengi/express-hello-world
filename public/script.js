document.addEventListener('DOMContentLoaded', () => {
  const qiaoDiv = document.getElementById('qiao');
  const gongdeSpan = document.getElementById('gongde');

  function updateNumber() {
    fetch('/update-number')
      .then(response => response.json())
      .then(data => {
        const number = data.number;
        gongdeSpan.innerText = number;
      })
      .catch(error => {
        console.error('Error updating number:', error);
      });
  }

  function getNumber() {
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
  getNumber();

  qiaoDiv.addEventListener('click', () => {
    updateNumber();
  });
});
