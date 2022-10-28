function usDollar() {
  let philippinePeso = document.getElementById("php").value;
  const usd = 0.017249461;
  const result = philippinePeso * usd;

  document.getElementById("foreign").innerHTML = "&#36; " + result;
}

function japanYen() {
  let philippinePeso = document.getElementById("php").value;
  const jpy = 2.5442539;
  const result = philippinePeso * jpy;

  document.getElementById("foreign").innerHTML = "&#165;" + result;
}

function koreanWon() {
  let philippinePeso = document.getElementById("php").value;
  const krw = 24.593335;
  const result = philippinePeso * krw;

  document.getElementById("foreign").innerHTML = "&#8361; " + result;
}

function dollarToPhp() {
  let foreignCurrency = document.getElementById("foreign-currency").value;
  const php = 58.053994;
  const result = foreignCurrency * php;

  document.getElementById("peso").innerHTML = "&#8369; " + result;
}

function yenToPhp() {
  let foreignCurrency = document.getElementById("foreign-currency").value;
  const php = 0.393193;
  const result = foreignCurrency * php;

  document.getElementById("peso").innerHTML = "&#8369; " + result;
}

function wonToPhp() {
  let foreignCurrency = document.getElementById("foreign-currency").value;
  const php = 0.040687594;
  const result = foreignCurrency * php;

  document.getElementById("peso").innerHTML = "&#8369; " + result;
}