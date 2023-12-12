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
    cursor: pointer !important;
    filter: blur(2px);
  }
  .blurred:hover {
    filter: blur(0px);
  }
  footer .blurred, .kao4egtt .blurred{
    filter: blur(0px);
  }
  .visible .blurred {
    filter: none;
  }
`;

// Add to head
document.head.appendChild(style);

document.addEventListener('keydown', function(event) {
  if (event.altKey) {
    event.preventDefault();
    document.body.classList.add('visible');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Alt') {
    if (!document.body.classList.contains('visible')) {
      return;
    }
    document.body.classList.remove('visible');
  }
});