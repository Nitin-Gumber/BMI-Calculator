const form = document.querySelector("form");
const bmiRange = document.querySelector("#bmiRange");

// This usecase will give you empty
// const height = parseInt(documen.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2);
  }
  if (results.innerHTML < 18.6) {
    bmiRange.innerHTML = `Under Weight`;
  }
  if (results.innerHTML > 18.6 && results.innerHTML < 24.9) {
    bmiRange.innerHTML = `Normal Weight`;
  }
  if (results.innerHTML > 24.9) {
    bmiRange.innerHTML = `OverWeight`;
  }
});
