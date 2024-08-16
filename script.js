const darkModeButton = document.getElementById('dark-mode-button');
const imgDarkMode = document.getElementById('mainPicture');

// Function to update the image source based on the current mode
function updateImageSource(isDarkMode) {
    imgDarkMode.src = isDarkMode ? './assets/manu02.png' : './assets/manu01.png';
}

document.addEventListener('DOMContentLoaded', () => {
    // Check local storage for dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply the dark mode class if the preference is set
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateImageSource(true);
    } else {
        document.body.classList.add('light-mode');
        updateImageSource(false);
    }

    // Toggle dark mode on button click
    darkModeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDarkMode);

        // Update the image source based on the current mode
        updateImageSource(isDarkMode);

        // Save the user's preference in local storage
        localStorage.setItem('darkMode', isDarkMode);
    });
});