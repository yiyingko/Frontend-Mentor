const inputs = document.querySelectorAll('input');
const rightCol = document.querySelector('.rightCol');
const rightCol2 = document.querySelector('.rightCol-2');
const msgs = document.querySelectorAll('.msg');
const visa = document.getElementById('visa');
const mastercard = document.getElementById('mastercard');
const jcb = document.getElementById('jcb');
const submit = document.querySelector('.submit');
const continueWeb = document.querySelector('.continue');
const cardNumber = document.querySelector('.cardNumberCard');
const nameCard = document.querySelector('.nameCard');
const yearNumberCard = document.querySelector('.yearNumberCard');
const monthNumberCard = document.querySelector('.monthNumberCard');
const cvcNumberCard = document.querySelector('.cvcNumberCard');

//show typing on card & split ceardnumber inputs
inputs.forEach((input) => {
  input.value = '';
  input.addEventListener('keyup', (e) => {
    input.id === 'cardNumber'
      ? (document.querySelector(`.${input.id}Card`).innerHTML = splitNum(
          document.getElementById(input.id).value
        ))
      : (document.querySelector(`.${input.id}Card`).innerHTML =
          document.getElementById(input.id).value);

    document.getElementById('cardNumber').value = splitNum(
      document.getElementById('cardNumber').value
    );
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

function splitNum(val) {
  let newVal = '';
  val = `${val}`.replace(/\s/g, '');
  console.log(val);
  for (var i = 0; i < val.length; i++) {
    if (i % 4 == 0 && i > 0) newVal = newVal.concat(' ');
    newVal = newVal.concat(val[i]);
  }
  return newVal;
}

//validation
//credit card regex from: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s20.html
const patterns = {
  name: /^[a-zA-Z\-\s]+$/i,
  number:
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})| (6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
  month: /^(0[1-9]|1[012])$/,
  year: /^2[456789]$/,
  cvc: /^\d{3}$/,
};

function validate(field, regex) {
  let fieldValue =
    field.id === 'cardNumber' ? field.value.split(' ').join('') : field.value;
  if (regex.test(fieldValue) && field.id === 'cardNumber') {
    field.className = 'valid';
    fieldValue[0] == 4
      ? visa.classList.remove('hidden')
      : visa.classList.add('hidden');
    fieldValue[0] == 5
      ? mastercard.classList.remove('hidden')
      : mastercard.classList.add('hidden');

    fieldValue.slice(0, 2) == 35
      ? jcb.classList.remove('hidden')
      : jcb.classList.add('hidden');
    document.getElementById(field.id + 'Msg').innerHTML = '';
  } else if (regex.test(fieldValue)) {
    field.classList.remove('invalid');
    field.classList.add('valid');
    document.getElementById(field.id + 'Msg').innerHTML = '';
  } else if (field.id === 'cardNumber') {
    field.classList.add('invalid');
    document.getElementById(field.id + 'Msg').innerHTML =
      'Wrong format, numbers only/ Not valid card number';
    visa.classList.add('hidden');
    mastercard.classList.add('hidden');
    jcb.classList.add('hidden');
  } else if (field.id === 'name') {
    field.classList.add('invalid');
    document.getElementById(field.id + 'Msg').innerHTML =
      field.id + ' cannot be empty/non alphabetic character';
  } else if (
    field.id === 'monthNumber' ||
    field.id === 'yearNumber' ||
    field.id === 'cvcNumber'
  ) {
    field.classList.add('invalid');
    document.getElementById(field.id + 'Msg').innerHTML =
      "Can't be blank/wrong input";
  }
}

//submit
submit.addEventListener('click', function (event) {
  if (checkEmptyInputs() || anyValidationError() || checkDate()) {
    return;
  }
  rightCol.classList.add('hidden');
  rightCol2.classList.remove('hidden');
});

function anyValidationError() {
  return document.querySelectorAll('.invalid').length == 0 ? false : true;
}

function checkEmptyInputs() {
  let result = false;
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      document.getElementById(input.id + 'Msg').innerHTML =
        input.id + ' cannot be empty';
      input.className = 'invalid';
      result = true;
    }
  });
  return result;
}

function checkDate() {
  if (
    document.getElementById('yearNumber').value ==
      `${new Date().getFullYear()}`.slice(2) &&
    document.getElementById('monthNumber').value < new Date().getMonth() + 1
  )
    return (document.getElementById('monthNumberMsg').innerHTML =
      'month not valid');
}

//continue page
continueWeb.addEventListener('click', function () {
  resetInput();
  rightCol2.classList.add('hidden');
  rightCol.classList.remove('hidden');
});

function resetInput() {
  inputs.forEach((input) => {
    input.value = '';
  });
  cardNumber.innerHTML = '0000 0000 0000 0000';
  nameCard.innerHTML = 'Jane Appleseed';
  monthNumberCard.innerHTML = '00';
  yearNumberCard.innerHTML = '00';
  cvcNumberCard.innerHTML = '000';
  document.getElementById('monthNumberMsg').innerHTML = '';
}
