// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
const navbar = document.getElementById("heronav");
const mainNav = document.getElementById("navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.scrollY >= sticky) {
		mainNav.classList.add("sticky")
	} else {
		mainNav.classList.remove("sticky");
	}
}

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function (e) {
	e.preventDefault();

	if (nav.classList.contains('open')) { // Close Hamburger Menu
		body.classList.remove('noscroll');
		nav.classList.remove('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});

	}
	else { // Open Hamburger Menu
		body.classList.add('noscroll');
		nav.classList.add('open');
		fadeElems.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

const menuLinks = document.querySelectorAll('.navigation__links, .nav__menu > a')
menuLinks.forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (nav.classList.contains('open')) document.getElementById('btnHamburger').click();
		let targetElem = document.querySelector(e.target.getAttribute('href'));
		let scrollDepth = targetElem.getBoundingClientRect().top + window.scrollY - 80;
		window.scrollTo({
			top: scrollDepth,
			left: 0,
			behavior: "smooth",
		  });
	});
});