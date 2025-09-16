
document.getElementById('toggleNav').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  const status = document.getElementById('form-status');
  status.textContent = 'Sending message...';

  setTimeout(() => {
    status.textContent = 'Message sent successfully!';
    this.reset();
  }, 1500);
});
function toggleNavbar() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedback-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = "Thank you for your feedback!";
    form.reset();
    setTimeout(() => status.textContent = "", 4000);
  });
});

  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const feedback = this.querySelector('textarea').value.trim();

    if (!name || !email || !feedback) {
      alert('Please fill in all fields.');
      return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    
    this.reset();

    
    alert('Thank you for your feedback!');

    

  });
  const images = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });

    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      lightboxImg.src = '';
      lightboxImg.alt = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        lightboxImg.alt = '';
      }
    });


