// copyCode.js

function copyToClipboard(id) {
    const codeBlock = document.getElementById(id);
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    } catch (err) {
        alert('Failed to copy code.');
    }

    window.getSelection().removeAllRanges();
}
