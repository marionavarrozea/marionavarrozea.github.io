// Header and Scroll Button behavior
const nav = document.getElementById('main-nav');
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener('scroll', function() {
    // Show/hide scroll to top button based on depth
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
    
    // Telemetry Scroll Progress Bar Calculation
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("telemetryBar").style.width = scrolled + "%";
});

// Click to scroll to top
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for Scroll Reveals
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Close mobile menu when a link is clicked
const menuToggle = document.getElementById('menu-toggle');
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.checked = false;
    });
});

// Apply observer to reveal sections
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


// --- MODAL FUNCTIONS ---

// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    // Prevent the background website from scrolling
    document.body.style.overflow = "hidden"; 
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // Restore the background scrolling
    document.body.style.overflow = "auto"; 
}

// Close modal if user clicks the dark background outside the box
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}
