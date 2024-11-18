// Get the body and main text elements
const body = document.body;
const mainText = document.getElementById("main-text");

// Check for the saved theme in localStorage and apply it
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Add a click event listener to the document
document.addEventListener("click", function(event) {
    // Check if the click was outside the #main-text element
    if (!mainText.contains(event.target)) {
        // Toggle dark mode on click
        body.classList.toggle("dark-mode");

        // Save the theme in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
});
