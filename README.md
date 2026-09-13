# Abdullah Travels 🌍

**Explore More. Travel Better.**

Abdullah Travels is a responsive static travel agency website developed as part of a Web Technologies assignment. The website provides users with information about travel destinations, packages, a photo gallery, and a contact form.

The project is built using **HTML, CSS, and JavaScript** without any backend, database, or frontend framework.

---

## 📌 Project Overview

Abdullah Travels is designed as a modern travel agency website where users can:

* Explore popular travel destinations
* Learn more about the travel agency
* Browse available travel packages
* View travel destinations through an interactive gallery
* Contact the travel agency through a validated contact form
* Navigate the website using a responsive navigation menu

The website is fully responsive and designed to work on desktop, tablet, and mobile screen sizes.

---

## ✨ Features

### 🏠 Home Page

The Home page includes:

* Responsive navigation bar
* Hero section with travel video
* Travel agency tagline
* Popular destinations
* Why Choose Us section
* Featured travel packages
* Call-to-action section
* Responsive footer

### 📖 About Page

The About page contains:

* Introduction to Abdullah Travels
* Company mission
* Travel experience highlights
* Why choose Abdullah Travels
* Company statistics
* Call-to-action section

### 🧳 Packages Page

The Packages page displays different travel packages including:

* Swat Valley Escape
* Istanbul Discovery
* Dubai Adventure
* Northern Pakistan
* Turkey Explorer
* Dubai Luxury Escape

Each package contains:

* Destination
* Duration
* Number of travelers
* Price
* Included services
* Booking button

### 🖼️ Gallery Page

The Gallery page provides an interactive collection of travel images.

Features include:

* CSS Grid image layout
* Image hover effects
* Destination labels
* Responsive gallery
* Interactive JavaScript lightbox
* Enlarged image preview
* Close button
* Outside-click close
* Escape-key close

### 📩 Contact Page

The Contact page provides:

* Contact information
* Email and phone details
* Working hours
* Contact form
* Form validation
* Error messages
* Success message

---

## ⚡ JavaScript Features

JavaScript is used throughout the website to provide interactive functionality.

### 1. Responsive Navigation

The hamburger menu allows users on smaller screens to open and close the navigation menu.

### 2. Navbar Scroll Effect

The navigation bar changes appearance when the user scrolls down the page.

### 3. Hero Video Fallback

If the travel video cannot be loaded, JavaScript hides the video so the fallback background image remains visible.

### 4. Gallery Lightbox

Clicking a gallery image opens it in an enlarged modal.

The lightbox can be closed by:

* Clicking the close button
* Clicking outside the image
* Pressing the `Escape` key

### 5. Contact Form Validation

The contact form checks:

* Name
* Email
* Phone number
* Subject
* Message

Invalid fields display appropriate error messages, while valid submissions display a success message.

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **CSS Flexbox**
* **CSS Grid**
* **Responsive Web Design**
* **Git**
* **GitHub**
* **VS Code**
* **Live Server**

---

## 📁 Project Structure

```text
Abdullah-Travels/
│
├── index.html
├── about.html
├── packages.html
├── gallery.html
├── contact.html
├── README.md
│
├── styles/
│   ├── home.css
│   ├── about.css
│   ├── packages.css
│   ├── gallery.css
│   └── contact.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero/
│   │   ├── travel-fallback.jpg
│   │   └── cta-travel.jpg
│   │
│   ├── destinations/
│   │   ├── pakistan.jpg
│   │   ├── turkey.jpg
│   │   └── dubai.jpg
│   │
│   └── packages/
│       ├── swat.jpg
│       ├── istanbul.jpg
│       └── dubai.jpg
│
└── videos/
    └── travel.mp4
```

---

## 📱 Responsive Design

The website is designed to adapt to different screen sizes.

### Desktop

* Full navigation menu
* Multi-column layouts
* Large hero sections
* Grid-based package and gallery sections

### Tablet

* Adjusted grid layouts
* Reduced spacing
* Responsive content sections

### Mobile

* Hamburger navigation
* Single-column layouts
* Mobile-friendly forms
* Responsive images
* Adjusted typography and spacing

---

## 🎨 Design

The website uses a modern travel-inspired design with:

* Navy/dark blue backgrounds
* Orange accent color
* White text
* Clean cards
* Rounded corners
* Hover animations
* Responsive layouts

### Main Colors

```text
Dark Navy: #0f172a
Orange:    #f59e0b
Light BG:  #f8fafc
Text:      #0f172a
Gray Text: #64748b
```

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/AbdullahImran10/Abdullah-Travels.git
```

### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Run with Live Server

Install the **Live Server** extension in VS Code if it is not already installed.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

The website will open in your browser.

---

## 🔀 Git Workflow

The project was developed using Git feature branches.

Example feature branches include:

```text
main
feature-home
feature-javascript
feature-about
feature-packages
feature-gallery
feature-contact
```

Each major feature/page was developed on its own branch and then merged into the `main` branch.

Example workflow:

```bash
git switch -c feature-gallery

git add .
git commit -m "Build gallery with interactive lightbox"

git push -u origin feature-gallery

git switch main
git pull origin main

git merge feature-gallery

git push origin main
```

---

## 📚 Learning Objectives

This project demonstrates understanding of:

* HTML5 structure
* Semantic HTML
* CSS styling
* CSS Flexbox
* CSS Grid
* Responsive web design
* JavaScript DOM manipulation
* JavaScript event listeners
* Form validation
* Modal/lightbox functionality
* Responsive navigation
* Git version control
* GitHub repositories
* Feature branching
* Merging branches

---

## 🎯 Assignment Requirements Covered

| Requirement               | Status |
| ------------------------- | ------ |
| Multiple HTML pages       | ✅      |
| Semantic HTML5            | ✅      |
| External CSS              | ✅      |
| Flexbox                   | ✅      |
| CSS Grid                  | ✅      |
| Responsive design         | ✅      |
| Navigation between pages  | ✅      |
| Forms                     | ✅      |
| Lists                     | ✅      |
| JavaScript functionality  | ✅      |
| Form validation           | ✅      |
| Interactive gallery       | ✅      |
| Responsive hamburger menu | ✅      |
| Git feature branches      | ✅      |
| GitHub repository         | ✅      |

---

## 👨‍💻 Author

**Abdullah Imran**

Web Technologies Assignment

**Abdullah Travels**

> Explore More. Travel Better. 🌍
