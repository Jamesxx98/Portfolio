document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();
  
  // Clear previous error messages
  let errorMessage = form.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }

  // Simple email regex validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!name) {
    showError("Please enter your name.");
    e.preventDefault();  // Prevent form submission
  } else if (!email || !emailPattern.test(email)) {
    showError("Please enter a valid email address.");
    e.preventDefault();
  } else if (!message) {
    showError("Please enter a message.");
    e.preventDefault();
  }

  // Function to display error messages
  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.style.color = 'red';
    errorDiv.textContent = message;
    form.insertBefore(errorDiv, form.firstChild);
  }
});
