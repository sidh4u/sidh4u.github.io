// Define your username and full name
const userName = "sidh4u";
const fullName = "Sidhartha Mandal"; // Add your full name here

// home-link - terminal style with typing effect
document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");

    if (homeLink) {
        // Construct the terminal prompt dynamically
        const fixedPrompt = `
            <span class="blue-text">~/work/${userName}.github.io</span>
            <span class="white-text">&#8202;&#8202;(</span>
            <span class="orange-text">main</span>
            <span class="white-text">&#8202;=)</span>
            <span class="blue-text">&#8202;&#8202;>_</span>
        `;

        // Inject the terminal prompt into the home link
        homeLink.innerHTML = fixedPrompt;
    }

    // Typing effect for Linux commands. Must keep a space at the end of each line
    const phrases = [
        "Hi, There! ",
        "I'm a DevOps Architect ",
        "Architecting tomorrow’s infrastructure ",
        "Automation is my second language ",
        "Tech evolves, and so do I ",
        "Fueled by tech, driven by curiosity "
    ];

    const typedText = document.getElementById("typed-text");
    let phraseIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            // Deleting characters
            typedText.innerHTML = currentPhrase.substring(0, letterIndex--);
        } else {
            // Typing characters
            typedText.innerHTML = currentPhrase.substring(0, letterIndex++);
        }

        // If typing is complete
        if (!isDeleting && letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
        }
        // If deleting is complete
        else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
            setTimeout(type, 300); // Pause before typing the next phrase
        }
        // Continue typing or deleting
        else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    // Start the typing animation
    type();
});


// Dynamically set Blogs, Email, LinkedIn, and GitHub links
document.addEventListener("DOMContentLoaded", function () {
    const linkedinLink = document.getElementById("linkedin-link");
    const githubLink = document.getElementById("github-link");
    const emailLink = document.getElementById("email-link");
    const blogsLink = document.getElementById("blogs-link");

    if (linkedinLink) {
        linkedinLink.href = `https://linkedin.com/in/${userName}`;
    }
    if (githubLink) {
        githubLink.href = `https://github.com/${userName}`;
    }
    if (emailLink) {
        emailLink.href = `mailto:${userName}@gmail.com`;
    }
    if (blogsLink) {
        // Determine the relative path to blogs.html
        const currentPath = window.location.pathname;
        const isInSubFolder = currentPath.includes("/notes/");

        // Set the href dynamically based on the current path
        blogsLink.href = isInSubFolder ? "../notes.html" : "notes.html";
    }
});


// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


// Dynamically set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});


// Replace all placeholders for fullName in the HTML
document.addEventListener("DOMContentLoaded", function () {
    const namePlaceholders = document.querySelectorAll("[data-fullname]");
    namePlaceholders.forEach(element => {
        element.textContent = fullName;
    });
});


// Prevent right-click and text selection on the entire document
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });
});
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
document.addEventListener('mousedown', function (e) {
    e.preventDefault();
});


// CV Download Link
document.addEventListener("DOMContentLoaded", function () {
    const cvDownloadLink = document.getElementById("cv-download-link");
    if (cvDownloadLink) {
        // Set the href attribute to the PDF file path
        cvDownloadLink.href = "files/Sidhartha_Mandal.pdf";
    }
});