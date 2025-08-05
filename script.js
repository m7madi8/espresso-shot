// Initialize any additional functionality
document.addEventListener('DOMContentLoaded', function() {
    // Any additional initialization can go here
});

// Loader Functionality
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');

// Simulate loading time and hide loader
function hideLoader() {
    setTimeout(() => {
        loader.classList.add('hidden');
        // Enable scrolling after loader is hidden
        document.body.style.overflow = '';
        
        // Make content immediately visible without any delay
        if (mainContent) {
            mainContent.classList.add('visible');
            // Force immediate visibility
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            mainContent.style.visibility = 'visible';
        }
    }, 2500); // Show loader for 2.5 seconds
}

// Hide loader when page is fully loaded
window.addEventListener('load', hideLoader);

// Fallback: Hide loader after 3 seconds even if load event doesn't fire
setTimeout(() => {
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Make content immediately visible without any delay
        if (mainContent) {
            mainContent.classList.add('visible');
            // Force immediate visibility
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            mainContent.style.visibility = 'visible';
        }
    }
}, 3000);

// Enhanced Category filter functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const menuCategories = document.querySelectorAll('.menu-category');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.getAttribute('data-category');
        
        // Remove active class from all buttons
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('bg-primary', 'text-white', 'font-semibold');
            btn.classList.add('bg-white', 'text-text', 'font-medium');
        });

        // Add active class to clicked button
        button.classList.add('active');
        button.classList.remove('bg-white', 'text-text', 'font-medium');
        button.classList.add('bg-primary', 'text-white', 'font-semibold');

        // Filter menu categories with smooth animation
        menuCategories.forEach((category, index) => {
            const categoryType = category.getAttribute('data-category');
            
            // Add fade out effect
            category.style.transition = 'all 0.4s ease';
            category.style.opacity = '0';
            category.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                if (selectedCategory === 'all' || categoryType === selectedCategory) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    category.style.display = 'none';
                }
            }, 200);
        });
    });
});

// Smooth scroll for category slider
const categorySlider = document.querySelector('.flex.flex-wrap.justify-center.gap-4');
if (categorySlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    categorySlider.addEventListener('mousedown', (e) => {
        isDown = true;
        categorySlider.style.cursor = 'grabbing';
        startX = e.pageX - categorySlider.offsetLeft;
        scrollLeft = categorySlider.scrollLeft;
    });

    categorySlider.addEventListener('mouseleave', () => {
        isDown = false;
        categorySlider.style.cursor = 'grab';
    });

    categorySlider.addEventListener('mouseup', () => {
        isDown = false;
        categorySlider.style.cursor = 'grab';
    });

    categorySlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categorySlider.offsetLeft;
        const walk = (x - startX) * 2;
        categorySlider.scrollLeft = scrollLeft - walk;
    });
}

// Add loading animation for menu categories
window.addEventListener('load', () => {
    menuCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.6s ease';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Modern Modal-Style Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
    // Toggle hamburger animation
    mobileMenuBtn.classList.add('active');
    
    // Show overlay
    mobileMenuOverlay.classList.add('active');
    
    // Show menu
    mobileMenu.classList.remove('hidden');
    
    // Animate menu in
    requestAnimationFrame(() => {
        mobileMenu.classList.add('active');
    });
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    // Toggle hamburger animation
    mobileMenuBtn.classList.remove('active');
    
    // Hide overlay with animation
    mobileMenuOverlay.classList.remove('active');
    
    // Animate menu out (reverse of the slide-in animation)
    mobileMenu.classList.remove('active');
    
    // Wait for the slide-out animation to complete before hiding
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
        // Enable body scroll
        document.body.style.overflow = '';
    }, 500); // Match the CSS transition duration
}

// Event listeners
mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        closeMobileMenu();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('nav').offsetHeight;
            // Add more space for longer sections to show all content
            let extraSpace = 20;
            if (target.id === 'about') extraSpace = 120;
            else if (target.id === 'menu') extraSpace = 100; // Show all filter buttons with more adjustment
            const targetPosition = target.offsetTop - headerHeight + extraSpace;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scroll for mobile menu links
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu immediately
            closeMobileMenu();
            
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('nav').offsetHeight;
            // Add more space for longer sections to show all content
            let extraSpace = 20;
            if (target.id === 'about') extraSpace = 120;
            else if (target.id === 'menu') extraSpace = 100; // Show all filter buttons with more adjustment
            const targetPosition = target.offsetTop - headerHeight + extraSpace;
            
            // Scroll to target with proper offset
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Keep navbar always visible - no scroll effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    // Always keep navbar visible and fixed
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
    navbar.style.visibility = 'visible';
});

// View Menu Button - Smooth scroll to categories section
document.addEventListener('DOMContentLoaded', function() {
    const viewMenuBtn = document.getElementById('view-menu-btn');
    const categorySection = document.querySelector('.category-section');
    
    if (viewMenuBtn && categorySection) {
        viewMenuBtn.addEventListener('click', function() {
            // Calculate offset for fixed header
            const headerHeight = document.querySelector('nav').offsetHeight;
            // Add more space for menu section to show all filter buttons with more adjustment
            const targetPosition = categorySection.offsetTop - headerHeight + 100;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
}); 

// Search Functionality
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const inlineSearchResults = document.getElementById('inline-search-results');
const inlineSearchResultsContent = document.getElementById('inline-search-results-content');
const inlineSearchClose = document.getElementById('inline-search-close');

// Menu data for search
const menuData = [
    // Espresso Shot Coffee
    { name: 'Espresso (Colombian - Brazilian)', category: 'ESPRESSO SHOT COFFEE', price: '8.00 NIS', categorySlug: 'espresso' },
    { name: 'Americano (Colombian - Brazilian)', category: 'ESPRESSO SHOT COFFEE', price: '9.00 NIS', categorySlug: 'espresso' },
    
    // Milk Coffee
    { name: 'Cappuccino', category: 'MILK COFFEE', price: '12.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Café Latte', category: 'MILK COFFEE', price: '12.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Espresso Macchiato (Colombian - Brazilian)', category: 'MILK COFFEE', price: '12.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Flat White', category: 'MILK COFFEE', price: '13.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Hazelnut Latte', category: 'MILK COFFEE', price: '13.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Pistachio Latte', category: 'MILK COFFEE', price: '14.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Mocha', category: 'MILK COFFEE', price: '14.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'White Mocha', category: 'MILK COFFEE', price: '14.0 NIS', categorySlug: 'milk-coffee' },
    { name: 'Cortado (Colombian - Brazilian)', category: 'MILK COFFEE', price: '12.0 NIS', categorySlug: 'milk-coffee' },
    
    // Sweet Coffee
    { name: 'Ice Spanish Latte', category: 'SWEET COFFEE', price: '16.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Pistachio Latte', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Caramel Macchiato', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Salted Caramel', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Hazelnut Latte', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Mocha', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Vanilla Latte', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Americano', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Brown Sugar Cinnamon', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Coffee', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Toffee Caramel', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice White Mocha', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    { name: 'Ice Coffee Dite (No Sugar)', category: 'SWEET COFFEE', price: '15.0 NIS', categorySlug: 'sweet-coffee' },
    
    // Special Drinks
    { name: 'Hot Chocolate', category: 'SPECIAL DRINKS', price: '14.0 NIS', categorySlug: 'special-drinks' },
    { name: 'Hot Hazelnut', category: 'SPECIAL DRINKS', price: '14.0 NIS', categorySlug: 'special-drinks' },
    { name: 'Salted Caramel', category: 'SPECIAL DRINKS', price: '14.0 NIS', categorySlug: 'special-drinks' },
    { name: 'French Vanilla', category: 'SPECIAL DRINKS', price: '14.0 NIS', categorySlug: 'special-drinks' },
    { name: 'Chai Latte', category: 'SPECIAL DRINKS', price: '14.0 NIS', categorySlug: 'special-drinks' }
];



function hideInlineSearchResults() {
    inlineSearchResults.classList.add('hidden');
    inlineSearchResultsContent.innerHTML = '';
}

function searchMenu(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm === '') {
        hideInlineSearchResults();
        return;
    }
    
    const results = menuData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    displayInlineSearchResults(results);
}

function displayInlineSearchResults(results) {
    if (results.length === 0) {
        inlineSearchResultsContent.innerHTML = `
            <div class="col-span-full text-center py-8">
                <svg class="w-12 h-12 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <p class="text-gray-500">No drinks found matching "${searchInput.value}"</p>
                <p class="text-sm text-gray-400 mt-2">Try searching for a different term</p>
            </div>
        `;
        inlineSearchResults.classList.remove('hidden');
        return;
    }
    
    const resultsHTML = results.map(item => `
        <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer" onclick="scrollToCategory('${item.categorySlug}')">
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-secondary text-sm">${item.name}</h4>
                <span class="text-primary font-semibold text-sm">${item.price}</span>
            </div>
            <p class="text-gray-500 text-xs">${item.category}</p>
        </div>
    `).join('');
    
    inlineSearchResultsContent.innerHTML = resultsHTML;
    inlineSearchResults.classList.remove('hidden');
}

function scrollToCategory(categorySlug) {
    hideInlineSearchResults();
    
    // Find the category element
    const categoryElement = document.querySelector(`[data-category="${categorySlug}"]`);
    if (categoryElement) {
        // Calculate offset for fixed header and search results
        const headerHeight = document.querySelector('nav').offsetHeight;
        const searchResultsHeight = inlineSearchResults.classList.contains('hidden') ? 0 : inlineSearchResults.offsetHeight;
        const targetPosition = categoryElement.offsetTop - headerHeight - searchResultsHeight + 20;
        
        // Smooth scroll to the category
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Highlight the category button
        const categoryBtn = document.querySelector(`[data-category="${categorySlug}"]`);
        if (categoryBtn) {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-primary', 'text-white', 'font-semibold');
                btn.classList.add('bg-white', 'text-text', 'font-medium');
            });
            
            // Add active class to the target category button
            categoryBtn.classList.add('active');
            categoryBtn.classList.remove('bg-white', 'text-text', 'font-medium');
            categoryBtn.classList.add('bg-primary', 'text-white', 'font-semibold');
        }
    }
}

// Event listeners for search functionality
inlineSearchClose.addEventListener('click', hideInlineSearchResults);

// Search input event listener
searchInput.addEventListener('input', (e) => {
    e.stopPropagation();
    searchMenu(e.target.value);
});

// Also add keydown listener to ensure input works
searchInput.addEventListener('keydown', (e) => {
    e.stopPropagation();
});

// Close search with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !searchContainer.classList.contains('hidden')) {
        toggleSearch();
    }
}); 