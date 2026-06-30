// 1. Mobile Menu Logic (Responsive Hamburger Menu)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if(navLinks.classList.contains('active')){
        hamburger.innerHTML = '<i class="fas fa-times"></i>'; // 'X' close icon
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Menu bars
    }
});

// Close Mobile Menu automatically when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// 2. Navbar Scrolling Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)'; 
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.8)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.85)';
        header.style.boxShadow = 'none';
    }
});

// 3. Working Contact Form -> Send to WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp Message format
    const whatsappMessage = `Hello Code Nova Tech! 🚀%0A%0A*New Project Enquiry:*%0A👤 Name: ${name}%0A📧 Email: ${email}%0A💼 Service Required: ${service}%0A📝 Message: ${message}`;

    // WhatsApp Number (with 91 for India)
    const whatsappNumber = "919084711324"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Clear the form fields after sending
    document.getElementById('contactForm').reset();
});

// 4. Particles.js Animation Logic (Network Nodes Effect)
if(document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 70, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00a8ff" }, // Your Blue Color
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00a8ff",
          "opacity": 0.3,
          "width": 1
        },
        "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "grab" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 150, "line_linked": { "opacity": 0.8 } },
          "push": { "particles_nb": 4 }
        }
      },
      "retina_detect": true
    });
}
