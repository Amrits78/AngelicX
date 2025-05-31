document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const toggleButton = document.querySelector('.carousel-button');
    const items = document.querySelectorAll('.carousel-item');

    const itemsToShow = 5; // Number of items visible in web mode
    const totalItems = items.length;
    const totalSets = Math.ceil(totalItems / itemsToShow); // Total sets of items
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -(currentIndex * 100); // Move carousel by 100% for each set
        carousel.style.transform = `translateX(${offset}%)`;

        // Update button content and position
        if (currentIndex === 0) {
            toggleButton.textContent = '›'; // Next arrow
            toggleButton.classList.remove('prev');
            toggleButton.classList.add('next');
        } else if (currentIndex === totalSets - 1) {
            toggleButton.textContent = '‹'; // Prev arrow
            toggleButton.classList.remove('next');
            toggleButton.classList.add('prev');
        }
    }

    toggleButton.addEventListener('click', () => {
        if (toggleButton.classList.contains('next')) {
            // Move to next set (6–10)
            if (currentIndex < totalSets - 1) {
                currentIndex++;
            }
        } else if (toggleButton.classList.contains('prev')) {
            // Move to previous set (1–5)
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
});







let slideIndex = 0;
const slideshowTrack = document.querySelector(".slideshow-track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWidth = 100; // Width of each slide in vw
const transitionSpeed = 1000; // 1 second transition

function nextSlide() {
    slideIndex++;

    // Move to the next slide
    slideshowTrack.style.transition = `transform ${transitionSpeed}ms ease-in-out`;
    slideshowTrack.style.transform = `translateX(-${slideIndex * slideWidth}vw)`;

    // If it's the last (cloned) slide, reset without transition
    if (slideIndex === totalSlides - 1) {
        setTimeout(() => {
            slideshowTrack.style.transition = "none"; // Remove animation
            slideIndex = 0; // Reset to real first slide
            slideshowTrack.style.transform = `translateX(0)`;
        }, transitionSpeed);
    }
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);














// FAQ Section Toggle
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle answer visibility
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                question.innerHTML = question.innerHTML.replace('▲', '▼');
            } else {
                answer.style.display = 'block';
                question.innerHTML = question.innerHTML.replace('▼', '▲');
            }
        });
    });
});

// Add Numbering to Carousel Items
document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');

    carouselItems.forEach((item, index) => {
        const number = document.createElement('span');
        number.className = 'item-number';
        number.textContent = index + 1; // Numbers start from 1
        item.appendChild(number);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const waitlistForms = document.querySelectorAll('#get-started-form');

    waitlistForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form from actually submitting
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email) {
                // You can add your email validation or API call here if needed
                window.location.href = 'Thanks/index.html'; // Redirect to thank you page
            }
        });
    });
});
