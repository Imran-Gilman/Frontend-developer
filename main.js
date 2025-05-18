document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.popup-container');
    const popupButtons = document.querySelectorAll('.open-popup');
    const popup = document.querySelector('.popup');
    popupButtons.forEach(button => {
        button.addEventListener('click', () => {
            container.classList.add('popup-open');
        });

    });

    container.addEventListener('click', (event) => {
        if (!popup.contains(event.target)) {
            container.classList.remove('popup-open');
        }
    });


})