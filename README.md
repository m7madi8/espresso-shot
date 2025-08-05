# Espresso Shot - Restaurant Menu Interface

A clean, modern, and elegant restaurant menu interface inspired by contemporary café design. Built with HTML, TailwindCSS, and vanilla JavaScript for optimal performance and responsiveness.

## 🎨 Design Features

- **Light Theme**: Warm tones with soft shadows for a cozy café atmosphere
- **Elegant Typography**: Modern Inter font family for clean readability
- **Minimalist UI**: Clear spacing and visual hierarchy throughout
- **Responsive Design**: Mobile-first approach with seamless desktop experience

## 🎯 Brand Colors

- **Primary**: #D9A05B (Elegant Golden)
- **Secondary**: #1A1A1A (Elegant Dark Black)
- **Background**: #F9F9F9 (Clean White-Gray)
- **Accent**: #FFB84C (Apricot Gold)
- **Text**: #555555 (Comfortable Gray for Reading)
- **Border**: #E0E0E0 (Light Gray for Subtle Dividers)

## 📱 Page Structure

### Hero Section
- Restaurant logo and branding
- Compelling tagline and introduction
- Gradient background with brand colors

### Category Navigation
- Horizontal scrollable category slider
- Interactive category filtering
- Smooth hover and active states

### Menu Grid
- Responsive card layout (1-3 columns based on screen size)
- Each item includes:
  - Placeholder image area with gradient backgrounds
  - Item title and price
  - Descriptive text
  - Availability status

### Sticky Bottom Navigation
- Fixed navigation bar for mobile users
- Home, Menu, Contact, and Profile sections
- Active state indicators

## 🛠️ Technical Features

### Responsive Design
- Mobile-first approach
- Breakpoints: Mobile (default), Tablet (md), Desktop (lg)
- Flexible grid system that adapts to screen size

### Interactive Elements
- Category filter buttons with smooth transitions
- Hover effects on menu cards (lift animation)
- Smooth scrolling category slider
- Loading animations for menu items

### Performance Optimizations
- CDN-hosted TailwindCSS for fast loading
- Optimized images and assets
- Minimal JavaScript for enhanced interactions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - runs directly in browser

### Installation
1. Clone or download the project files
2. Ensure `logo.png` is in the root directory
3. Open `index.html` in your web browser

### File Structure
```
espresso-shot/
├── index.html          # Main HTML file
├── logo.png           # Restaurant logo
└── README.md          # Project documentation
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Customization

### Colors
Modify the TailwindCSS configuration in the `<script>` tag within `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#D9A05B',    // Elegant Golden
                secondary: '#1A1A1A',  // Elegant Dark Black
                background: '#F9F9F9', // Clean White-Gray
                accent: '#FFB84C',     // Apricot Gold
                text: '#555555',       // Comfortable Gray for Reading
                border: '#E0E0E0'      // Light Gray for Subtle Dividers
            }
        }
    }
}
```

### Content
- Replace placeholder emojis with actual food images
- Update menu items, descriptions, and prices
- Modify restaurant name and tagline in the hero section
- Add or remove category buttons as needed

### Styling
- Custom CSS classes are defined in the `<style>` section
- Modify hover effects, transitions, and animations
- Adjust spacing and typography as needed

## 🔧 Future Enhancements

- **Image Integration**: Replace emoji placeholders with actual food photography
- **Search Functionality**: Add search bar for menu items
- **Filtering**: Implement actual category filtering logic
- **Animations**: Add more sophisticated loading and transition animations
- **Accessibility**: Enhance keyboard navigation and screen reader support
- **PWA Features**: Add offline support and app-like experience

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve this project.

---

**Note**: This is a front-end only implementation designed for portfolio and demonstration purposes. No backend functionality or ordering system is included. 