document.addEventListener('DOMContentLoaded', function() {
  const oregonForm = document.getElementById('contactForm');
  oregonForm.addEventListener('submit', function(event) {
    const enteredEmail = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    
    if (enteredEmail !== confirmEmail) {
      alert("Email addresses must match.");
      event.preventDefault();
    } else {
      alert("Form submitted we'll respond within 1-3 business days.");
    }
  });
});
