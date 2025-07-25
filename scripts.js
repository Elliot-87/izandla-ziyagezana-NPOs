    document.addEventListener("DOMContentLoaded", function () {
      const backToTopButton = document.getElementById('backToTop');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      });

      backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const icon = this.querySelector('i');
        icon.classList.add('animate-ping');
        setTimeout(() => {
          icon.classList.remove('animate-ping');
        }, 1000);
      });
    });
   document.addEventListener('DOMContentLoaded', function() {
  // Slider elements
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;
  const slideDuration = 5000; // 5 seconds

  // Initialize slider
  function initSlider() {
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === 0) {
        slide.classList.add('active');
      }
    });
    
    // Update dots
    updateDots();
    
    // Start auto-sliding
    startSlider();
  }

  // Show specific slide
  function showSlide(index) {
    // Wrap around if at ends
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    // Show current slide with fade effect
    slides[currentSlide].classList.add('active');
    
    // Update dots
    updateDots();
  }

  // Update dot indicators
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.remove('bg-amber-300/50');
        dot.classList.add('bg-amber-300');
      } else {
        dot.classList.remove('bg-amber-300');
        dot.classList.add('bg-amber-300/50');
      }
    });
  }

  // Start auto-sliding
  function startSlider() {
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, slideDuration);
  }

  // Reset auto-slide timer
  function resetInterval() {
    clearInterval(slideInterval);
    startSlider();
  }

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      showSlide(slideIndex);
      resetInterval();
    });
  });

  // Optional: Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      showSlide(currentSlide - 1);
      resetInterval();
    } else if (e.key === 'ArrowRight') {
      showSlide(currentSlide + 1);
      resetInterval();
    }
  });

  // Initialize the slider
  initSlider();
});
//About Learn More Button
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const cards = document.getElementById('programCards');
    const btn = this;
    
    if (cards.classList.contains('hidden')) {
        cards.classList.remove('hidden');
        cards.classList.add('grid');
        btn.innerHTML = 'Show Less <i class="fas fa-arrow-up ml-2"></i>';
    } else {
        cards.classList.add('hidden');
        cards.classList.remove('grid');
        btn.innerHTML = 'Learn More About Our Programs <i class="fas fa-arrow-right ml-2"></i>';
    }
});
//Join Us Logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteer-form');
    const whatsappBtn = document.getElementById('whatsappSubmit');
    const emailBtn = document.getElementById('emailSubmit');
    
    // WhatsApp Integration
    whatsappBtn.addEventListener('click', function() {
        const name = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const interests = document.getElementById('interests').value;
        const message = document.getElementById('message').value;
        
        const whatsappNumber = '27629174966'; // Your WhatsApp number with country code (no + or 0)
        const text = `New Volunteer Application:%0A%0AName: ${name}%0APhone: ${phone}%0AInterests: ${interests}%0AMessage: ${message}`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    });
    
    // Email Integration
    emailBtn.addEventListener('click', function() {
        const name = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const interests = document.getElementById('interests').value;
        const message = document.getElementById('message').value;
        
        const emailAddress = 'info@izandlaziyagezana.org'; // Your organization email
        const subject = `New Volunteer Application: ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AInterests: ${interests}%0A%0AMessage:%0A${message}`;
        
        window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    });
});
//Join Us WhatsApp Link
document.getElementById('whatsappSubmit').addEventListener('click', function() {
    // Format: remove leading 0, add South Africa country code (27)
    const whatsappNumber = '27719174966'; // 0719174966 → 27719174966
    
    // Default message (can be customized)
    const defaultMessage = "Hello Izandla Ziyagezana NPO! I'm interested in volunteering and would like more information.";
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
});
//Join Us Email Link
document.getElementById('emailSubmit').addEventListener('click', function() {
    // Your actual email address
    const emailAddress = 'izandlaziyagezana178@gmail.com'; // Replace with your real email
    
    // Email subject and body (customizable)
    const subject = 'Volunteer Inquiry';
    const body = `Dear Izandla Ziyagezana Team,\n\nI'm interested in volunteering and would like more information about:\n\n- [Your areas of interest]\n- [Available time commitment]\n- [Any special skills]\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]`;
    
    // Open default email client
    window.open(`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
});

    document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const navButtons = document.querySelectorAll('.testimonial-nav');
    let currentIndex = 0;
    let interval;

    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
        testimonial.classList.toggle('inactive', i !== index);
      });

      navButtons.forEach((button, i) => {
        button.classList.toggle('opacity-100', i === index);
        button.classList.toggle('w-4', i === index);
        button.classList.toggle('opacity-50', i !== index);
        button.classList.toggle('w-3', i !== index);
      });
    }

    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }

    // Initialize
    showTestimonial(0);
    interval = setInterval(nextTestimonial, 8000);

    // Navigation buttons
    navButtons.forEach(button => {
      button.addEventListener('click', () => {
        currentIndex = parseInt(button.dataset.index);
        showTestimonial(currentIndex);
        clearInterval(interval);
        interval = setInterval(nextTestimonial, 8000);
      });
    });

    // Pause on hover
    const container = document.querySelector('.testimonial-container');
    container.addEventListener('mouseenter', () => clearInterval(interval));
    container.addEventListener('mouseleave', () => {
      interval = setInterval(nextTestimonial, 8000);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.testimonial-container ~ div button'); // Adjusted selector for your navigation dots
  const slideInterval = 3000; // 3 seconds between slides

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('opacity-0', i !== index);
      slide.classList.toggle('scale-95', i !== index);
    });
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-white/80', i === index);
      dot.classList.toggle('bg-white/30', i !== index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initialize
  let slideTimer = setInterval(nextSlide, slideInterval);

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
      clearInterval(slideTimer);
      slideTimer = setInterval(nextSlide, slideInterval);
    });
  });
});
