// Temporarily saves the display name for comments
let displayName = "";

function saveDisplayName() {
    const nameInput = document.getElementById("name-input");
    displayName = nameInput.value;
}

document.getElementById("submit-button").addEventListener("click", saveDisplayName);

function getDisplayName() {
    return displayName;
}