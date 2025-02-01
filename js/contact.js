// Initialize EmailJS
emailjs.init("5EVnD_MbpXgJouWvF");

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Mengirim...';
  submitBtn.disabled = true;

  const templateParams = {
    from_name: this.name.value,
    from_email: this.email.value,
    subject: this.subject.value,
    message: this.message.value
  };

  emailjs.send('service_cbbhybf', 'template_nswxov7', templateParams)
    .then(() => {
      alert('Pesan berhasil dikirim!');
      this.reset();
    })
    .catch((error) => {
      alert('Gagal mengirim pesan. Silakan coba lagi.');
      console.error('Error:', error);
    })
    .finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
});