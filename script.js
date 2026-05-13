// Welcome message

console.log("Welcome to Sonia Fiona's Portfolio");

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// Navbar shadow effect

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.4)";

    } else {

        nav.style.boxShadow = "none";

    }

});
