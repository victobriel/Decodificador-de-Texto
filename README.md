<img src="https://www.alura.com.br/assets/img/alura-logo.svg" alt="alura-logo" draggable="false"><br>
# Challenger Criptografador de Texto - Programa ONE - S1T3

### Regras do desafio:

#### Para a criptografia:
```
As "chaves" de criptografia que utilizaremos são:
- A letra "e" é convertida para "enter"
- A letra "i" é convertida para "imes"
- A letra "a" é convertida para "ai"
- A letra "o" é convertida para "ober"
- A letra "u" é convertida para "ufat"
```
#### Requisitos do desafio:
```
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
<br>
Por exemplo:<br>
"gato" => "gaitober"<br>
gaitober" => "gato"

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
- O resultado deve ser exibido na tela.
```
#### Extras:
```
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.
```
### O que foi usado:
```
- Na criptografia e na descriptografia foi utilizado **replace com RegEx** para procurar e substuir letras por palavras ou o inverso.
- HTML, CSS e JavaScript puro.
```
### Screenshots:
<img width=100% src="https://github.com/victobriel/challengerOneSprint1/blob/main/screenshots/1.png">
