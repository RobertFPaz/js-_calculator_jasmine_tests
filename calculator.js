window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Get the inputs from the DOM.
  let initAmount = document.getElementById("loan-amount")
  let initYears = document.getElementById("loan-years")
  let initRate = document.getElementById("loan-rate") 
  // Put some default values in the inputs
  initAmount.value = '1000';
  initYears.value = '30';
  initRate.value = '.10'
  // create object to store values
  let initValues ={
  amount : initAmount.value,
  years: initYears.value,
  rate : initRate.value,
  }
  // Call a function to calculate the current monthly payment
  update()
}

function update() {
  // Get the current values from the UI
  const currentUIValues =  getCurrentUIValues()
  // Update the monthly payment
  updateMonthly(calculateMonthlyPayment(currentUIValues))

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let p = Number(values.amount);
    let i = Number(values.rate) / 12;
    let n = Number(values.years) * 12;
    let numerator = p * i; 
    let denominator = 1 - (1 + i)**-n
     // return monthly
    return  (numerator/denominator).toFixed(2).toString()
}

// Given a string representing the monthly payment value,
//  convert string to number and round to second decimal.
// update the UI to show the value.
// select span and change innerText to equal monthly
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = "$" + monthly;
}
