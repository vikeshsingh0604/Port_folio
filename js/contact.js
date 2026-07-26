// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address', 'error');
            return;
        }
        
        // Validate message length
        if (message.trim().length < 10) {
            showMessage('Please enter a message with at least 10 characters', 'error');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        console.log('Form Data:', {
            fullName,
            email,
            subject,
            message
        });
        
        // Show success message
        showMessage('Thank you for your message! I will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Optional: You can send the form data to a backend service here
        // Example using fetch:
        /*
        fetch('your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName,
                email,
                subject,
                message
            })
        })
        .then(response => response.json())
        .then(data => {
            showMessage('Message sent successfully!', 'success');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Error sending message. Please try again.', 'error');
        });
        */
    });
}

// Show message function
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Auto hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = '';
    }, 5000);
}

// Show/Hide Contacts
const showContactsBtn = document.getElementById('showContactsBtn');
const contactsBox = document.getElementById('contactsBox');

if (showContactsBtn) {
    showContactsBtn.addEventListener('click', function() {
        contactsBox.classList.toggle('show');
        showContactsBtn.textContent = contactsBox.classList.contains('show') ? 'Hide Contacts' : 'Show Contacts';
    });
}
