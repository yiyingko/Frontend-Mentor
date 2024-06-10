//validation before submit

const inputs = document.querySelectorAll('input');
const msgs = document.querySelectorAll('.msg');

const patterns = {
  firstName: /^[a-z\d\-]{1,50}$/i,
  lastName: /^[a-z\d\-]{1,50}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, //yourname @ domain.com(.uk)
  password: /^[\d\w@-]{4,20}$/i, //alphanumeric (@, _ and - are also allowed) and be 1 - 20 characters
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
    document.getElementById(field.id + 'Msg').innerHTML = '';
  } else if ((field.className = 'invalid' && field.id === 'email')) {
    field.className = 'invalid';
    document.getElementById(field.id + 'Msg').innerHTML =
      'Looks like this is not an email';
    setMsgError();
  } else if ((field.className = 'invalid' && field.id === 'password')) {
    field.className = 'invalid';
    document.getElementById(field.id + 'Msg').innerHTML =
      'Between 4-20 characters';
    setMsgError();
  } else {
    field.className = 'invalid';
    document.getElementById(field.id + 'Msg').innerHTML =
      field.id + 'can not be empty';
    setMsgError();
  }
}

inputs.forEach((input) => {
  input.value = '';
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// submit function

function submitTrial() {
  document.getElementById('form').classList.remove('form-invalid');
  if (checkEmptyInputs() || anyValidationError()) {
    document.getElementById('form').className += ' form-invalid';
    return;
  }

  window.alert('Enjoy your free trail!');
  resetInput();
}

//helper functions
function checkEmptyInputs() {
  let result = false;
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      document.getElementById(input.id + 'Msg').innerHTML =
        input.id + ' can not be empty';
      input.className = 'invalid';
      setMsgError();
      result = true;
    }
  });
  return result;
}

function anyValidationError() {
  return document.querySelectorAll('.invalid').length == 0 ? false : true;
}

function setMsgError() {
  const elements = document.querySelectorAll('.empty');
  elements.forEach((element) => element.classList.replace('empty', 'error'));
}

function resetInput() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}
