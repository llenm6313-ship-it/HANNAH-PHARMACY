// Function ya kufungua na kufunga Dropdown ya nukta tatu
function toggleMenu() {
    document.getElementById("navDropdown").classList.toggle("show");
}

// Bind menu click toggle
document.getElementById("dotMenuBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Kufunga menyu kiotomatiki mtumiaji akibonyeza nje yake
window.onclick = function(event) {
    if (!event.target.matches('.dot-menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-options");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// JS Function ya kubadili kurasa za pembeni (Sidebar) bila ku-refresh ukurasa
function showContent(contentId, menuId) {
    // 1. Ficha kurasa zote kwanza
    const contentSections = document.querySelectorAll('.page-content-section');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Ondoa active class kwenye menyu zote
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Onyesha ukurasa ulioruhusiwa tu
    const targetContent = document.getElementById(contentId);
    if(targetContent) {
        targetContent.style.display = 'block';
    }

    // 4. Weka rangi ya 'active' kwenye menyu iliyobonyezwa
    const targetMenu = document.getElementById(menuId);
    if(targetMenu) {
        targetMenu.classList.add('active');
    }
}

// Set up programmatic click listeners on sidebar items
document.getElementById("menu-dashboard").addEventListener("click", () => showContent('dashboard-content', 'menu-dashboard'));
document.getElementById("menu-account").addEventListener("click", () => showContent('account-content', 'menu-account'));
document.getElementById("menu-catalog").addEventListener("click", () => showContent('catalog-content', 'menu-catalog'));
document.getElementById("menu-prescription").addEventListener("click", () => showContent('prescription-content', 'menu-prescription'));
document.getElementById("menu-supplements").addEventListener("click", () => showContent('supplements-content', 'menu-supplements'));
document.getElementById("menu-contact").addEventListener("click", () => showContent('contact-content', 'menu-contact'));

// Kuanza na ukurasa wa "Angalia Dawa" kama default page ikimaliza kuload
document.addEventListener('DOMContentLoaded', () => {
    showContent('catalog-content', 'menu-catalog');
});