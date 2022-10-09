const mobileMenu = document.getElementById('mobile-navigation-menu');
const navBtn = document.getElementById('nav-btn');

const toggleMenu = () => {
	mobileMenu.classList.toggle('flex');
	mobileMenu.classList.toggle('hidden');
	navBtn.classList.toggle('toggle-btn');
};

const mainNavLinks = [
	['Our Rockets', 'rockets'],
	['Testimonials', 'testimonials'],
	['Contact Us', 'contacts'],
];

const renderMainNavLinks = arr => {
	const navBar = document.getElementById('main-nav');
	const markup = arr
		.map(
			([title, href]) => `
			<a href="#${href}" class="relative transition-all w-max py-4 after:absolute after:-left-2 after:bottom-0 after:w-0 after:border-b-2 after:border-solid after:border-b-teal-300 after:opacity-0 after:transition-all after:duration-500 hover:text-sky-200 hover:after:w-full hover:after:translate-x-2 hover:after:opacity-100">${title}</a>`,
		)
		.join('');
	navBar.insertAdjacentHTML('afterbegin', markup);
};

const mobileNavLinks = [
	['Home', 'hero'],
	['Our Rockets', 'rockets'],
	['Testimonials', 'testimonials'],
	['Contact Us', 'contacts'],
	['Legal', 'footer'],
];

const renderMobMenuLinks = arr => {
	const mobNavBar = document.getElementById('mobile-nav');
	const markup = arr
		.map(
			([title, href]) => `
			<a href="#${href}" class="relative transition-all w-max py-4 after:absolute after:-left-2 after:bottom-0 after:w-0 after:border-b-2 after:border-solid after:border-b-teal-300 after:opacity-0 after:transition-all after:duration-500 hover:text-sky-200 hover:after:w-full hover:after:translate-x-2 hover:after:opacity-100">${title}</a>`,
		)
		.join('');
	mobNavBar.insertAdjacentHTML('afterbegin', markup);
};

function init() {
	renderMainNavLinks(mainNavLinks);
	renderMobMenuLinks(mobileNavLinks);

	navBtn.onclick = toggleMenu;

	mobileMenu.onclick = () => {
		mobileMenu.classList.add('animate-close-menu');
		setTimeout(() => {
			mobileMenu.classList.remove('animate-close-menu');
			toggleMenu();
		}, 500);
	};
}

init();
