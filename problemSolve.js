//Taka to Dollar Convert

function takaToDollar(taka) {
  var dollar = taka * 0.0095;
  return dollar;
}
var myTaka = 5000;
var convertDollar = takaToDollar(myTaka);
console.log(convertDollar);
