// Testimonials Slider functionality
class TestimonialsSlider {
    constructor() {
        this.slider = document.querySelector('.testimonial-cards');
        this.navPrev = document.querySelector('.nav-prev');
        this.navNext = document.querySelector('.nav-next');
        this.cardWidth = 290; // Width of each card
        this.cardGap = 1.5 * 16; // Gap between cards (1.5rem converted to pixels)
        this.totalCards = document.querySelectorAll('.testimonial-card').length;
        this.currentSlide = 0;
        this.isAutoSliding = true;
        this.autoSlideInterval = null;
        this.setupEventListeners();
        this.startAutoSlide();
        
        // Calculate and set the width of the slider container
        const container = this.slider.parentElement;
        container.style.width = `${this.cardWidth * 2 + this.cardGap}px`; // 2 cards + gap
        
        // Calculate the total width of all cards
        const totalWidth = this.totalCards * (this.cardWidth + this.cardGap) - this.cardGap;
        this.slider.style.width = `${totalWidth}px`;
    }

    setupEventListeners() {
        this.navPrev.addEventListener('click', () => this.prevSlide());
        this.navNext.addEventListener('click', () => this.nextSlide());
        
        // Pause auto slide on hover
        this.slider.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSliderPosition();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalCards - 2) { // -2 because we show 2 cards at a time
            this.currentSlide++;
            this.updateSliderPosition();
        }
    }

    updateSliderPosition() {
        const position = -this.currentSlide * (this.cardWidth + this.cardGap);
        this.slider.style.transform = `translateX(${position}px)`;
        
        // Add transition for smooth sliding
        this.slider.style.transition = 'transform 0.5s ease';
    }

    startAutoSlide() {
        if (!this.isAutoSliding) return;
        
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
            // Reset to start after last pair
            if (this.currentSlide === this.totalCards - 2) {
                this.currentSlide = 0;
                this.updateSliderPosition();
            }
        }, 5000); // Change slide every 5 seconds
    }

    pauseAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialsSlider();
});
