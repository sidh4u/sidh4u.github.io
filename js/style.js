function initializeSite() {
    const userName = "sidh4u";
    const fullName = "Sidhartha Mandal";

    // Terminal prompt
    const homeLink = document.getElementById("home-link");
    const screenQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");

    if (homeLink) {
        homeLink.setAttribute("href", "/");

        const updatePrompt = () => {
            const tail = ">_";
            const promptHtml = [
                `<span class="prompt-path">~/${userName}.github.io</span>`,
                `<span class="prompt-paren">&nbsp;(</span>`,
                `<span class="prompt-branch">main </span>`,
                `<span class="prompt-equals">&nbsp;=</span>`,
                `<span class="prompt-close">)</span>`,
                `<span class="prompt-tail">&nbsp;${tail}</span>`
            ].join("");

            homeLink.innerHTML = promptHtml;
        };

        updatePrompt();

        if (typeof screenQuery.addEventListener === "function") {
            screenQuery.addEventListener("change", updatePrompt);
            tabletQuery.addEventListener("change", updatePrompt);
        } else if (typeof screenQuery.addListener === "function") {
            screenQuery.addListener(updatePrompt);
            tabletQuery.addListener(updatePrompt);
        }
    }

    // Typing animation
    const phrases = [
        "I'm a Technology Leader and DevOps Strategist ",
        "Shaping Cloud-Native and Multi-Cloud Platforms ",
        "Scaling AI/ML Infrastructure with GPUs ",
        "Driving DevOps, GitOps, and FinOps Transformation ",
        "Architecting Resilient, Scalable, and Observable Platforms ",
        "Enabling Innovation Through Strategy and Engineering ",
        "Building the Future of Intelligent Infrastructure "
    ];

    const typedText = document.getElementById("typed-text");

    if (typedText) {
        let phraseIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;
        let typingTimeout;

        const stopTyping = () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
                typingTimeout = undefined;
            }
            typedText.textContent = "";
        };

        const type = () => {
            if (screenQuery.matches || tabletQuery.matches) {
                stopTyping();
                return;
            }

            const phrase = phrases[phraseIndex];
            typedText.textContent = isDeleting
                ? phrase.substring(0, letterIndex--)
                : phrase.substring(0, letterIndex++);

            if (!isDeleting && letterIndex === phrase.length) {
                isDeleting = true;
                typingTimeout = setTimeout(type, 1000);
            } else if (isDeleting && letterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingTimeout = setTimeout(type, 300);
            } else {
                typingTimeout = setTimeout(type, isDeleting ? 50 : 100);
            }
        };

        const handleScreenChange = () => {
            if (screenQuery.matches || tabletQuery.matches) {
                stopTyping();
            } else if (!typingTimeout) {
                phraseIndex = 0;
                letterIndex = 0;
                isDeleting = false;
                type();
            }
        };

        handleScreenChange();

        if (typeof screenQuery.addEventListener === "function") {
            screenQuery.addEventListener("change", handleScreenChange);
            tabletQuery.addEventListener("change", handleScreenChange);
        } else if (typeof screenQuery.addListener === "function") {
            screenQuery.addListener(handleScreenChange);
            tabletQuery.addListener(handleScreenChange);
        }
    }

    // Social links
    const linkedinLink = document.getElementById("linkedin-link");
    if (linkedinLink) linkedinLink.href = `https://linkedin.com/in/${userName}`;

    const githubLink = document.getElementById("github-link");
    if (githubLink) githubLink.href = `https://github.com/${userName}`;

    const emailLink = document.getElementById("email-link");
    if (emailLink) emailLink.href = `mailto:${userName}@gmail.com`;

    // Footer year
    const currentYearEl = document.getElementById("current-year");
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    // Full name placeholders
    document.querySelectorAll("[data-fullname]").forEach(el => el.textContent = fullName);

    // CV link
    const cvDownloadLink = document.getElementById("cv-download-link");
    if (cvDownloadLink) cvDownloadLink.href = "files/Sidhartha_Mandal.pdf";

    // Disable right-click & text selection
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("selectstart", e => e.preventDefault());
    document.addEventListener("mousedown", e => e.preventDefault());
    document.querySelectorAll("img").forEach(img => img.addEventListener("contextmenu", e => e.preventDefault()));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeSite);
} else {
    initializeSite();
}
