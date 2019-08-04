function replaceDates(selector) {
    document.querySelectorAll(selector)
        .forEach((yearTag) => {
            const now = new Date();
            const year = document.createTextNode(now.getFullYear());
            yearTag.appendChild(year);
        });
}

function initNavToggle(selector) {
    const navToggle = document.querySelector(selector)
    navToggle.addEventListener('click', (evt) => {
        const expanded = ('true' === navToggle.getAttribute('aria-expanded'));
        const nextState = !expanded;
        navToggle.setAttribute('aria-expanded', nextState.toString());
    }); 
}