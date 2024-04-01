i = Math.floor(Math.random()*100);

function eventclick() {
  var a = document.getElementById('answer').value;
  if  (i == a) {
    alert('☆大正解☆');
  } else if (i > a) {
    alert('もっと大きいよ！');
  } else if (i < a) {
    alert('もっと小さいよ！');
  }
}