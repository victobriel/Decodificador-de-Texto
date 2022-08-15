const inputArea = document.getElementById('input-area'), panelArea = document.getElementById('panel-area'), encryptBtn = document.getElementById('encrypt-btn'), decryptBtn = document.getElementById('decrypt-btn'), copyBtn = document.getElementById('copy-btn'), divStart = document.getElementById('div-start');

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

export { inputArea, panelArea, encryptBtn, decryptBtn, copyBtn, divStart, dictionaryEncrypt, dictionaryDecrypt};
