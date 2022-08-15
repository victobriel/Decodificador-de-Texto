import { inputArea, panelArea, encryptBtn, decryptBtn, copyBtn, divStart } from './var.js';

let stateText;

export default function loop() {
    if (panelArea.value.length > 0) {
        copyBtn.classList.remove('hide');

        divStart.classList.add('hide');
        panelArea.classList.remove('hide');
    } else {
        copyBtn.classList.add('hide');
        divStart.classList.remove('hide');
    }

    if (inputArea.value.length > 0) {
        decryptBtn.disabled = false;
        decryptBtn.classList.remove('disabled');
        encryptBtn.disabled = false;
        encryptBtn.classList.remove('disabled');
    } else {
        if (stateText) inputArea.placeholder = 'Digite seu texto_';
        else
            inputArea.placeholder = 'Digite seu texto';
        stateText = !stateText;
        encryptBtn.disabled = true;
        encryptBtn.classList.add('disabled');
        decryptBtn.disabled = true;
        decryptBtn.classList.add('disabled');
    }
};
