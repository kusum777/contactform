function validateName(input) {
  const errorSpan = document.getElementById('nameError');
  if (!input.checkValidity()) {
    input.classList.add('invalid-input');
    errorSpan.textContent = 'Invalid input.';
  } else {
    input.classList.remove('invalid-input');
    errorSpan.textContent = '';
  }
  validateForm();
}

function validateEmail(input) {
  const errorSpan = document.getElementById('emailError');
  if (!input.checkValidity()) {
    input.classList.add('invalid-input');
    errorSpan.textContent = 'Invalid input.';
  } else {
    input.classList.remove('invalid-input');
    errorSpan.textContent = '';
  }
  validateForm();
}

function validateMessage(input) {
  const errorSpan = document.getElementById('messageError');
  if (!input.checkValidity()) {
    input.classList.add('invalid-input');
    errorSpan.textContent = 'Invalid input.';
  } else {
    input.classList.remove('invalid-input');
    errorSpan.textContent = '';
  }
  validateForm();
}

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitButton = document.getElementById('submitButton');

  const isFormValid = nameInput.checkValidity() && emailInput.checkValidity() && messageInput.checkValidity();

  if (isFormValid) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }

  return isFormValid;
}

