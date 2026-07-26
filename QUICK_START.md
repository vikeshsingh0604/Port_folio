# Quick Start Guide - Portfolio Setup

## What's Been Created

Your professional portfolio website has been created with the following structure:

### 📄 Files Created:
- ✅ `index.html` - Main page with About, Experience, Resume sections
- ✅ `contact.html` - Contact page with form
- ✅ `css/styles.css` - Main styling (dark theme with gold accents)
- ✅ `css/contact.css` - Contact page styling
- ✅ `js/script.js` - Main functionality and navigation
- ✅ `js/contact.js` - Contact form handler
- ✅ `README.md` - Full documentation

### 📁 Folder Structure:
```
PortFolio/
├── index.html
├── contact.html
├── css/
│   ├── styles.css
│   └── contact.css
├── js/
│   ├── script.js
│   └── contact.js
├── assets/
│   └── images/
└── README.md
```

---

## 🎯 Next Steps to Personalize Your Portfolio

### 1. **Add Your Profile Picture** (IMPORTANT)
- Replace the placeholder at: `assets/images/profile.jpg`
- Recommended size: 200x200 pixels (square image)
- The image should be a professional headshot or clear profile picture

### 2. **Update Your Social Links**
Open both `index.html` and `contact.html`, find these sections and replace with your actual links:

```html
<!-- In sidebar -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
<a href="https://twitter.com/YOUR_HANDLE" target="_blank">
```

### 3. **Add Your Resume PDF**
- Save your resume as: `assets/Vikesh_Kumar_Singh_Resume.pdf`
- Or update the filename in line ~233 of `index.html` to match yours

### 4. **Customize Email & Phone (Already Done!)**
Your contact information has been added:
- ✅ Email: Vikeshsingh0604@gmail.com
- ✅ Phone: +91-7428285636

---

## 🚀 Testing Locally

### Option 1: Using Python (Easiest)
```bash
# Navigate to your portfolio folder
cd /Users/vikashsingh/Desktop/Vikesh/PortFolio

# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: Using Node.js
```bash
# If you have Node.js installed
npx http-server
```

### Option 3: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Click "Open with Live Server"

---

## 🎨 Customizing Colors

Want to change the color scheme? Edit `css/styles.css` and update these values:

```css
:root {
    --accent-gold: #d4a574;        /* Change gold color */
    --primary-bg: #1a1a1a;         /* Change dark background */
    --secondary-bg: #2a2a2a;       /* Change lighter background */
    --text-primary: #ffffff;       /* Text color */
    --text-secondary: #b0b0b0;    /* Secondary text color */
}
```

### Popular Color Schemes:
- **Blue Theme**: `#4a90e2` (accent), `#1a1a2e` (bg)
- **Purple Theme**: `#9d4edd` (accent), `#10002b` (bg)
- **Green Theme**: `#2ecc71` (accent), `#1a1a1a` (bg)
- **Orange Theme**: `#ff6b35` (accent), `#1a1a1a` (bg)

---

## 📝 Content Updates

### Update Your About Section
In `index.html`, find `<article id="about">` and update:
- Professional summary
- Skills description
- Education details

### Add More Projects
In Experience section, add more project cards by copying this structure:

```html
<li class="skill-card">
    <div class="skill-icon">
        <i class="fas fa-project-diagram"></i>
    </div>
    <div class="skill-info">
        <h4>Project Name</h4>
        <p>Project description here</p>
    </div>
</li>
```

### Update Education
Find the education list and modify dates/institutions:

```html
<li class="education-item">
    <div class="edu-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <div class="edu-info">
        <h4>Your Degree</h4>
        <div>
            <p>2021 – 2024</p>
            <p><strong>Your University</strong>, City, Country</p>
        </div>
    </div>
</li>
```

---

## 📧 Setting Up Contact Form Email

Currently, the contact form shows a success message but doesn't send emails. To enable email sending:

### Option 1: Use Formspree (Recommended - Free)
1. Visit https://formspree.io
2. Sign up and create a new form
3. In `contact.html`, update the form:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
```

### Option 2: Use EmailJS (JavaScript-based)
1. Visit https://www.emailjs.com
2. Set up an account and service
3. Add EmailJS script to `contact.html`

### Option 3: Use a Backend Service
Set up your own backend (Node.js, Python, etc.) to handle email sending.

---

## 🌐 Deploying Your Portfolio

### Option 1: GitHub Pages (Free, Recommended)
```bash
# 1. Create GitHub repository named "Portfolio"
# 2. Clone it locally
# 3. Copy all files into the folder
# 4. Commit and push:
git add .
git commit -m "Initial portfolio commit"
git push origin main

# 5. Go to GitHub Settings → Pages
# 6. Select main branch and save
# Your site will be at: https://username.github.io/Portfolio/
```

### Option 2: Vercel (Free)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

### Option 3: Netlify (Free)
1. Go to https://www.netlify.com
2. Drag and drop your portfolio folder
3. Your site is live!

---

## ✅ Checklist Before Deployment

- [ ] Added profile picture (200x200px)
- [ ] Updated name and title
- [ ] Updated email and phone
- [ ] Added GitHub and LinkedIn links
- [ ] Updated about section with your bio
- [ ] Added your work experience
- [ ] Updated education details
- [ ] Added your skills
- [ ] Tested on mobile devices
- [ ] Set up contact form email (optional)
- [ ] Checked all links work correctly
- [ ] Verified images load properly

---

## 🐛 Troubleshooting

**Q: Images not showing?**
A: Check that `profile.jpg` is in `assets/images/` folder

**Q: Navigation not working?**
A: Make sure `index.html` and `contact.html` are in the root folder

**Q: Form not submitting?**
A: Check browser console (F12) for errors; set up Formspree or backend

**Q: Styles look different?**
A: Clear browser cache (Ctrl+Shift+Delete)

---

## 📚 Helpful Resources

- [Font Awesome Icons](https://fontawesome.com/icons) - Find more icons
- [CSS Colors](https://www.w3schools.com/colors/colors_hex.asp) - Hex color codes
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML) - HTML documentation
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS) - CSS documentation

---

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your skills and projects. 

**Next Steps:**
1. Add your profile picture
2. Customize your content
3. Test locally
4. Deploy to GitHub Pages or Netlify

Good luck with your portfolio! 🚀
