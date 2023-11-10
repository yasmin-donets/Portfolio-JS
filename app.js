// data
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

//Adding event listener to DOM LOAD
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




