document.addEventListener('DOMContentLoaded', () => {
  const qiaoDiv = document.getElementById('qiao');
  const gongdeSpan = document.getElementById('gongde');

  qiaoDiv.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/update-number');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const number = response.number;
          gongdeSpan.innerText = number;
        } else {
          console.error('Error updating number:', xhr.status);
        }
      }
    };
    xhr.send();
  });

  // 初始化数字
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/get-number');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const number = response.number;
        gongdeSpan.innerText = number;
      } else {
        console.error('Error getting number:', xhr.status);
      }
    }
  };
  xhr.send();
});
