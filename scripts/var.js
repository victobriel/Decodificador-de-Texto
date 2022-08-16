const inputArea = document.getElementById('input-area'), panelArea = document.getElementById('panel-area'), encryptBtn = document.getElementById('encrypt-btn'), decryptBtn = document.getElementById('decrypt-btn'), copyBtn = document.getElementById('copy-btn'), divStart = document.getElementById('div-start'), warningText = document.getElementById('warning');

const dictionaryEncrypt = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

const dictionaryDecrypt = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
}

const forbiddenLetters = ['á', 'ã', 'à', 'â', 'é', 'ê', 'ó', 'ô', 'í', 'ú', 'A', 'Á', 'Ã', 'Â', 'B', 'C', 'D', 'E', 'É', 'Ê', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'Ô', 'Õ', 'P', 'Q','R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'X', 'Y', 'Z'];

export { inputArea, panelArea, encryptBtn, decryptBtn, copyBtn, divStart, dictionaryEncrypt, dictionaryDecrypt, forbiddenLetters, warningText};
