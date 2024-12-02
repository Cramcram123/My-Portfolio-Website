
// Add smooth scrolling behavior when clicking "Back to Top" button
document.addEventListener('DOMContentLoaded', function () {
    // Back to top button
    const button = document.createElement('button');
    button.textContent = '↑';
    button.id = 'back-to-top';
    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to top
        });
    });

    document.body.appendChild(button);
});
