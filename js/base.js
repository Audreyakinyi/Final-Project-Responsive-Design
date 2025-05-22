// Utility functions and core functionality

// Smooth scrolling helper function
const scrollToElement = (elementId) => {
    const targetElement = document.querySelector(elementId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
        });
    }
};

// Export utility functions
export { scrollToElement };
