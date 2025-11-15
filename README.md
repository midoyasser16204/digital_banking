# Digitalbank Website

Digitalbank is a modern, responsive digital banking website. It provides users with information about the bank, its services, blog articles, career opportunities, and a contact form for inquiries. The website is built using **HTML, CSS, and JavaScript** with a focus on responsive design and user-friendly navigation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Pages](#pages)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Digitalbank offers a clean and modern interface for users to explore digital banking services. The website includes:

- Informative **Home, About, Blog, Careers, and Contact** pages.
- Responsive **hero sections** with desktop and mobile backgrounds.
- Interactive elements like a **scroll-to-top button**, contact form validation, and menu toggle for mobile devices.
- A consistent **header and footer** with social icons, navigation links, and call-to-action buttons.

---

## Pages

1. **Home Page**
   - Introduces Digitalbank and highlights key features.
   - Sections include hero, features, latest articles, and call-to-action.

2. **About Page**
   - Describes the mission, values, and services of Digitalbank.
   - Includes visual cards for values and services.

3. **Blog Page**
   - Lists featured articles with images, author info, and publication date.
   - Sidebar for recent posts and call-to-action to join Digitalbank.

4. **Careers Page**
   - Lists open job positions with descriptions and tags.
   - Includes benefits and a call-to-action for potential applicants.

5. **Contact Page**
   - Contact information (address, phone, email, business hours).
   - Contact form with validation for name, email, subject, and message.

---

## Features

- **Responsive Design** for desktop and mobile devices.
- **Interactive Contact Form** with validation messages.
- **Sticky Header** with menu toggle for mobile navigation.
- **Scroll-to-Top Button** for easy navigation.
- **Reusable Header and Footer** structure across all pages.
- **Hero Sections** with background images and phone mockups.
- **Blog & Career Listings** with detailed cards and metadata.

---

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Font Awesome 6.4.0** for icons
- **Responsive Design** with CSS media queries

---

## Project Structure

```
digital_banking/
│
├── index.html
│
├── assets/
│   ├── bg-intro-desktop.svg
│   ├── bg-intro-mobile.svg
│   │
│   ├── general/
│   │   ├── general.css
│   │   └── general.js
│   │
│   ├── icons/
│   │   ├── icon-api.svg
│   │   ├── icon-budgeting.svg
│   │   ├── icon-close.svg
│   │   ├── icon-facebook.svg
│   │   ├── icon-hamburger.svg
│   │   ├── icon-instagram.svg
│   │   ├── icon-onboarding.svg
│   │   ├── icon-online.svg
│   │   ├── icon-pinterest.svg
│   │   ├── icon-twitter.svg
│   │   ├── icon-youtube.svg
│   │   ├── logo-dark.svg
│   │   └── logo-light.svg
│   │
│   └── images/
│       ├── favicon-32x32.png
│       ├── image-confetti.jpg
│       ├── image-currency.jpg
│       ├── image-mockups.png
│       ├── image-plane.jpg
│       └── image-restaurant.jpg
│
└── pages/
    ├── home/
    │   ├── home.html
    │   └── home.css
    │
    ├── about/
    │   ├── about.html
    │   └── about.css
    │
    ├── blog/
    │   ├── blog.html
    │   └── blog.css
    │
    ├── careers/
    │   ├── careers.html
    │   ├── careers.css
    │   └── careers.js
    │
    └── contact/
        ├── contact.html
        ├── contact.css
        └── contact.js
```

---

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/digitalbank.git
```

2. Navigate to the project directory:

```bash
cd digital_banking
```

3. Open the `pages/home/home.html` file in your preferred web browser to start exploring the website.

4. Ensure that the folder structure remains intact so all images, CSS, and JS files load correctly.

**Alternative**: Use a local development server like **Live Server** (VS Code extension) for better development experience.

---

## Usage

- Navigate through the website using the header links.
- Click **Request Invite** buttons to simulate the signup CTA.
- Use the **Contact page** to fill out the contact form (form validation is enabled via `contact.js`).
- Scroll down and use the **scroll-to-top** button to quickly return to the top.
- Toggle the **hamburger menu** on mobile devices to access navigation.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or suggestions, please reach out via the [Contact Page](pages/contact/contact.html) or open an issue on GitHub.

---

## Future Enhancements

- Backend integration for contact form submissions
- User authentication and account management
- Integration with banking APIs
- Enhanced accessibility features
- Dark mode toggle
- Multi-language support
