const messages = [
    "Dear Asssssshhhhhhhhuuuuu",
    "Sending you blessings from Radha and Krishna",
    "Wishing you a speedy recovery!",
    "Can't wait to see you back on your feet!",
    "Get well soon!"
];

let index = 0;
const music = document.getElementById("background-music");
const messageContainer = document.getElementById('messages');
const video = document.getElementById("petals-video"); // Get the video element
let messageInterval; // Declare the interval variable globally

// Display the "Open Message" button as the first message
function displayOpenMessageButton() {
    const button = document.createElement('button');
    button.innerText = "Open Message";
    button.id = "open-message";

    button.addEventListener('click', () => {
        // Play the video and music
        video.play();
        music.play().then(() => {
            music.muted = false; // Unmute the music
            showNextMessage(); // Start showing messages
            button.style.display = 'none'; // Hide the button after clicking
        }).catch(error => {
            console.error("Error playing music:", error);
        });
    });

    messageContainer.appendChild(button);
}

// Function to show the next message
function showNextMessage() {
    if (index < messages.length) {
        messageContainer.innerHTML = messages[index];
        index++;
        
        // Set the timeout for the next message
        const timeoutDuration = (index >= messages.length) ? 8000 : 5000; // Last message for 5 seconds, others for 3
        setTimeout(() => {
            if (index < messages.length) {
                showNextMessage(); // Show the next message
            } else {
                redirectToAnotherPage(); // Redirect after the last message
            }
        }, timeoutDuration);
    }
}

// Function to redirect to another page
function redirectToAnotherPage() {
    music.pause(); // Pause the music
    music.currentTime = 0; // Reset music to start
    window.location.href = "https://firebrand2612.github.io/master/"; // Replace with your desired URL
}

// Display the "Open Message" button when the page loads
displayOpenMessageButton();
