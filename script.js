let toggle = document.querySelector(".toggle__menu");
let toggleIcon = document.querySelector(".toggle__menu i");
let dropdownMenu = document.querySelector(".dropdown-menu");


toggle.onclick = function () {
    dropdownMenu.classList.toggle("open");

    const isOpen = dropdownMenu.classList.contains("open");

    toggleIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}