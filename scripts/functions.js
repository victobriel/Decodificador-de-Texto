import {copyBtn, panelArea, dictionaryEncrypt, dictionaryDecrypt} from './var.js';

const functions = {
    encrypt: function(text) {
        // constante com uma cadeia de classe regex
        // https://www.alura.com.br/conteudo/expressoes-regulares
        const classChainRegex = /[aeiou]/g;
        // substitui cada caractere do text com base no dicionario encrypt
        let result = text.replace(classChainRegex, m => dictionaryEncrypt[m]);
        // retorna o resultado
        return result;
    },

    decrypt: function(text) {
        const classChainRegex = new RegExp(Object.keys(dictionaryDecrypt).join('|'), 'g');
        let result = text.replace(classChainRegex, m => dictionaryDecrypt[m]);
        return result;
    },

    copy: function() {
        navigator.clipboard.writeText(panelArea.value);
        copyBtn.textContent = 'Copiado!';
        copyBtn.disabled = true;
        copyBtn.classList.add('copied');
        setTimeout(function() {
            copyBtn.textContent = 'Copiar';
            copyBtn.disabled = false;
            copyBtn.classList.remove('copied');
        }, 2000);
    }
    
}; export default functions;
