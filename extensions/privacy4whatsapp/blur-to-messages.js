window.alert("Extension Pivacy4Whatsapp is running!");
// Extensions documentation: https://developer.chrome.com/docs/extensions?hl=pt-br

function blurMessages() {
  const messages = document.querySelectorAll('.copyable-text:not(.blurred)');

  messages.forEach((message) => {
    message.classList.add('blurred');
  });
}

// Set a observer to blur new messages
const messagesObserver = new MutationObserver(blurMessages);

// The observer will be called when a new message is added to DOM
messagesObserver.observe(document, { childList: true, subtree: true });

var style = document.createElement('style');
style.innerHTML = `
  .blurred {
    filter: blur(2px);
  }

  .blurred:hover {
    filter: blur(0px);
  }
`;

// Add to head
document.head.appendChild(style);