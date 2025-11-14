/* Toggle Mobile Menu */
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const icon = document.querySelector('.menu-toggle i');

    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

/* Close mobile menu when clicking on a link */
function closeMenuOnNavClick() {
    const navbar = document.getElementById('navbar');
    const icon = document.querySelector('.menu-toggle i');
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

/* Scroll to Top Function */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* Show/Hide Scroll to Top Button */
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    }
});

/* Make Logo Clickable - Navigate to Home */
document.addEventListener('DOMContentLoaded', function() {
    closeMenuOnNavClick();
    
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            const currentPath = window.location.pathname;
            
            if (currentPath.includes('home.html')) {
                scrollToTop();
            } else {
                window.location.href = '../home/home.html';
            }
        });
    }

    setActiveNavLink();
});

/* Set Active Navigation Link */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navbar a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        link.classList.remove('active');
        
        if (currentPath.includes('home.html') && linkPath.includes('home.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('about.html') && linkPath.includes('about.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('contact.html') && linkPath.includes('contact.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('blog.html') && linkPath.includes('blog.html')) {
            link.classList.add('active');
        } else if (currentPath.includes('careers.html') && linkPath.includes('careers.html')) {
            link.classList.add('active');
        }
    });
}