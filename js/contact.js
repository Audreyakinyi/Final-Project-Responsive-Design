// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { email, message });
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}
