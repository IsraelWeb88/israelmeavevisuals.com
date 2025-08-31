document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const statusEl = document.getElementById('status');
    statusEl.textContent = 'Sending...';

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        statusEl.textContent = 'Message sent successfully!';
        document.getElementById('contactForm').reset();
      } else {
        statusEl.textContent = result.error || 'Something went wrong. Please try again.';
      }
    } catch (error) {
      statusEl.textContent = 'Unable to send message. Please try again later.';
    }

    
  });