const modal = document.getElementById('signup-modal');
const signupButton = document.getElementById('signup-button');
const heroSignupButton = document.getElementById('hero-signup-button');
const closeModal = document.getElementById('close-modal');
const typeBtns = document.querySelectorAll('.type-btn');
const signupForms = document.querySelectorAll('.signup-form');
const forms = document.querySelectorAll('form');
const sosButton = document.querySelector('.emergency-btn');
const serviceLinks = document.querySelectorAll('.service-item a');

const openModal = () => {
    modal.style.display = 'flex';
};

const closeModalFunc = () => {
    modal.style.display = 'none';
};

signupButton.addEventListener('click', openModal);
heroSignupButton.addEventListener('click', openModal);

closeModal.addEventListener('click', closeModalFunc);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
});

typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        typeBtns.forEach(b => b.classList.remove('active'));
        signupForms.forEach(form => form.classList.remove('active'));
        btn.classList.add('active');
        const formType = btn.getAttribute('data-type');
        document.getElementById(`${formType}-form`).classList.add('active');
    });
});

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for registering! We will contact you shortly.');
        form.reset();
        closeModalFunc();
    });
});

sosButton.addEventListener('click', () => {
    alert('EMERGENCY MODE ACTIVATED: Connecting you to the nearest help center. Please stay on this page.');
});

// Updated service link handler
serviceLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Allow navigation to developed pages
        if (href === 'sos-alerts.html' || 
            href === 'ambulance-critical-care.html' || 
            href === 'hospital-icu-beds.html' || 
            href === 'find-safe-shelters.html' || 
            href === 'live-disaster-map.html' || 
            href === 'find-missing-people.html' || 
            href === 'donate-blood.html' || 
            href === 'be-a-volunteer.html' || 
            href === 'deliver-aid.html' || 
            href === 'essential-supplies-medical-aid.html' || 
            href === 'crowdfund-for-help.html' || 
            href === 'community-donation-hubs.html') {
            return; // Let the browser handle the link normally
        }
        // Show alert for undeveloped pages
        e.preventDefault();
        alert(`This would take you to the ${link.textContent} service. This feature is currently under development.`);
    });
});

document.querySelector('.type-btn[data-type="volunteer"]').click();
document.querySelector('.type-btn[data-type="volunteer"]').click();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        map.setView([position.coords.latitude, position.coords.longitude], 10);
    });
}
fetch('https://eonet.gsfc.nasa.gov/api/v3/events?category=wildfires') // Example for wildfires only
setInterval(() => {
    // Fetch and update markers
}, 300000); // Every 5 minutes