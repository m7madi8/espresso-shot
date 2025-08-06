// Translation system for Espresso Shot
const translations = {
    en: {
        // Navigation
        menu: "Our Menu Categories",
        about: "About",
        contact: "Call Us",
        
        // Hero Section
        heroTitle: "Welcome to Espresso Shot",
        experienceBlend: "Experience the perfect blend of tradition and innovation",
        discoverMenu: "Discover our carefully crafted menu featuring fresh ingredients, bold flavors, and culinary excellence in every dish.",
        experienceBlendText: "Experience the perfect blend of tradition and innovation.",
        heroSubtitle: "Welcome to Espresso Shot",
        orderNow: "Order Now",
        viewMenu: "View Menu",
        
        // Menu Categories
        allItems: "All Items",
        espressoShot: "Espresso Shot",
        milkCoffee: "Milk Coffee",
        sweetCoffee: "Sweet Coffee",
        specialDrinks: "Special Drinks",
        refreshers: "Refreshers",
        iceTeaJuice: "Ice Tea & Juice",
        smoothie: "Smoothie",
        healthy: "The Healthy Menu",
        mojito: "Mojito",
        frappe: "Frappe",
        
        // About Section
        aboutTitle: "Our Story",
        aboutSubtitle: "Premium Coffee Experience",
        aboutDescription: "Where passion meets perfection in every cup.",
        
        // Contact Section
        contactTitle: "Get in Touch",
        contactSubtitle: "We'd love to hear from you",
        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send Message",
        
        // Footer
        allRightsReserved: "All rights reserved.",
        designedBy: "Designed by",
        openingHours: "Opening Hours",
        whatMakesUsSpecial: "What Makes Us Special",
        ourBranches: "Our Branches",
        contactInfo: "Contact Info",
        exploreSelection: "Explore our diverse selection of carefully crafted beverages and discover your perfect drink",
        discoverStory: "Discover our story and passion for creating the perfect coffee experience",
        aboutEspressoShot: "About",
        
        // Common
        loading: "Loading...",
        close: "Close",
        open: "Open"
    },
    
    ar: {
        // Navigation
        menu: "فئات قائمتنا",
        about: "حول",
        contact: "اتصل بنا",
        
        // Hero Section
        heroTitle: "مرحباً بك في إسبريسو شوت",
        experienceBlend: "اختبر المزيج المثالي من التقاليد والابتكار",
        discoverMenu: "اكتشف قائمتنا المصنوعة بعناية والتي تتميز بالمكونات الطازجة والنكهات الجريئة والتميز الطهي في كل طبق.",
        experienceBlendText: "اختبر المزيج المثالي من التقاليد والابتكار.",
        heroSubtitle: "اختبر المزيج المثالي من التقاليد والابتكار",
        orderNow: "اطلب الآن",
        viewMenu: "عرض القائمة",
        
        // Menu Categories
        allItems: "جميع الأصناف",
        espressoShot: "قهوة إسبريسو",
        milkCoffee: "قهوة بالحليب",
        sweetCoffee: "قهوة حلوة",
        specialDrinks: "مشروبات خاصة",
        refreshers: "منعشات",
        iceTeaJuice: "شاي مثلج وعصائر",
        smoothie: "سموذي",
        healthy: "القائمة الصحية",
        mojito: "موجيتو",
        frappe: "فرابيه",
        
        // About Section
        aboutTitle: "قصتنا",
        aboutSubtitle: "تجربة قهوة فاخرة",
        aboutDescription: "حيث يلتقي الشغف بالكمال في كل فنجان.",
        
        // Contact Section
        contactTitle: "تواصل معنا",
        contactSubtitle: "نود أن نسمع منك",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        
        // Footer
        allRightsReserved: "جميع الحقوق محفوظة.",
        designedBy: "صمم بواسطة",
        openingHours: "ساعات العمل",
        whatMakesUsSpecial: "ما الذي يجعلنا مميزين",
        ourBranches: "فروعنا",
        contactInfo: "معلومات الاتصال",
        exploreSelection: "اكتشف مجموعتنا المتنوعة من المشروبات المصنوعة بعناية واكتشف مشروبك المثالي",
        discoverStory: "اكتشف قصتنا وشغفنا في خلق تجربة قهوة مثالية",
        aboutEspressoShot: "حول",
        
        // Common
        loading: "جاري التحميل...",
        close: "إغلاق",
        open: "فتح"
    }
};

// Language switcher functionality
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLang);
        this.createLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        // Create language switcher button
        const nav = document.querySelector('nav');
        if (nav) {
            const langSwitcher = document.createElement('button');
            langSwitcher.className = 'lang-switcher p-1.5 rounded-lg transition-all duration-300 flex items-center justify-center group relative overflow-hidden';
            langSwitcher.setAttribute('title', this.currentLang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
            langSwitcher.setAttribute('aria-label', this.currentLang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
            
            // Create the SVG icon with better styling
            const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages group-hover:scale-110 transition-transform duration-300">
                <path d="m5 8 6 6"/>
                <path d="m4 14 6-6 2-3"/>
                <path d="M2 5h12"/>
                <path d="M7 2h1"/>
                <path d="m22 22-5-10-5 10"/>
                <path d="M14 18h6"/>
            </svg>`;
            
            langSwitcher.innerHTML = svgIcon;
            langSwitcher.onclick = () => this.toggleLanguage();
            
            // Add ripple effect
            langSwitcher.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
            
            // Insert in the Action Buttons section, right before the mobile menu button
            const actionButtonsContainer = nav.querySelector('.flex.items-center.space-x-3');
            const mobileMenuBtn = nav.querySelector('#mobile-menu-btn');
            
            if (actionButtonsContainer && mobileMenuBtn) {
                // Insert right before the mobile menu button with minimal spacing
                actionButtonsContainer.insertBefore(langSwitcher, mobileMenuBtn);
                
                // Remove any default spacing between language switcher and mobile menu button
                langSwitcher.style.marginRight = '0.25rem';
                mobileMenuBtn.style.marginLeft = '0.25rem';
            } else if (actionButtonsContainer) {
                // If mobile menu button not found, append to the end
                actionButtonsContainer.appendChild(langSwitcher);
            }
        }
    }
    
    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.updateLanguage(newLang);
    }
    
    updateLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update document direction
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        this.translateElements();
        
        // Update language switcher button (icon stays the same)
        const langSwitcher = document.querySelector('.lang-switcher');
        if (langSwitcher) {
            // Icon remains the same, no text update needed
        }
    }
    
    translateElements() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[this.currentLang][key]) {
                element.textContent = translations[this.currentLang][key];
            }
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
}); 