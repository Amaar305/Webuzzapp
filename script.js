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

// // Optional: You can hide the link initially and show it only when necessary
// document.getElementById('downloadLink').style.display = 'none';

// // Optional: Show the download link when the page finishes loading
// window.onload = function () {
//     document.getElementById('downloadLink').style.display = 'block';
// };
