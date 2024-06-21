function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

function performOperation() {
    const keyInput = document.getElementById('key');
    const key = keyInput.value;
    const message = document.getElementById('message').value;
    const operation = document.querySelector('input[name="operation"]:checked').value;
    let result = '';

    if (key === '') {
        alert('Please enter a secret key.');
        return;
    }

    if (operation === 'encrypt') {
        result = btoa(xorEncryptDecrypt(message, key)); // Encode in base64 for display
    } else if (operation === 'decrypt') {
        try {
            result = xorEncryptDecrypt(atob(message), key); // Decode from base64
        } catch (e) {
            alert('Invalid encrypted message. Make sure it is correctly base64-encoded.');
            return;
        }
    }

    document.getElementById('result').innerText = result;
    document.getElementById('copyButton').style.display = 'block';

    // Blur the key input field after processing
    keyInput.blur();
}

function copyToClipboard() {
    const result = document.getElementById('result').innerText;
    navigator.clipboard.writeText(result).then(() => {
        const copyButton = document.getElementById('copyButton');
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
            copyButton.innerText = 'Copy to Clipboard';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
