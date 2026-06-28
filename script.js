// JavaScript source code
const pageLinks = document.querySelectorAll('.page-link');
const popupLinks = document.querySelectorAll('.popup-link');

// Add screen transition for page links
pageLinks.forEach(pageLink => {
    pageLink.addEventListener('click', function(event) {
        event.preventDefault();

        const targetUrl = this.href;
        const bodyElement = document.getElementById('body');
        bodyElement.classList.add('screen-transition-animator');

        bodyElement.addEventListener('animationend', () => {
            window.location.href = targetUrl;
        }, { once: true });
    });
});

// Enable popup view for portfolio gallery entries
popupLinks.forEach(popupLink => {
    popupLink.addEventListener('click', function (event) {
        event.preventDefault();

        const childPopup = popupLink.children[1];
        const clonedPopup = childPopup.cloneNode(true);
        clonedPopup.id = "clonedPopup";

        const popupBox = document.getElementById("popup-box");
        popupBox.classList.remove("inactive");

        popupBox.appendChild(clonedPopup);
        clonedPopup.classList.remove("inactive");
    });
});