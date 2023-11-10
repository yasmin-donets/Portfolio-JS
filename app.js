// values
const projects = [
  {
    id: 1,
    title: 'web-sites',
    category: 'web-sites',
    img: './images/item-1.jpeg',
    desc: `My project is a user-friendly web application that provides real-time weather information for any desired location. With seamless integration of OpenWeatherMap API. An intuitive interface ensures a smooth user experience, making staying informed about weather conditions a hassle-free task. Built With : HTML & CSS Javascript OpenWeatherMap API`,
  },
  {
    id: 2,
    img: './images/project-1.png',
    title: 'web-apps',
    category: 'web-apps',
    img: './images/item-1.jpeg',
    desc: `My project is a user-friendly web application that provides real-time weather information for any desired location. With seamless integration of OpenWeatherMap API. An intuitive interface ensures a smooth user experience, making staying informed about weather conditions a hassle-free task. Built With : HTML & CSS Javascript OpenWeatherMap API`,
  },
  {
    id: 3,
    img: './images/project-1.png',
    title: 'landing',
    category: 'landing',
    img: './images/item-1.jpeg',
    desc: `My project is a user-friendly web application that provides real-time weather information for any desired location. With seamless integration of OpenWeatherMap API. An intuitive interface ensures a smooth user experience, making staying informed about weather conditions a hassle-free task. Built With : HTML & CSS Javascript OpenWeatherMap API`,
  },
];

// selecting elements

const projectContainer = document.querySelector('.project__container');
const categoryBtns = document.querySelectorAll('.category__btn');

//Adding event listener
window.addEventListener('DOMContentLoaded', function () {
  displayProjects(projects);
});

// display Projects
function displayProjects(projectItems) {
  let displayItems = projectItems
    .map((item) => {
      return `
<div class="project__item grid">
	<img src="./images/project-1.png" alt="" class="project__img" />
	<div class="project__data">
		<h3 class="project__title text-lg">${item.title}</h3>
		<p class="project__description">
			${item.desc}
		</p>
		<h4 class="project__stack text-xs">USEd STACK</h4>
		<ul class="tags text-sm">
			<li>html5</li>
			<li>css</li>
			<li>JavaScript</li>
			<li>BEM</li>
			<li>API</li>
			<li>React</li>
		</ul>
		<a href="" class="project__link text-sm"
			>https://remixicon.com/icon/download-line</a
		>
	</div>
</div>
`;
    })
    .join('');
  projectContainer.innerHTML = displayItems;
}

// function filter and add active-work

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const filterCategory = e.currentTarget.dataset.filter;
    // Remove 'active-work' class from all buttons
    categoryBtns.forEach((button) => {
      button.classList.remove('active-work');
    });

    // Add 'active-work' class to the clicked button
    btn.classList.add('active-work');

    // Filter projects based on the selected category
    const filteredProjects =
      filterCategory === 'all'
        ? projects
        : projects.filter(
            (projectItem) => projectItem.category === filterCategory
          );

    // Display the filtered projects
    displayProjects(filteredProjects);
  });
});

// EMAIl JS

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

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
    contactMessage.textContent = 'Write all the input fields';
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

// Background header

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);
