function closeMenuOnClick (buttonId, containerSelector) {
    const menuButton = document.getElementById(buttonId);
const container = document.querySelectorAll(containerSelector);

if (!menuButton) return;

container.forEach( el => {
    el.addEventListener('click', () => {
        menuButton.checked = false;
    })
})
}

closeMenuOnClick ('menu-button', '.close-menu');