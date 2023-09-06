export default function copyToClipboard(text) {
  if (navigator.clipboard) {
    // Use the Clipboard API if available
    navigator.clipboard.writeText(text).catch((error) => {
      console.error('Clipboard API error: ' + error);
      // Fallback to execCommand for older browsers
      copyFallback(text);
    });
  } else {
    // Fallback to execCommand for older browsers
    copyFallback(text);
  }
}

function copyFallback(text) {
  // Create a text area element
  const textArea = document.createElement('textarea');
  textArea.value = text;

  // Make the text area invisible
  textArea.style.position = 'fixed';
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.opacity = '0';

  // Append the text area to the document
  document.body.appendChild(textArea);

  // Select the text in the text area
  textArea.select();

  try {
    // Execute the copy command
    const success = document.execCommand('copy');
    if (!success) {
      console.error('Fallback copy failed');
    }
  } catch (error) {
    console.error('Fallback copy error: ' + error);
  } finally {
    // Remove the text area from the document
    document.body.removeChild(textArea);
  }
}
