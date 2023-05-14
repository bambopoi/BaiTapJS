//bai tap 1
var button1 = document.getElementById("btn__submit1");

button1.onclick = function () {
  var salary1 = document.getElementById("salary1").value * 1;
  var date1 = document.getElementById("date1").value * 1;

  var output = salary1 * date1;

  var result1 = document.getElementById("result1");

  result1.innerHTML = output + " $";
};

// bai tap 2
var button2 = document.getElementById("btn__submit2");
var result2 = document.getElementById("result2");
button2.onclick = function () {
  var sst1 = document.getElementById("sst1").value * 1;
  var sst2 = document.getElementById("sst2").value * 1;
  var sst3 = document.getElementById("sst3").value * 1;
  var sst4 = document.getElementById("sst4").value * 1;
  var sst5 = document.getElementById("sst5").value * 1;

  var output2 = (sst1 + sst2 + sst3 + sst4 + sst5) / 5;

  result2.innerHTML = output2;
};

// bai tập 3

var button3 = document.getElementById("btn__submit3");

button3.onclick = function () {
  var currency = document.getElementById("currency").value * 1;
  var result3 = document.getElementById("result3");

  var output3 = currency * 23500;

  result3.innerHTML = new Intl.NumberFormat("vn-VN").format(output3) + " Đ";
};

// bài tập 4

var button4 = document.getElementById("btn__submit4");

button4.onclick = function () {
  var chieuDai = document.getElementById("width").value * 1;
  var chieuRong = document.getElementById("height").value * 1;
  var result4 = document.getElementById("result4");
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  result4.innerHTML = "Diện tích: " + dienTich + ";" + " Chu vi: " + chuVi;
};

// bài tập 5
var button5 = document.getElementById("btn__submit5");

button5.onclick = function () {
  var number = document.getElementById("number5").value * 1;
  var result5 = document.getElementById("result5");
  var donVi = Math.floor(number % 10);
  var hangChuc = Math.floor(number / 10);
  var output5 = donVi + hangChuc;

  result5.innerHTML = output5;
};
