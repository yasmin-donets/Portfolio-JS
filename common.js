// Show Menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
// menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
// hide menu show
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// remove menu in mobile vers
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLinks.forEach((link) => link.addEventListener('click', linkAction));
// scrollHeader

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// receive email with  EMAIl JS
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');
const navLink = document.querySelectorAll('.nav__link');

const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ) {
    //and and remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');
    //show message
    contactMessage.textContent = 'Fill all inputs fields';
  } else {
    //serviceID - template
    emailjs
      .sendForm(
        'service_6rwkr0h',
        'template_iqlesir',
        '#contact-form',
        'Tvbl6CRVtPn6hqi4Y'
      )
      .then(
        () => {
          //show message and add color,window + dot to open emojii
          contactMessage.classList.add('.color-light');
          contactMessage.textContent = 'Message sent ✔️';
          //remove message
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('OOPs! Something went wrong...', error);
        }
      );
    contactName.value = '';
    contactEmail.value = '';
    Message.value = '';
  }
};
contactForm.addEventListener('submit', sendEmail);

// Active Link add class function
function activeLink() {
  navLink.forEach((link) => {
    link.classList.remove('active-link');
  });
  this.classList.add('active-link');
}
navLink.forEach((a) => a.addEventListener('click', activeLink));
