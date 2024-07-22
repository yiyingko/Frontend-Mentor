const bill = document.querySelector('#bill');
const numberPeople = document.querySelector('#people');
const tipPerson = document.getElementById('tip_person');
const totalPerson = document.getElementById('total_person');
const tips = document.querySelectorAll('.tip');
const custom = document.getElementById('custom');
const inputs = document.querySelectorAll('input');
const pattern = {
  number: / ^(0\.[0-9]*)$ |^[1-9][0-9]*\.?[0-9]*$/,
  person: /^[1-9][0-9]*$/,
};

window.onload = () => reset();

//validation
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, pattern[e.target.attributes.name.value]);
  });
});

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.id === 'custom'
      ? (field.className = 'custom-valid')
      : (field.className = 'valid');
    document.getElementById(field.id + 'Msg').innerHTML = '';
  } else {
    field.id === 'custom'
      ? (field.className = 'custom-invalid')
      : (field.className = 'invalid');
    field.value === '0'
      ? (document.getElementById(field.id + 'Msg').innerHTML = "Can't be Zero")
      : (document.getElementById(field.id + 'Msg').innerHTML =
          'Pls Correct Input');
  }
}

//calculater
tips.forEach((tip) =>
  tip.addEventListener('click', (event) => {
    if (checkEmptyInputs() || anyValidationError()) {
      return;
    } else {
      const calcTip = (bill.value * (tip.value / 100)) / numberPeople.value;
      const roundTip = Math.ceil(calcTip * 100) / 100;
      const totalToPay =
        Math.ceil((bill.value / numberPeople.value + calcTip) * 100) / 100;
      tipPerson.innerHTML = `$${roundTip}`;
      totalPerson.innerHTML = `$${totalToPay}`;
    }
  })
);

//helper functions
function reset() {
  bill.value = '';
  numberPeople.value = '';
  custom.value = '';
  tipPerson.innerHTML = '$0.00';
  totalPerson.innerHTML = '$0.00';
  billMsg.innerHTML = '';
  peopleMsg.innerHTML = '';
  customMsg.innerHTML = '';
  custom.className = 'custom-valid';
  bill.className = 'valid';
  people.className = 'valid';
}

function anyValidationError() {
  if (custom.value.trim().length == 0) {
    custom.className = 'custom-valid';
    customMsg.innerHTML = '';
  }
  return document.querySelectorAll('.invalid').length == 0 &&
    custom.className == 'custom-valid'
    ? false
    : true;
}

function checkEmptyInputs() {
  let result = false;
  if (bill.value.trim().length == 0) {
    billMsg.innerHTML = 'no valid input';
    result = true;
  }
  if (people.value.trim().length == 0) {
    peopleMsg.innerHTML = 'no valid input';
    result = true;
  }
  return result;
}
