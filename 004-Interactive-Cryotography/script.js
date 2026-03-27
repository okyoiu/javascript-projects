// DOM elements from the HTML file
const plaintextArea = document.getElementById('plaintext');
const shiftSlider = document.getElementById('shiftKey');
const shiftValueDisplay = document.getElementById('shiftValue');
const ciphertextOutput = document.getElementById('ciphertext');

// the encryption algorithm goes here
function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, char => {
        // determining if upper or lowercase to keep ASCII math correct
        const base = char <= 'Z' ? 65 : 97

        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base);
    })
}
//updating the UI function goes here
function updateCiphertext() {
    const text = plaintextArea.value;
    const shift = parseInt(shiftSlider.value, 10);

    shiftValueDisplay.textContent = shift;
    ciphertextOutput.textContent = caesarCipher(text, shift);
}

plaintextArea.addEventListener('input', updateCiphertext);
shiftSlider.addEventListener('input', updateCiphertext);

// initialize w/ the empty state
updateCiphertext()