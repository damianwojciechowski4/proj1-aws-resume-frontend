document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const form = e.target;
      if (form.checkValidity()) {
        // Replace with AJAX or Email API integration
        alert(`Thank you, ${form.name.value}! Your message has been sent.`);
        form.reset();
      }
    });