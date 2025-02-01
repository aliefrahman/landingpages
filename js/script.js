// Smooth scroll ke bagian Fitur saat tombol ditekan
document.getElementById('learn-more').addEventListener('click', function() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Menu Toggle dan Mobile Menu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Update copyright tahun
const updateCopyright = () => {
  const yearElement = document.getElementById('current-year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
};

// memanggil function saat DOM loads
document.addEventListener('DOMContentLoaded', updateCopyright);

// Detail Modal
document.addEventListener('DOMContentLoaded', () => {
  const detailBtns = document.querySelectorAll('.detail-btn');
  const modals = document.querySelectorAll('.modal');
  const closeBtns = document.querySelectorAll('.close-modal');

  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
});



// Initialize EmailJS
emailjs.init("5EVnD_MbpXgJouWvF");

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show loading state
  const submitBtn = this.querySelector('.submit-btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Mengirim...';
  submitBtn.disabled = true;

  // Get form data
  const templateParams = {
    from_name: this.name.value,
    from_email: this.email.value,
    subject: this.subject.value,
    message: this.message.value
  };

  // Send email using EmailJS
  emailjs.send('service_cbbhybf', 'template_4aacpup', templateParams)
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