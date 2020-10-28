function aboutDropdown() {
    document.getElementById("aboutDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var aboutDropdown = document.getElementById("aboutDropdown");
        if (aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
        }
    }
}