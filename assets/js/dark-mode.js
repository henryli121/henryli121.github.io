document.addEventListener("DOMContentLoaded", function() {
    // Check for previously saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.getElementById("dark-mode-icon").src = "{{ '/assets/images/sun-icon.png' | relative_url }}";
    }
});

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var icon = document.getElementById("dark-mode-icon");
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        icon.src = "{{ '/assets/images/sun-icon.png' | relative_url }}";
    } else {
        localStorage.setItem("darkMode", "disabled");
        icon.src = "{{ '/assets/images/moon-icon.png' | relative_url }}";
    }
}