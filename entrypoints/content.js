// content.js
const inputField = document.querySelector('div[contenteditable="true"]');
const icon = document.createElement('div');
icon.innerText = "AI"; // Replace with an actual SVG icon if needed
icon.style.position = "absolute"; // Adjust as necessary
icon.style.cursor = "pointer";
icon.style.zIndex = "9999"; // Ensure icon is above other elements

// Show icon on focus
if (inputField) {
  inputField.addEventListener('focus', () => {
    document.body.appendChild(icon);
    icon.style.left = `${inputField.getBoundingClientRect().right}px`; // Position the icon
    icon.style.top = `${inputField.getBoundingClientRect().top}px`; // Position the icon
  });

  inputField.addEventListener('blur', () => {
    if (document.body.contains(icon)) {
      document.body.removeChild(icon);
    }
  });

  icon.addEventListener('click', () => {
    // Here you can send a message to your React app to show the modal
    chrome.runtime.sendMessage({ action: 'toggleModal' });
  });
} else {
  console.error('Input field not found');
}
