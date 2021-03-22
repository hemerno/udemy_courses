document.getElementById('calc-form').addEventListener('submit', function () {
  document.getElementById('results').style.display = 'none';
  // document.getElementById("loader").style.display = "block";

  // setTimeout(checkNums, 1000);
  checkNums();

  event.preventDefault();
});

// checks if all values are correct
// passes array of correct values to calculateResults
function checkNums() {
  const valsArr = [];
  valsArr.push(document.getElementById('amount').value);
  valsArr.push(document.getElementById('interest').value);
  valsArr.push(document.getElementById('years').value);

  const notEmp = valsArr.every((val) => val !== ''),
    gtZero = valsArr.every((val) => val >= 0),
    isNum = valsArr.every((val) => !isNaN(val));

  if (isNum && gtZero && notEmp) {
    calculateResults(valsArr);
  } else {
    showErr('Check fields');
  }
}

function calculateResults(arr) {
  const monthly = document.getElementById('monthly'),
    total = document.getElementById('total'),
    totalInterest = document.getElementById('total-interest'),
    principal = parseFloat(arr[0]),
    cInterest = parseFloat(arr[1]) / 100 / 12,
    cPayments = parseFloat(arr[2]) * 12;

  const x = Math.pow(1 + cInterest, cPayments);
  const mon = (principal * x * cInterest) / (x - 1);

  if (isFinite(x)) {
    monthly.value = mon.toFixed(2);
    total.value = (mon * cPayments).toFixed(2);
    totalInterest.value = (mon * cPayments - principal).toFixed(2);

    document.getElementById('results').style.display = 'block';
    // document.getElementById("loader").style.display = "none";
  } else {
    showErr('Lower your expectations, bro');
  }
}

// ERROR DIV
function showErr(error) {
  document.getElementById('results').style.display = 'none';
  // document.getElementById("loader").style.display = "none";

  const errDiv = document.createElement('div');

  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errDiv.className = 'alert alert-danger';

  errDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errDiv, heading);

  setTimeout((_) => document.querySelector('.alert').remove(), 2000);
}
