import { inputArea, panelArea, encryptBtn, decryptBtn, copyBtn } from './var.js';
import loop from './loop.js';
import functions from './functions.js';

setInterval(loop, 600);

encryptBtn.addEventListener('click', function() {
    panelArea.value = functions.encrypt(inputArea.value);
});

decryptBtn.addEventListener('click', function() {
    panelArea.value = functions.decrypt(inputArea.value);
});

copyBtn.addEventListener('click', functions.copy);
