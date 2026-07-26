// Show/Hide Contacts
const showContactsBtn = document.getElementById('showContactsBtn');
const contactsBox = document.getElementById('contactsBox');

if (showContactsBtn) {
    showContactsBtn.addEventListener('click', function() {
        contactsBox.classList.toggle('show');
        showContactsBtn.textContent = contactsBox.classList.contains('show') ? 'Hide Contacts' : 'Show Contacts';
    });
}

// Section Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        
        // Remove active class from all buttons and sections
        navButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked button and corresponding section
        this.classList.add('active');
        document.getElementById(sectionId).classList.add('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and education items
document.querySelectorAll('.skill-card, .education-item, .experience-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
