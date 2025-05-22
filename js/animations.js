// Scroll-triggered animations
const addAnimationClasses = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements) {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementPosition < window.innerHeight && elementBottom > 0;
            
            if (isVisible) {
                element.classList.add('animate');
            }
        });
    }
};

// Initialize animations and add scroll event listeners
addAnimationClasses();
window.addEventListener('scroll', addAnimationClasses);
window.addEventListener('load', addAnimationClasses);
