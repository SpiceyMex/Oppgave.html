const api ="https://api.exchangerate-api.com/v4/latest/USD";

var search = document .querySelector(".searchBox");
var convert = document .querySelector(".convert");
var fromCurrency = document .querySelector(".from");
var toCurrency = document .querySelector(".to");
var finalValue = document .querySelector(".finalValue");
var finalAmount = document .querySelector(".finalAmount");
var resultFrom;
var resultTo;
var searchValue;

fromCurrency.addEventListener('change', (event)=>{
  resultFrom = `${event.target.value}`;
});

toCurrency.addEventListener('change', (event)=>{
  resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);
function updateValue(e) {
  searchValue =e.target.value;
}

convert.addEventListener("click", getResults);

function getResults(){
  fetch(`${api}`)
  .then(Currency => {
    return Currency.json();
  }).then(displayResults);
}

function displayResults(Currency) {
  let fromRate = Currency.rates{resultFrom};
  let toRate = Currency.rates{resultsTo};
  finalValue.innerHTML =
  ((toRate/fromRate) * searchValue).tofixed(2);
  finalAmount.style.display ="block";
}
function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
};
