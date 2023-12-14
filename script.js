const form = document.querySelector("form");
const bmiRange = document.querySelector("#bmiRange");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  const weightInKg = parseFloat(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weightInKg === "" || weightInKg < 0 || isNaN(weightInKg)) {
    results.innerHTML = `Please give a valid weight ${weightInKg}`;
  } else {
    var heightInCM = height * 30.48;
    results.innerHTML = (weightInKg / ((heightInCM * heightInCM) / 10000 )).toFixed(2);
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
