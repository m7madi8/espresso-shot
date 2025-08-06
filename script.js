// Initialize enhanced functionality for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initializeAnimations();
    initializeScrollEffects();
    initializeHoverEffects();
    initializeParallaxEffects();
    initializeTypingEffect();
    initializeParticleEffects();
    
    // Initialize interactive hero section
    initializeInteractiveHero();
    
    // Add mobile-specific enhancements
    addMobileEnhancements();
});

// Drink Menu Data Structure - Real Menu Items
const drinkMenu = {
    hot: [
        {
            name: "Espresso (Colombian - Brazilian)",
            price: "8.00 NIS",
            description: "Rich and bold single shot",
            emoji: "☕",
            message: "Today feels like an Espresso kinda day! Bold and beautiful, just like you! ☕✨"
        },
        {
            name: "Americano (Colombian - Brazilian)",
            price: "9.00 NIS",
            description: "Simple and strong",
            emoji: "☕",
            message: "Today feels like an Americano kinda day! Simple, strong, and absolutely perfect! ☕💪"
        },
        {
            name: "Cappuccino",
            price: "12.0 NIS",
            description: "Perfectly balanced with steamed milk",
            emoji: "☕",
            message: "Today feels like a Cappuccino kinda day! Smooth and sophisticated! ☕💫"
        },
        {
            name: "Café Latte",
            price: "12.0 NIS",
            description: "Creamy and comforting",
            emoji: "☕",
            message: "Today feels like a Café Latte kinda day! Creamy comfort in every sip! ☕💕"
        },
        {
            name: "Flat White",
            price: "13.0 NIS",
            description: "Silky smooth microfoam",
            emoji: "☕",
            message: "Today feels like a Flat White kinda day! Silky smooth perfection! ☕✨"
        },
        {
            name: "Hazelnut Latte",
            price: "13.0 NIS",
            description: "Nutty and aromatic",
            emoji: "☕",
            message: "Today feels like a Hazelnut Latte kinda day! Nutty goodness in every sip! ☕🌰"
        },
        {
            name: "Mocha",
            price: "14.0 NIS",
            description: "Chocolate and coffee perfection",
            emoji: "☕",
            message: "Today feels like a Mocha kinda day! Sweet dreams and chocolate cream! ☕🍫"
        },
        {
            name: "White Mocha",
            price: "14.0 NIS",
            description: "White chocolate delight",
            emoji: "☕",
            message: "Today feels like a White Mocha kinda day! White chocolate dreams! ☕🍫"
        },
        {
            name: "Hot Chocolate",
            price: "14.0 NIS",
            description: "Rich and creamy chocolate",
            emoji: "🍫",
            message: "Today feels like a Hot Chocolate kinda day! Sweet and comforting! 🍫💕"
        },
        {
            name: "Chai Latte",
            price: "14.0 NIS",
            description: "Spiced tea with milk",
            emoji: "🫖",
            message: "Today feels like a Chai Latte kinda day! Spiced and aromatic! 🫖✨"
        }
    ],
    cold: [
        {
            name: "Ice Spanish Latte",
            price: "16.0 NIS",
            description: "Sweet and creamy iced latte",
            emoji: "❄️",
            message: "Today feels like an Ice Spanish Latte kinda day! Sweet and refreshing! ☕❄️"
        },
        {
            name: "Ice Pistachio Latte",
            price: "15.0 NIS",
            description: "Nutty and refreshing",
            emoji: "❄️",
            message: "Today feels like an Ice Pistachio Latte kinda day! Cool and nutty! ☕❄️🌰"
        },
        {
            name: "Ice Caramel Macchiato",
            price: "15.0 NIS",
            description: "Caramel sweetness on ice",
            emoji: "❄️",
            message: "Today feels like an Ice Caramel Macchiato kinda day! Sweet caramel dreams! ☕❄️🍯"
        },
        {
            name: "Ice Salted Caramel",
            price: "15.0 NIS",
            description: "Sweet and salty perfection",
            emoji: "❄️",
            message: "Today feels like an Ice Salted Caramel kinda day! Sweet and salty harmony! ☕❄️🧂"
        },
        {
            name: "Ice Hazelnut Latte",
            price: "15.0 NIS",
            description: "Cool nutty delight",
            emoji: "❄️",
            message: "Today feels like an Ice Hazelnut Latte kinda day! Cool and nutty! ☕❄️🌰"
        },
        {
            name: "Ice Mocha",
            price: "15.0 NIS",
            description: "Chocolatey cold delight",
            emoji: "❄️",
            message: "Today feels like an Ice Mocha kinda day! Chocolate dreams on ice! ☕❄️🍫"
        },
        {
            name: "Ice Vanilla Latte",
            price: "15.0 NIS",
            description: "Smooth vanilla on ice",
            emoji: "❄️",
            message: "Today feels like an Ice Vanilla Latte kinda day! Smooth vanilla dreams! ☕❄️🌿"
        },
        {
            name: "Ice Americano",
            price: "15.0 NIS",
            description: "Bold and refreshing",
            emoji: "❄️",
            message: "Today feels like an Ice Americano kinda day! Bold, refreshing, and absolutely invigorating! ☕❄️💪"
        },
        {
            name: "Fresh Hibiscus",
            price: "16.0 NIS",
            description: "Refreshing hibiscus drink",
            emoji: "🌸",
            message: "Today feels like a Fresh Hibiscus kinda day! Floral and refreshing! 🌸✨"
        },
        {
            name: "Paradise Smoothie",
            price: "17.0 NIS",
            description: "Tropical fruit blend",
            emoji: "🍹",
            message: "Today feels like a Paradise Smoothie kinda day! Tropical paradise in a glass! 🍹🏝️"
        },
        {
            name: "Strawberry Banana Smoothie",
            price: "17.0 NIS",
            description: "Classic fruit combination",
            emoji: "🍓",
            message: "Today feels like a Strawberry Banana Smoothie kinda day! Classic fruit bliss! 🍓🍌"
        },
        {
            name: "Orange Juice",
            price: "14.0 NIS",
            description: "Fresh squeezed orange juice",
            emoji: "🍊",
            message: "Today feels like an Orange Juice kinda day! Fresh and vitamin-packed! 🍊💪"
        }
    ]
};

// Interactive Hero Section Functionality
function initializeInteractiveHero() {
    const heroLogo = document.querySelector('.hero-logo');
    
    if (!heroLogo) {
        console.error('Hero logo not found!');
        return;
    }
    
    console.log('Initializing interactive hero section...');
    
    const tooltipContainer = document.createElement('div');
    tooltipContainer.className = 'hero-tooltip-container';
    tooltipContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
    `;
    
    heroLogo.style.position = 'relative';
    heroLogo.style.cursor = 'pointer';
    heroLogo.appendChild(tooltipContainer);
    
    // Add click event for drink selection
    heroLogo.addEventListener('click', handleLogoClick);
    
    // Start animated tooltips with a slight delay to ensure everything is loaded
    setTimeout(() => {
        startAnimatedTooltips(tooltipContainer);
    }, 1000);
    
    // Add hover effects
    heroLogo.addEventListener('mouseenter', () => {
        heroLogo.style.transform = 'scale(1.05)';
        heroLogo.style.transition = 'transform 0.3s ease';
    });
    
    heroLogo.addEventListener('mouseleave', () => {
        heroLogo.style.transform = 'scale(1)';
    });
    
    // Add touch events for mobile
    heroLogo.addEventListener('touchstart', () => {
        heroLogo.style.transform = 'scale(0.95)';
    });
    
    heroLogo.addEventListener('touchend', () => {
        setTimeout(() => {
            heroLogo.style.transform = 'scale(1)';
        }, 150);
    });
    
    console.log('Interactive hero section initialized successfully!');
}

// Handle logo click to show drink recommendation
function handleLogoClick() {
    const allDrinks = [...drinkMenu.hot, ...drinkMenu.cold];
    const randomDrink = allDrinks[Math.floor(Math.random() * allDrinks.length)];
    
    showDrinkPopup(randomDrink);
    
    // Add click animation
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        heroLogo.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroLogo.style.transform = 'scale(1)';
        }, 150);
    }
}

// Show drink recommendation popup
function showDrinkPopup(drink) {
    // Remove existing popup if any
    const existingPopup = document.querySelector('.drink-popup');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    const popup = document.createElement('div');
    popup.className = 'drink-popup';
    popup.innerHTML = `
        <div class="drink-popup-content">
            <div class="drink-popup-header">
                <button class="drink-popup-close">&times;</button>
            </div>
            <div class="drink-popup-body">
                <div class="drink-emoji">${drink.emoji}</div>
                <h3 class="drink-name">${drink.name}</h3>
                <p class="drink-message">${drink.message}</p>
                <div class="drink-details">
                    <span class="drink-price">${drink.price}</span>
                    <span class="drink-description">${drink.description}</span>
                </div>
                <div class="drink-note">
                    <small>💡 Click the logo again for another surprise!</small>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add event listener for close button
    const closeBtn = popup.querySelector('.drink-popup-close');
    closeBtn.addEventListener('click', () => {
        popup.classList.add('popup-closing');
        setTimeout(() => popup.remove(), 300);
    });
    
    // Close on outside click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.add('popup-closing');
            setTimeout(() => popup.remove(), 300);
        }
    });
    
    // Auto-close after 5 seconds
    setTimeout(() => {
        if (popup.parentNode) {
            popup.classList.add('popup-closing');
            setTimeout(() => popup.remove(), 300);
        }
    }, 5000);
}

// Global variables for tooltip management
let tooltipCurrentIndex = 0;
let tooltipPositionIndex = 0;

// Animated tooltips around the logo
function startAnimatedTooltips(container) {
    console.log('Starting animated tooltips...');
    
    const tooltipMessages = [
        "Click me for a surprise! ☕",
        "Discover your perfect drink! ✨",
        "What's your coffee mood today? 💫",
        "Let's find your match! 🎯",
        "Ready for a coffee adventure? 🚀",
        "Your daily dose of joy awaits! 🌟",
        "Click for coffee magic! ✨",
        "What's brewing today? 🔮"
    ];
    
    // Shorter messages for mobile devices
    const shortTooltipMessages = [
        "Click me! ☕",
        "Find your drink! ✨",
        "Coffee mood? 💫",
        "Find your match! 🎯",
        "Coffee adventure! 🚀",
        "Joy awaits! 🌟",
        "Coffee magic! ✨",
        "What's brewing? 🔮"
    ];
    
    // Define specific positions around the logo (8 positions in a circle)
    const positions = [
        { x: 0, y: -100, name: 'top' },      // أعلى
        { x: 70, y: -70, name: 'top-right' }, // أعلى يمين
        { x: 100, y: 0, name: 'right' },     // يمين
        { x: 70, y: 70, name: 'bottom-right' }, // أسفل يمين
        { x: 0, y: 100, name: 'bottom' },    // أسفل
        { x: -70, y: 70, name: 'bottom-left' }, // أسفل يسار
        { x: -100, y: 0, name: 'left' },     // يسار
        { x: -70, y: -70, name: 'top-left' } // أعلى يسار
    ];
    
    console.log(`Tooltip messages: ${tooltipMessages.length}`);
    console.log(`Tooltip positions: ${positions.length}`);
    
    function createTooltip() {
        const tooltip = document.createElement('div');
        tooltip.className = 'hero-tooltip';
        
        // Get screen width for responsive positioning
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        // Choose appropriate message based on screen size
        let messageToShow;
        if (screenWidth <= 480) {
            // Use shorter messages for small mobile devices
            messageToShow = shortTooltipMessages[tooltipCurrentIndex];
        } else {
            // Use full messages for larger screens
            messageToShow = tooltipMessages[tooltipCurrentIndex];
        }
        
        tooltip.textContent = messageToShow;
        
        // Adjust positions based on screen size
        let scaleFactor = 1;
        let fontSize = 13;
        let padding = '10px 16px';
        let maxWidth = 'none';
        
        if (screenWidth <= 480) {
            // Small mobile devices
            scaleFactor = 0.6;
            fontSize = 10;
            padding = '6px 10px';
            maxWidth = '100px';
        } else if (screenWidth <= 768) {
            // Mobile devices
            scaleFactor = 0.8;
            fontSize = 11;
            padding = '8px 12px';
            maxWidth = '120px';
        } else if (screenWidth <= 1024) {
            // Tablets
            scaleFactor = 0.9;
            fontSize = 12;
            padding = '9px 14px';
        }
        
        // Use predefined positions in sequence, with responsive scaling
        const position = positions[tooltipPositionIndex];
        const randomOffset = 20 * scaleFactor; // Scale random offset
        const x = (position.x * scaleFactor) + (Math.random() - 0.5) * randomOffset;
        const y = (position.y * scaleFactor) + (Math.random() - 0.5) * randomOffset;
        
        // Add debug info to console
        console.log(`Tooltip ${tooltipCurrentIndex}: "${tooltipMessages[tooltipCurrentIndex]}" at position ${tooltipPositionIndex}: ${position.name} (${x}, ${y}) - Screen: ${screenWidth}x${screenHeight}, Scale: ${scaleFactor}`);
        
        tooltip.style.cssText = `
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(${x}px, ${y}px);
            background: rgba(44, 44, 44, 0.95);
            color: white;
            padding: ${padding};
            border-radius: 25px;
            font-size: ${fontSize}px;
            font-weight: 600;
            white-space: normal;
            opacity: 0;
            animation: tooltipFadeInOut 4s ease-in-out forwards;
            pointer-events: none;
            z-index: 20;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            letter-spacing: 0.5px;
            max-width: ${maxWidth};
            text-align: center;
            line-height: 1.3;
            word-wrap: break-word;
            overflow-wrap: break-word;
        `;
        
        // Add tooltip to container
        if (container && container.parentNode) {
            container.appendChild(tooltip);
            console.log(`Tooltip added successfully to position ${position.name}`);
        } else {
            console.error('Container not found or not attached to DOM');
            return;
        }
        
        // Remove tooltip after animation
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
                console.log(`Tooltip removed from position ${position.name}`);
            }
        }, 4000);
        
        // Move to next message and position
        tooltipCurrentIndex = (tooltipCurrentIndex + 1) % tooltipMessages.length;
        tooltipPositionIndex = (tooltipPositionIndex + 1) % positions.length;
        
        console.log(`Next tooltip will be: ${tooltipCurrentIndex} at position ${tooltipPositionIndex}`);
    }
    
    // Create first tooltip after 2 seconds
    setTimeout(createTooltip, 2000);
    
    // Create new tooltip every 6 seconds
    setInterval(createTooltip, 6000);
    
    // Test function to manually trigger tooltip
    window.testTooltip = function() {
        console.log('Manual tooltip test triggered');
        createTooltip();
    };
    
    console.log('Tooltip system initialized. Use testTooltip() to manually test.');
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            console.log('Window resized, updating tooltip system...');
            // Clear existing tooltips
            const existingTooltips = container.querySelectorAll('.hero-tooltip');
            existingTooltips.forEach(tooltip => tooltip.remove());
        }, 250);
    });
}

// Add mobile-specific enhancements
function addMobileEnhancements() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add haptic feedback for iOS devices
    if (window.navigator && window.navigator.vibrate) {
        const interactiveElements = document.querySelectorAll('button, a, .category-btn, tr');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                window.navigator.vibrate(10);
            });
        });
    }
    
    // Optimize scrolling performance
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: true });
    
    // Add swipe gestures for mobile menu
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Swipe right to open menu
        if (diffX < -50 && Math.abs(diffY) < 50) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('hidden')) {
                openMobileMenu();
            }
        }
        
        // Swipe left to close menu
        if (diffX > 50 && Math.abs(diffY) < 50) {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        }
    });
}

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
        
        // Start entrance animations
        startEntranceAnimations();
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
        
        // Start entrance animations
        startEntranceAnimations();
    }
}, 3000);

// Entrance animations for page elements
function startEntranceAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animate-in');
        }, index * 100);
    });
}

// Enhanced scroll-triggered animations with fade out
function initializeScrollEffects() {
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 1.0],
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            
            if (entry.isIntersecting) {
                // Element is visible - animate in
                element.classList.add('animate-in');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
                element.style.filter = 'blur(0)';
            } else {
                // Element is not visible - animate out
                element.classList.remove('animate-in');
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px) scale(0.95)';
                element.style.filter = 'blur(2px)';
            }
        });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Initialize touch effects for mobile devices
function initializeHoverEffects() {
    // Check if device supports touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Add enhanced touch effects to menu items
    const menuItems = document.querySelectorAll('tr');
    menuItems.forEach(item => {
        if (isTouchDevice) {
            // Touch events for mobile
            item.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.backgroundColor = 'rgba(44, 44, 44, 0.1)';
                this.style.transition = 'all 0.2s ease';
                this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
            });
            
            item.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.backgroundColor = '';
                this.style.boxShadow = '';
            });
        } else {
            // Mouse events for desktop
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.backgroundColor = 'rgba(44, 44, 44, 0.05)';
                this.style.transition = 'all 0.3s ease';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.backgroundColor = '';
                this.style.boxShadow = '';
            });
        }
        
        item.addEventListener('click', function() {
            this.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // Add enhanced touch effects to all buttons
    const buttons = document.querySelectorAll('button, a[href*="tel:"]');
    buttons.forEach(button => {
        if (isTouchDevice) {
            // Touch events for mobile
            button.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-1px) scale(0.98)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        } else {
            // Mouse events for desktop
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        }
    });
    
    // Add enhanced logo effects
    const logos = document.querySelectorAll('.logo-shine-container');
    logos.forEach(logo => {
        if (isTouchDevice) {
            // Touch events for mobile
            logo.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-2px) scale(0.98)';
                this.style.animation = 'logoPulse 0.3s ease-in-out';
            });
            
            logo.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.animation = '';
            });
        } else {
            // Mouse events for desktop
            logo.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.animation = 'logoPulse 0.6s ease-in-out';
            });
            
            logo.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.animation = '';
            });
        }
    });
    
    // Add enhanced social media effects
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        if (isTouchDevice) {
            // Touch events for mobile
            link.addEventListener('touchstart', function() {
                this.style.transform = 'translateY(-2px) scale(0.95)';
            });
            
            link.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        } else {
            // Mouse events for desktop
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.15)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
    });
}

// Initialize parallax effects
function initializeParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize beautiful effects for hero description
function initializeTypingEffect() {
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        // Add beautiful effects to the description
        heroDescription.style.opacity = '0';
        heroDescription.style.transform = 'translateY(20px)';
        heroDescription.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        // Add subtle glow effect
        heroDescription.style.textShadow = '0 0 20px rgba(44, 44, 44, 0.1)';
        
        // Add beautiful gradient text effect
        heroDescription.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #4A5568 50%, #2C2C2C 100%)';
        heroDescription.style.backgroundClip = 'text';
        heroDescription.style.webkitBackgroundClip = 'text';
        heroDescription.style.webkitTextFillColor = 'transparent';
        heroDescription.style.backgroundSize = '200% 200%';
        
        // Start beautiful animation after loader
        setTimeout(() => {
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
            
            // Add subtle floating animation
            heroDescription.style.animation = 'heroDescriptionFloat 4s ease-in-out infinite';
        }, 3000);
    }
}

// Initialize particle effects
function initializeParticleEffects() {
    createParticles();
}

function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(44, 44, 44, 0.1);
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
    `;
    container.appendChild(particle);
}

// Initialize general animations
function initializeAnimations() {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .parallax {
            transition: transform 0.1s ease-out;
        }
        
        .bounce-in {
            animation: bounceIn 0.8s ease-out;
        }
        
        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
        }
        
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 5px rgba(44, 44, 44, 0.3); }
            50% { box-shadow: 0 0 20px rgba(44, 44, 44, 0.6); }
        }
        
        .slide-in-left {
            animation: slideInLeft 0.8s ease-out;
        }
        
        @keyframes slideInLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .slide-in-right {
            animation: slideInRight 0.8s ease-out;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .rotate-in {
            animation: rotateIn 0.8s ease-out;
        }
        
        @keyframes rotateIn {
            from { transform: rotate(-180deg) scale(0.3); opacity: 0; }
            to { transform: rotate(0deg) scale(1); opacity: 1; }
        }
        
        .zoom-in {
            animation: zoomIn 0.8s ease-out;
        }
        
        @keyframes zoomIn {
            from { transform: scale(0.3); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .floating {
            animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .glow {
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { box-shadow: 0 0 5px rgba(44, 44, 44, 0.3); }
            to { box-shadow: 0 0 20px rgba(44, 44, 44, 0.8); }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Category filter functionality with mobile touch support
const categoryButtons = document.querySelectorAll('.category-btn');
const menuCategories = document.querySelectorAll('.menu-category');

categoryButtons.forEach(button => {
    // Add touch and click support
    const handleCategorySelect = () => {
        const selectedCategory = button.getAttribute('data-category');
        
        // Add haptic feedback for mobile
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(20);
        }
        
        // Add click animation
        button.classList.add('bounce-in');
        setTimeout(() => button.classList.remove('bounce-in'), 800);
        
        // Remove active class from all buttons and reset styling
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.remove('bg-primary', 'text-white', 'font-semibold');
            btn.classList.add('bg-white', 'text-text', 'font-medium');
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.fontWeight = '';
        });

        // Add active class to clicked button and apply proper styling
        button.classList.add('active');
        button.classList.remove('bg-white', 'text-text', 'font-medium');
        button.classList.add('bg-primary', 'text-white', 'font-semibold');
        button.style.backgroundColor = '#2C2C2C';
        button.style.color = 'white';
        button.style.fontWeight = '600';

        // Filter menu categories with enhanced animation
        menuCategories.forEach((category, index) => {
            const categoryType = category.getAttribute('data-category');
            
            // Add enhanced fade out effect
            category.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            category.style.opacity = '0';
            category.style.transform = 'scale(0.8) rotateY(10deg)';
            
            setTimeout(() => {
                if (selectedCategory === 'all' || categoryType === selectedCategory) {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'scale(1) rotateY(0deg)';
                        category.classList.add('bounce-in');
                    }, 50);
                } else {
                    category.style.display = 'none';
                }
            }, 300);
        });
    };
    
    // Add only click event - no touch events to prevent activation during scroll
    button.addEventListener('click', handleCategorySelect);
});

// Initialize the first button as active on page load
const firstButton = document.querySelector('.category-btn[data-category="all"]');
if (firstButton) {
    firstButton.classList.add('active');
    firstButton.classList.remove('bg-white', 'text-text', 'font-medium');
    firstButton.classList.add('bg-primary', 'text-white', 'font-semibold');
    firstButton.style.backgroundColor = '#2C2C2C';
    firstButton.style.color = 'white';
    firstButton.style.fontWeight = '600';
}

// Smooth scroll for category slider with enhanced interactions
const categorySlider = document.querySelector('.flex.flex-wrap.justify-center.gap-4');
if (categorySlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    categorySlider.addEventListener('mousedown', (e) => {
        isDown = true;
        categorySlider.style.cursor = 'grabbing';
        categorySlider.style.transform = 'scale(0.98)';
        startX = e.pageX - categorySlider.offsetLeft;
        scrollLeft = categorySlider.scrollLeft;
    });

    categorySlider.addEventListener('mouseleave', () => {
        isDown = false;
        categorySlider.style.cursor = 'grab';
        categorySlider.style.transform = 'scale(1)';
    });

    categorySlider.addEventListener('mouseup', () => {
        isDown = false;
        categorySlider.style.cursor = 'grab';
        categorySlider.style.transform = 'scale(1)';
    });

    categorySlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categorySlider.offsetLeft;
        const walk = (x - startX) * 2;
        categorySlider.scrollLeft = scrollLeft - walk;
    });
}

// Add enhanced loading animation for menu categories with mobile optimization
window.addEventListener('load', () => {
    menuCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px) rotateX(10deg)';
        
        setTimeout(() => {
            category.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            category.style.opacity = '1';
            category.style.transform = 'translateY(0) rotateX(0deg)';
            category.classList.add('bounce-in');
            
            // Add mobile-specific animations
            if ('ontouchstart' in window) {
                category.style.animation = 'fadeInUp 0.6s ease-out';
            }
        }, index * 150);
    });
    
    // Add mobile-specific entrance animations
    if ('ontouchstart' in window) {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
                element.style.animation = 'slideInUp 0.8s ease-out';
            }, index * 100);
        });
    }
});

// Modern Modal-Style Mobile Menu Functionality with enhanced animations
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
    // Toggle hamburger animation
    mobileMenuBtn.classList.add('active');
    
    // Show overlay with enhanced animation
    mobileMenuOverlay.classList.add('active');
    mobileMenuOverlay.style.animation = 'fadeIn 0.3s ease-out';
    
    // Show menu with enhanced slide animation
    mobileMenu.classList.remove('hidden');
    
    // Animate menu in with bounce effect
    requestAnimationFrame(() => {
        mobileMenu.classList.add('active');
        mobileMenu.style.animation = 'slideInRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    // Lock body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    // Toggle hamburger animation
    mobileMenuBtn.classList.remove('active');
    
    // Hide overlay with enhanced animation
    mobileMenuOverlay.classList.remove('active');
    mobileMenuOverlay.style.animation = 'fadeOut 0.3s ease-out';
    
    // Animate menu out with enhanced slide animation
    mobileMenu.classList.remove('active');
    mobileMenu.style.animation = 'slideOutRight 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
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

// Enhanced smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add some space for better visibility
            let extraSpace = 20;
            if (target.id === 'about') extraSpace = 120;
            else if (target.id === 'menu') extraSpace = 100;
            const targetPosition = target.offsetTop + extraSpace;
            
            // Add scroll animation class
            target.classList.add('pulse-glow');
            setTimeout(() => target.classList.remove('pulse-glow'), 2000);
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced smooth scroll for mobile menu links
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu immediately
            closeMobileMenu();
            
            // Add some space for better visibility
            let extraSpace = 20;
            if (target.id === 'about') extraSpace = 120;
            else if (target.id === 'menu') extraSpace = 100;
            const targetPosition = target.offsetTop + extraSpace;
            
            // Add scroll animation class
            target.classList.add('pulse-glow');
            setTimeout(() => target.classList.remove('pulse-glow'), 2000);
            
            // Scroll to target with proper offset
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// View Menu Button - Enhanced smooth scroll to categories section with mobile support
document.addEventListener('DOMContentLoaded', function() {
    const viewMenuBtn = document.getElementById('view-menu-btn');
    const categorySection = document.querySelector('.category-section');
    
    if (viewMenuBtn && categorySection) {
        const handleViewMenu = function() {
            // Add haptic feedback for mobile
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(30);
            }
            
            // Add button animation
            this.classList.add('bounce-in');
            setTimeout(() => this.classList.remove('bounce-in'), 800);
            
            // Add more space for better visibility and ensure top section is visible
            const targetPosition = categorySection.offsetTop - 110;
            
            // Add scroll animation class
            categorySection.classList.add('pulse-glow');
            setTimeout(() => categorySection.classList.remove('pulse-glow'), 2000);
            
            // Enhanced scroll behavior for mobile
            if ('ontouchstart' in window) {
                // Smooth scroll with mobile optimization
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Increased duration for smoother scroll
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            } else {
                // Enhanced smooth scroll for desktop
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Add a small delay to ensure the scroll completes before highlighting
            setTimeout(() => {
                categorySection.classList.add('highlight-section');
                setTimeout(() => categorySection.classList.remove('highlight-section'), 3000);
            }, 1200);
        };
        
        // Add both click and touch events
        viewMenuBtn.addEventListener('click', handleViewMenu);
        viewMenuBtn.addEventListener('touchend', handleViewMenu);
    }
    
    // Handle mobile menu "Menu" link with same smooth scroll
    const mobileMenuLink = document.querySelector('a[href="#menu"]');
    if (mobileMenuLink) {
        const handleMobileMenuClick = function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            // Close mobile menu first
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
            
            // Add haptic feedback for mobile
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(30);
            }
            
            // Add button animation
            this.classList.add('bounce-in');
            setTimeout(() => this.classList.remove('bounce-in'), 800);
            
            // Add more space for better visibility and ensure top section is visible
            const targetPosition = categorySection.offsetTop - 110;
            
            // Add scroll animation class
            categorySection.classList.add('pulse-glow');
            setTimeout(() => categorySection.classList.remove('pulse-glow'), 2000);
            
            // Enhanced scroll behavior for mobile
            if ('ontouchstart' in window) {
                // Smooth scroll with mobile optimization
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Increased duration for smoother scroll
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }
                
                requestAnimationFrame(animation);
            } else {
                // Enhanced smooth scroll for desktop
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Add a small delay to ensure the scroll completes before highlighting
            setTimeout(() => {
                categorySection.classList.add('highlight-section');
                setTimeout(() => categorySection.classList.remove('highlight-section'), 3000);
            }, 1200);
        };
        
        // Add both click and touch events
        mobileMenuLink.addEventListener('click', handleMobileMenuClick);
        mobileMenuLink.addEventListener('touchend', handleMobileMenuClick);
    }
    
    // Handle all menu links (including desktop navigation)
    const allMenuLinks = document.querySelectorAll('a[href="#menu"]');
    allMenuLinks.forEach(link => {
        if (link !== mobileMenuLink) { // Skip the one we already handled
            const handleMenuLinkClick = function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Add haptic feedback for mobile
                if (window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate(30);
                }
                
                // Add button animation
                this.classList.add('bounce-in');
                setTimeout(() => this.classList.remove('bounce-in'), 800);
                
                // Add more space for better visibility and ensure top section is visible
                const targetPosition = categorySection.offsetTop - 110;
                
                // Add scroll animation class
                categorySection.classList.add('pulse-glow');
                setTimeout(() => categorySection.classList.remove('pulse-glow'), 2000);
                
                // Enhanced scroll behavior for mobile
                if ('ontouchstart' in window) {
                    // Smooth scroll with mobile optimization
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;
                    
                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
                    
                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }
                    
                    requestAnimationFrame(animation);
                } else {
                    // Enhanced smooth scroll for desktop
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Add a small delay to ensure the scroll completes before highlighting
                setTimeout(() => {
                    categorySection.classList.add('highlight-section');
                    setTimeout(() => categorySection.classList.remove('highlight-section'), 3000);
                }, 1200);
            };
            
            // Add both click and touch events
            link.addEventListener('click', handleMenuLinkClick);
            link.addEventListener('touchend', handleMenuLinkClick);
        }
    });
    
    // Handle About section links with smooth scroll
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        // Handle mobile menu "About" link
        const mobileAboutLink = document.querySelector('a[href="#about"]');
        if (mobileAboutLink) {
            const handleMobileAboutClick = function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Close mobile menu first
                const mobileMenu = document.getElementById('mobile-menu');
                const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    closeMobileMenu();
                }
                
                // Add haptic feedback for mobile
                if (window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate(30);
                }
                
                // Add button animation
                this.classList.add('bounce-in');
                setTimeout(() => this.classList.remove('bounce-in'), 800);
                
                // Add more space for better visibility and ensure top section is visible
                const targetPosition = aboutSection.offsetTop - 110;
                
                // Add scroll animation class
                aboutSection.classList.add('pulse-glow');
                setTimeout(() => aboutSection.classList.remove('pulse-glow'), 2000);
                
                // Enhanced scroll behavior for mobile
                if ('ontouchstart' in window) {
                    // Smooth scroll with mobile optimization
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;
                    
                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const run = ease(timeElapsed, startPosition, distance, duration);
                        window.scrollTo(0, run);
                        if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
                    
                    function ease(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t + b;
                        t--;
                        return -c / 2 * (t * (t - 2) - 1) + b;
                    }
                    
                    requestAnimationFrame(animation);
                } else {
                    // Enhanced smooth scroll for desktop
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Add a small delay to ensure the scroll completes before highlighting
                setTimeout(() => {
                    aboutSection.classList.add('highlight-section');
                    setTimeout(() => aboutSection.classList.remove('highlight-section'), 3000);
                }, 1200);
            };
            
            // Add both click and touch events
            mobileAboutLink.addEventListener('click', handleMobileAboutClick);
            mobileAboutLink.addEventListener('touchend', handleMobileAboutClick);
        }
        
        // Handle all about links (including desktop navigation)
        const allAboutLinks = document.querySelectorAll('a[href="#about"]');
        allAboutLinks.forEach(link => {
            if (link !== mobileAboutLink) { // Skip the one we already handled
                const handleAboutLinkClick = function(e) {
                    e.preventDefault(); // Prevent default anchor behavior
                    
                    // Add haptic feedback for mobile
                    if (window.navigator && window.navigator.vibrate) {
                        window.navigator.vibrate(30);
                    }
                    
                    // Add button animation
                    this.classList.add('bounce-in');
                    setTimeout(() => this.classList.remove('bounce-in'), 800);
                    
                    // Add more space for better visibility and ensure top section is visible
                    const targetPosition = aboutSection.offsetTop - 110;
                    
                    // Add scroll animation class
                    aboutSection.classList.add('pulse-glow');
                    setTimeout(() => aboutSection.classList.remove('pulse-glow'), 2000);
                    
                    // Enhanced scroll behavior for mobile
                    if ('ontouchstart' in window) {
                        // Smooth scroll with mobile optimization
                        const startPosition = window.pageYOffset;
                        const distance = targetPosition - startPosition;
                        const duration = 1000;
                        let start = null;
                        
                        function animation(currentTime) {
                            if (start === null) start = currentTime;
                            const timeElapsed = currentTime - start;
                            const run = ease(timeElapsed, startPosition, distance, duration);
                            window.scrollTo(0, run);
                            if (timeElapsed < duration) requestAnimationFrame(animation);
                        }
                        
                        function ease(t, b, c, d) {
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t + b;
                            t--;
                            return -c / 2 * (t * (t - 2) - 1) + b;
                        }
                        
                        requestAnimationFrame(animation);
                    } else {
                        // Enhanced smooth scroll for desktop
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                    
                    // Add a small delay to ensure the scroll completes before highlighting
                    setTimeout(() => {
                        aboutSection.classList.add('highlight-section');
                        setTimeout(() => aboutSection.classList.remove('highlight-section'), 3000);
                    }, 1200);
                };
                
                // Add both click and touch events
                link.addEventListener('click', handleAboutLinkClick);
                link.addEventListener('touchend', handleAboutLinkClick);
            }
        });
    }
}); 

// Enhanced Search Functionality with animations
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
            <div class="col-span-full text-center py-8 animate-on-scroll">
                <svg class="w-12 h-12 mx-auto text-gray-300 mb-4 floating" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <p class="text-gray-500">No drinks found matching "${searchInput.value}"</p>
                <p class="text-sm text-gray-400 mt-2">Try searching for a different term</p>
            </div>
        `;
        inlineSearchResults.classList.remove('hidden');
        return;
    }
    
    const resultsHTML = results.map((item, index) => `
        <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer animate-on-scroll" 
             style="animation-delay: ${index * 0.1}s;" 
             onclick="scrollToCategory('${item.categorySlug}')">
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-semibold text-secondary text-sm">${item.name}</h4>
                <span class="text-primary font-semibold text-sm">${item.price}</span>
            </div>
            <p class="text-gray-500 text-xs">${item.category}</p>
        </div>
    `).join('');
    
    inlineSearchResultsContent.innerHTML = resultsHTML;
    inlineSearchResults.classList.remove('hidden');
    
    // Trigger animations for search results
    setTimeout(() => {
        inlineSearchResultsContent.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('animate-in');
        });
    }, 100);
}

function scrollToCategory(categorySlug) {
    hideInlineSearchResults();
    
    // Find the category element
    const categoryElement = document.querySelector(`[data-category="${categorySlug}"]`);
    if (categoryElement) {
        // Add some space for better visibility
        const searchResultsHeight = inlineSearchResults.classList.contains('hidden') ? 0 : inlineSearchResults.offsetHeight;
        const targetPosition = categoryElement.offsetTop - searchResultsHeight + 20;
        
        // Add animation class
        categoryElement.classList.add('pulse-glow');
        setTimeout(() => categoryElement.classList.remove('pulse-glow'), 2000);
        
        // Smooth scroll to the category
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Highlight the category button with animation
        const categoryBtn = document.querySelector(`[data-category="${categorySlug}"]`);
        if (categoryBtn) {
            // Remove active class from all buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-primary', 'text-white', 'font-semibold');
                btn.classList.add('bg-white', 'text-text', 'font-medium');
            });
            
            // Add active class to the target category button with animation
            categoryBtn.classList.add('active', 'bounce-in');
            categoryBtn.classList.remove('bg-white', 'text-text', 'font-medium');
            categoryBtn.classList.add('bg-primary', 'text-white', 'font-semibold');
            
            setTimeout(() => categoryBtn.classList.remove('bounce-in'), 800);
        }
    }
}

// Event listeners for search functionality
inlineSearchClose.addEventListener('click', hideInlineSearchResults);

// Search input event listener with enhanced feedback
searchInput.addEventListener('input', (e) => {
    e.stopPropagation();
    searchMenu(e.target.value);
    
    // Add input animation
    if (e.target.value.length > 0) {
        searchInput.classList.add('glow');
    } else {
        searchInput.classList.remove('glow');
    }
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

// Add scroll-triggered animations for sections with mobile optimization
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
            section.classList.add('animate-in');
            
            // Add mobile-specific scroll animations
            if ('ontouchstart' in window) {
                section.style.animation = 'fadeInUp 0.8s ease-out';
            }
        }
    });
    
    // Add mobile-specific scroll effects
    if ('ontouchstart' in window) {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.3;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// Add enhanced animations for mobile devices
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-link');
    const callButtons = document.querySelectorAll('a[href*="tel:"]');
    const logos = document.querySelectorAll('.logo-shine-container');
    
    // Add floating animation to social media icons with mobile optimization
    socialIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.classList.add('floating');
        
        // Add mobile-specific touch effects
        if ('ontouchstart' in window) {
            icon.addEventListener('touchstart', () => {
                icon.style.animation = 'none';
                icon.style.transform = 'scale(0.9)';
            });
            
            icon.addEventListener('touchend', () => {
                icon.style.animation = '';
                icon.style.transform = '';
            });
        }
    });
    
    // Add heartbeat animation to call buttons with mobile optimization
    callButtons.forEach(button => {
        button.classList.add('heartbeat');
        
        // Add mobile-specific touch effects
        if ('ontouchstart' in window) {
            button.addEventListener('touchstart', () => {
                button.style.animation = 'none';
                button.style.transform = 'scale(0.95)';
                
                // Add haptic feedback
                if (window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate(50);
                }
            });
            
            button.addEventListener('touchend', () => {
                button.style.animation = '';
                button.style.transform = '';
            });
        }
    });
    
    // Add enhanced logo interactions
    logos.forEach(logo => {
        if ('ontouchstart' in window) {
            // Touch events for mobile
            logo.addEventListener('touchstart', () => {
                logo.classList.add('shake');
                logo.style.transform = 'scale(0.98)';
            });
            
            logo.addEventListener('touchend', () => {
                logo.style.transform = '';
            });
            
            logo.addEventListener('animationend', () => {
                logo.classList.remove('shake');
            });
        } else {
            // Mouse events for desktop
            logo.addEventListener('mouseenter', () => {
                logo.classList.add('shake');
            });
            
            logo.addEventListener('animationend', () => {
                logo.classList.remove('shake');
            });
        }
    });
    
    // Add mobile-specific entrance animations
    if ('ontouchstart' in window) {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-in');
                element.style.animation = 'slideInUp 0.8s ease-out';
            }, index * 100);
        });
    }
}); 

// Add animation classes to elements automatically
function addAnimationClasses() {
    // Add animation classes to table rows
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach((row, index) => {
        row.classList.add('animate-on-scroll', 'fade-up');
        row.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animation classes to menu categories
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach((category, index) => {
        if (!category.classList.contains('animate-on-scroll')) {
            category.classList.add('animate-on-scroll', 'fade-up');
            category.style.animationDelay = `${index * 0.2}s`;
        }
    });
    
    // Add animation classes to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll', 'fade-left');
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animation classes to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.classList.add('animate-on-scroll', 'zoom-in');
        link.style.animationDelay = `${index * 0.2}s`;
    });
}

// Call the function after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addAnimationClasses();
}); 