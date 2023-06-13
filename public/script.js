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
    
         var audio = new Audio("audio/muyu.mp3");
				audio.play();
				
				$("#jiayi").show();
				setTimeout(function() { $("#jiayi").hide(); }, 600);
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
