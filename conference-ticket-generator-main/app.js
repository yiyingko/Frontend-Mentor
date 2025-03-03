/*image uploader*/
const dropArea = document.getElementById('drop-area');
const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('image-view');
const dropAreaText = document.querySelector('.drop-area-text');
const altBtns = document.querySelectorAll('.alt-btn');
const uploadIcon = document.getElementById('upload-icon');
const removeBtn = document.getElementById('remove-button');

/*validation*/
const inputs = document.querySelectorAll('input');
const infoMsg = document.querySelector('.info-msg');
const imgInfo = document.querySelector('.img-info');
const infoIcon = document.querySelector('.info-icon');
const infoIconErr = document.querySelector('.info-icon-err');

/*ticket generation*/
const submit = document.querySelector('.submit');
const form = document.querySelector('.main-container');
const ticket = document.querySelector('.ticket-container');
const h1Name = document.querySelector('.h1-name');
const visitorName = document.getElementById('name');
const pEmail = document.querySelector('.p-email');
const email = document.getElementById('email');
const ticketName = document.querySelector('.visitor-name');
const githubName = document.querySelector('.github-account');
const github = document.getElementById('github');
const visitorPhoto = document.querySelector('.visitor-photo');
const ticketNumber = document.querySelector('.ticket-number');

/*image upload*/
inputFile.addEventListener('change', showImg);

function showImg() {
  const allowedTypes = ['image/jpeg', 'image/png'];
  const file = inputFile.files[0];

  if (file.size > 500 * 1024) {
    // 500KB in bytes
    infoMsg.innerHTML = 'File too large.PLease upload a file under 500KB';
    imgInfo.style.color = 'hsl(7, 88%, 67%)';
    infoIcon.classList.add('hidden');
    infoIconErr.classList.remove('hidden');
    inputFile.value = '';
    return;
  }

  if (!allowedTypes.includes(file.type)) {
    infoMsg.innerHTML = 'Invalid file type. Only JPEG, PNG are allowed.';
    imgInfo.style.color = 'hsl(7, 88%, 67%)';
    infoIcon.classList.add('hidden');
    infoIconErr.classList.remove('hidden');
    inputFile.value = '';
    return;
  }

  let imgLink = URL.createObjectURL(file);
  imgView.style.backgroundImage = `url(${imgLink})`;
  uploadIcon.hidden = true;
  dropAreaText.innerHTML = '';
  Array.from(altBtns).map((el) => el.classList.remove('display-none'));
  localStorage.setItem('imgLink', `url(${imgLink})`); //sotre img for the ticket page
  infoMsg.innerHTML = 'Upload your photo (JPG or PNG, max size: 500KB)';
  imgInfo.style.color = 'hsl(252, 6%, 83%)';
  infoIcon.classList.remove('hidden');
  infoIconErr.classList.add('hidden');
  checkImgInput();
}

dropArea.addEventListener('dragover', function (e) {
  e.preventDefault();
});

dropArea.addEventListener('drop', function (e) {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  showImg();
});

function removeImg() {
  inputFile.value = '';
  imgView.style.backgroundImage = '';
  uploadIcon.hidden = false;
  dropAreaText.innerHTML = 'Drag and drop or click to upload';
  Array.from(altBtns).map((el) => el.classList.add('display-none'));
}

/*form validation*/

const patterns = {
  name: /^[a-zA-Z\-\s]+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, //yourname @ domain.com(.uk)
  github: /^@([A-Za-z0-9-]{1,39})(?!-)(?!.*--)[A-Za-z0-9-]{1,39}$/,
};
/*Github can only contain alphanumeric characters and dashes ( - ) Github username cannot have multiple consecutive hyphens.
 Github username cannot begin or end with a hyphen. Maximum is 39 characters.*/

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
    document.getElementById(field.id + 'Msg').classList.add('hidden');
  } else {
    field.className = 'invalid';
    document.getElementById(field.id + 'Msg').classList.remove('hidden');
  }
}

inputs.forEach((input) => {
  input.value = '';
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

/*ticket generation*/
submit.addEventListener('click', function (event) {
  if (checkEmptyInputs() || anyValidationError()) {
    return;
  } else {
    h1Name.innerHTML = visitorName.value;
    pEmail.innerHTML = email.value;
    ticketName.innerHTML = visitorName.value;
    githubName.innerHTML = github.value;
    visitorPhoto.style.backgroundImage = localStorage.getItem('imgLink');
    ticketNumber.innerHTML = `#${getRandomFiveDigit()}`;
    form.classList.add('hidden');
    ticket.classList.remove('hidden');
  }
});

function anyValidationError() {
  return document.querySelectorAll('.invalid').length == 0 ? false : true;
}

function checkEmptyInputs() {
  let result = false;
  inputs.forEach((input) => {
    if (input.value.trim().length == 0) {
      input.className = 'invalid';
      result = true;
    }
  });
  return result;
}

function checkImgInput() {
  return inputFile.value.trim().length == 0
    ? (inputFile.className = 'invalid')
    : (inputFile.className = 'valid');
}

function getRandomFiveDigit() {
  return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
}

ticket.addEventListener('click', function () {
  ticket.classList.add('hidden');
  form.classList.remove('hidden');
  removeImg();
  inputs.forEach((input) => {
    input.value = '';
  });
});
