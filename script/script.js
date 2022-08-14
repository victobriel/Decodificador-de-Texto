let panelArea = document.getElementById('panel-area'),
    inputArea = document.getElementById('input-area'),
    encodeBtn = document.getElementById('encode-btn'),
    decodeBtn = document.getElementById('decode-btn'),
    copyBtn = document.getElementById('copy-btn'),
    divStart = document.getElementById('div-start');
var stateText;

setInterval(function() {
    if (panelArea.value.length > 0) {
        copyBtn.classList.remove('hide');

        divStart.classList.add('hide');
        panelArea.classList.remove('hide');
    } else {
        copyBtn.classList.add('hide');
        divStart.classList.remove('hide');
    }

    if (inputArea.value.length > 0) {
        decodeBtn.disabled = false;
        decodeBtn.classList.remove('disabled');
        encodeBtn.disabled = false;
        encodeBtn.classList.remove('disabled');
    } else {
        if (stateText) inputArea.placeholder = 'Digite seu texto_';
        else
            inputArea.placeholder = 'Digite seu texto';
        stateText = !stateText;
        encodeBtn.disabled = true;
        encodeBtn.classList.add('disabled');
        decodeBtn.disabled = true;
        decodeBtn.classList.add('disabled');
    }
}, 600);

copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(panelArea.value);
    copyBtn.textContent = 'Copiado!';
    copyBtn.disabled = true;
    copyBtn.classList.add('copied');
    setTimeout(function() {
        copyBtn.textContent = 'Copiar';
        copyBtn.disabled = false;
        copyBtn.classList.remove('copied');
    }, 2000);
});

encodeBtn.addEventListener('click', function() {

    let textArea = inputArea.value;

    return (panelArea.value = textArea);
});

decodeBtn.addEventListener('click', function() {

    let textArea = inputArea.value;

    return (panelArea.value = textArea);
});
