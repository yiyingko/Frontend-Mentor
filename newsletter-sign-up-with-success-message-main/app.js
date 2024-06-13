const submit = document.querySelector('.submit');
const container = document.querySelector('.form-wrapper');
const container2 = document.querySelector('.message');
const email = document.querySelector('#email');
const eValue = document.getElementById('email-value');
const msg = document.getElementById('msg');

const patterns = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, //yourname @ domain.com(.uk)
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
    msg.classList.add('hidden');
  } else {
    field.className = 'invalid';
    msg.classList.remove('hidden');
  }
}

email.addEventListener('keyup', (e) => {
  validate(e.target, patterns[e.target.attributes.name.value]);
});

function swapPage() {
  if (anyValidationError()) return;
  eValue.innerHTML = email.value;
  container.classList.add('hidden');
  container2.classList.remove('hidden');
}

function dissMissMsg() {
  container2.classList.add('hidden');
  container.classList.remove('hidden');
  email.value = '';
}

function anyValidationError() {
  return document.querySelectorAll('.invalid').length == 0 ? false : true;
}
