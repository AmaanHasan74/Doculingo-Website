document.getElementById('waitlist-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const message = document.querySelector('.form-message');
  const emailInput = this.querySelector('input');

  if (emailInput.value.includes('@')) {
    message.textContent = 'Thank you for joining the waitlist!';
    emailInput.value = '';
  } else {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = 'red';
  }
});


