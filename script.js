function toggleMenu() {
    const dropdown = document.getElementById('navDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.matches('.menu-btn')) {
        const dropdown = document.getElementById('navDropdown');
        dropdown.style.display = 'none';
    }
});

function showContent(contentId, element) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(contentId).classList.add('active');

    // Update active menu
    document.querySelectorAll('.sidebar-menu li').forEach(li => {
        li.classList.remove('active');
    });
    element.classList.add('active');
}

// Set default page
document.addEventListener('DOMContentLoaded', () => {
    showContent('catalog-content', document.getElementById('menu-catalog'));
});