// form validation
const inputs = document.querySelectorAll('input');

const patterns = {
  day: /(^0?[1-9]$)|(^1[0-9]$)|(^2[0-9]$)|(^3[0-1]$)/, //date
  month: /(^0?[1-9]$)|(^1[0-2]$)/, //month
  year: /^1[0-9][0-9][0-9]|20[0-1][0-9]|202[0-4]$/, //Years from 1000 to 2024
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
    document.getElementById(field.id + 'Msg').innerHTML = '';
    resetTitleError();
  } else {
    field.className = 'invalid';
    document.getElementById(field.id + 'Msg').innerHTML =
      'Must be a valid ' + field.id;
    setTitleError();
  }
}

inputs.forEach((input) => {
  input.value = '';
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

//age convertion
function ageCount() {
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  resetResult();

  if (checkEmptyInputs()) return;

  const monthOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dob = new Date(`${month}/${day}/${year}`);
  let today = new Date();

  //check if the date/month/dob correct
  if (day > monthOfYear[month - 1]) {
    document.getElementById('dayMsg').innerHTML = 'Must be a valid day';
    document.getElementById('day').className = 'invalid';
    setTitleError();
    return;
  }

  if (year > new Date().getFullYear()) {
    document.getElementById('yearMsg').innerHTML = 'Must be in the past';
    document.getElementById('year').className = 'invalid';
    setTitleError();
    return;
  }

  if (dob > today) {
    document.getElementById('dayMsg').innerHTML = 'Must be in the past';
    document.getElementById('day').className = 'invalid';
    setTitleError();
    return;
  }

  if (anyValidationError()) return;

  clearInnerHTML();
  resetTitleError();

  // caculate age
  let yearDiff = today.getFullYear() - dob.getFullYear();
  let monthDiff = today.getMonth() - dob.getMonth();
  let dateDiff = today.getDate() - dob.getDate();

  if (dateDiff < 0) {
    dateDiff = dateDiff + monthOfYear[month - 1];
    monthDiff = monthDiff - 1;
  }

  if (monthDiff < 0) {
    monthDiff = monthDiff + 12;
    yearDiff = yearDiff - 1;
  }

  document.getElementById('years').innerHTML = yearDiff;
  document.getElementById('months').innerHTML = monthDiff;
  document.getElementById('days').innerHTML = dateDiff;
}

//helper functions

function setTitleError() {
  const elements = document.querySelectorAll('.title');
  elements.forEach((element) =>
    element.classList.replace('title', 'title-red')
  );
}

function resetTitleError() {
  const elements = document.querySelectorAll('.title-red');
  elements.forEach((element) =>
    element.classList.replace('title-red', 'title')
  );
}

function anyValidationError() {
  return document.querySelectorAll('.invalid').length == 0 ? false : true;
}

function resetResult() {
  document.getElementById('years').innerHTML = '--';
  document.getElementById('months').innerHTML = '--';
  document.getElementById('days').innerHTML = '--';
}

function checkEmptyInputs() {
  let result = false;
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      document.getElementById(input.id + 'Msg').innerHTML =
        'This field is required';
      input.className = 'invalid';
      setTitleError();
      result = true;
    }
  });
  return result;
}

function clearInnerHTML() {
  document.getElementById('dayMsg').innerHTML = '';
  document.getElementById('monthMsg').innerHTML = '';
  document.getElementById('yearMsg').innerHTML = '';
}
