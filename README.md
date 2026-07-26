# Vikesh Kumar Singh - Portfolio Website

A professional and modern portfolio website built with HTML, CSS, and JavaScript. Inspired by modern portfolio designs with a dark theme and gold accents.

## Features

✨ **Modern Design** - Dark theme with gold accent colors  
📱 **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices  
🎯 **Multiple Sections** - About, Experience, Resume, and Contact pages  
✉️ **Contact Form** - Functional contact form with validation  
🎨 **Smooth Animations** - Beautiful fade-in and hover effects  
⚡ **Fast & Lightweight** - No external dependencies (except Font Awesome for icons)  

## Project Structure

```
PortFolio/
├── index.html              # Main page (About, Experience, Resume)
├── contact.html            # Contact page
├── css/
│   ├── styles.css         # Main stylesheet
│   └── contact.css        # Contact page specific styles
├── js/
│   ├── script.js          # Main JavaScript functionality
│   └── contact.js         # Contact form handler
├── assets/
│   ├── images/
│   │   └── profile.jpg    # Your profile picture
│   └── Vikesh_Kumar_Singh_Resume.pdf  # Your resume
└── README.md              # This file
```

## Getting Started

### 1. Add Your Profile Picture
- Replace `assets/images/profile.jpg` with your own profile picture (recommended size: 200x200px)

### 2. Update Personal Information
Open `index.html` and update the following sections with your information:
- Name and title in the sidebar
- Email and phone number
- GitHub and LinkedIn links
- Personal description and bio

### 3. Add Your Resume
- Place your resume PDF in `assets/Vikesh_Kumar_Singh_Resume.pdf`
- Update the filename if different

### 4. Customize Colors (Optional)
Edit `css/styles.css` to change the color scheme:
```css
:root {
    --accent-gold: #d4a574;        /* Main accent color */
    --accent-gold-light: #e8bfa0;  /* Light accent color */
    --primary-bg: #1a1a1a;         /* Background color */
    --secondary-bg: #2a2a2a;       /* Secondary background */
    /* ... other colors ... */
}
```

## Sections

### About Page (index.html)
- Personal introduction
- What I'm doing (skills overview)
- Education details
- Skills list

### Experience Page
- Work experience timeline
- Professional certifications
- Tools and technologies

### Resume Page
- Full resume content
- Education details
- Projects
- Skills summary

### Contact Page (contact.html)
- Contact information cards
- Social media links
- Contact form with validation

## Customization Guide

### Update Navigation Links
Edit the links in both `index.html` and `contact.html` if you deploy this on a different platform or change your GitHub/LinkedIn URLs.

### Modify Section Content
All content is in the HTML files. Search for the section you want to edit:
- **About**: `<article id="about">`
- **Experience**: `<article id="experience">`
- **Resume**: `<article id="resume">`

### Add More Skills
Add new skill cards in the "What I'm Doing" section:
```html
<li class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="skill-info">
        <h4>Skill Name</h4>
        <p>Skill description</p>
    </div>
</li>
```

### Add More Work Experience
Add new experience items:
```html
<li class="experience-item">
    <div class="experience-header">
        <h4>Job Title</h4>
        <p><strong>Company Name</strong> – City, Country</p>
    </div>
    <div class="experience-details">
        <p><strong>Duration:</strong> Start Date – End Date</p>
        <ul>
            <li>Your responsibility or achievement</li>
        </ul>
    </div>
</li>
```

## Icons

This project uses [Font Awesome 6.0](https://fontawesome.com) for icons. You can add more icons by:

1. Visit Font Awesome website
2. Find the icon you want (e.g., `fa-code`)
3. Add it to your HTML: `<i class="fas fa-code"></i>`

Common icons used:
- `fa-database` - Database/SQL
- `fa-chart-bar` - Data/Analytics
- `fa-python` - Python
- `fa-brain` - AI/ML
- `fa-envelope` - Email
- `fa-phone` - Phone
- `fa-github` - GitHub
- `fa-linkedin` - LinkedIn

## Contact Form

The contact form includes:
- Name validation
- Email validation
- Message minimum length check
- Success/error messages

Currently, the form displays a success message locally. To send emails:

### Using a Backend Service (Recommended)
1. Update the `contact.js` file to use a backend API
2. Services like Formspree, EmailJS, or a custom Node.js backend can be used

### Using Formspree (Easy Setup)
1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Update the form in `contact.html` with the Formspree action

## Deployment

### GitHub Pages
1. Create a new repository named `Portfolio` on GitHub
2. Clone the repository locally
3. Copy all files from this project into the repository
4. Push to GitHub
5. Enable GitHub Pages in repository settings
6. Your site will be available at `https://yourusername.github.io/Portfolio/`

### Other Hosting Platforms
- **Vercel** - Zero-config deployment
- **Netlify** - Easy drag-and-drop deployment
- **Firebase Hosting** - Free hosting with Google
- **Traditional Hosting** - Upload files via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight HTML, CSS, and JavaScript
- No heavy dependencies
- Optimized for fast loading
- Responsive images

## SEO Optimization

To improve search engine visibility:

1. Update the `<title>` tag in both HTML files
2. Add meta descriptions: `<meta name="description" content="...">`
3. Add meta keywords: `<meta name="keywords" content="...">`
4. Ensure proper heading hierarchy
5. Use semantic HTML elements

Example:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Vikesh Kumar Singh - Data Analyst & Tech Enthusiast Portfolio">
    <meta name="keywords" content="data analyst, python, sql, power bi, portfolio">
    <title>Vikesh Kumar Singh - Portfolio</title>
</head>
```

## Troubleshooting

### Navigation not working
- Check that all filenames match exactly (case-sensitive on Linux/Mac)
- Verify links in navigation use correct paths

### Images not showing
- Ensure image files are in `assets/images/` folder
- Check image filenames match exactly in HTML

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Verify CSS file paths are correct
- Check for browser console errors (F12)

### Form not submitting
- Check browser console for errors (F12)
- Verify all form inputs have `required` attributes
- For email service, check your backend configuration

## License

Feel free to use this template for your personal portfolio!

## Support

If you have any questions or issues, feel free to reach out:
- Email: Vikeshsingh0604@gmail.com
- Phone: +91-7428285636

---

**Made with ❤️ by Vikesh Kumar Singh**
