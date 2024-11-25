// Smooth Scrolling for Section Links (only for same-page navigation)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only apply smooth scrolling for internal links (i.e., same-page navigation)
        const targetId = this.getAttribute('href');
        
        // Check if the link targets an element on the same page (e.g., #about, #projects)
        if (targetId.startsWith('#')) {
            e.preventDefault(); // Prevent default anchor behavior

            // Get the target section's ID from the href attribute
            const targetSection = document.querySelector(targetId);

            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
