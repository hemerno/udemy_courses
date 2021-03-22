document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  feedback(document.getElementById('name'));
}

function validateZip() {
  feedback(document.getElementById('zipcode'));
}

function validateEmail() {
  feedback(document.getElementById('email'));
}

function validatePhone() {
  feedback(document.getElementById('phone'));
}

function feedback(element) {
  if (!validate(element).test(element.value)) {
    element.classList.add('is-invalid');
  } else {
    element.classList.remove('is-invalid');
  }
}

function validate(element) {
  switch (element.id) {
    case 'name':
      return /^[a-zA-Z]{2,10}$/;

    case 'zipcode':
      return /^[0-9]{6}(-[0-9]{2})?$/;

    case 'email':
      return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)$/;

    case 'phone':
      return /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{2}[-. ]?$/;

    default:
      console.log('No such ID');
      break;
  }
}
