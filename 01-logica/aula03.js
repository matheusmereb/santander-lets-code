/* Setup
Executando no Navegador

A forma mais simples de executar um cógido em JavaScript é usando o navegador. Para isso, será necessário criar um arquivor html e referenciar o seu código em JavaScript por lá. Primeiro, crie um arquivo index.html básico:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título</title>
</head>
<body>
</body>
<script src="script.js"></script>
</html>

A tag importante para executar o código é a tag script. Onde no atributo src colocamos o endereço para o nosso arquivo em JavaScript. Para tanto, crie na mesma pasta um arquivo script.js com o seu código. Para testar adicione ao arquivo:

alert("Funciona!");

Em seguida abra o arquivo index.html com algum navegador, que deve aparecer uma janela alertando o texto passando em JavaScript "Funciona!".
Executando fora do Navegador

Por conveniência, enquanto estamos apenas estudando a linguagem há a opção de executar o script fora do navegador usando o NodeJS. Para isso, você deve instalar no seu computador o node.
Instalando no Windows

Baixe o instalador diretamente de https://nodejs.org/
Instalando no Mac

Usando o Homebrew, basta abrir o terminal e executar o comando:

brew install node

Para verificar se a instalação foi bem sucedida, faça node -v, para verificar a versão instalada.
Instalando no Linux

Consulte em https://nodejs.org/en/download/package-manager/ o procedimento para cada distribuição Linux.

Após ter o node instalado, basta abrir a linha de comando e ir até o diretório e executar:

node [nome_do_arquivo]

No nosso caso:

node script.js

Note que por estamor fora do navegador alguns comandos em JavaScript não funcionam, como é o caso do alert. Teste imprimindo no console:

console.log("Funciona!");

Note que executando o console.log("Funciona!"); no navegador, o texto será impresso no console do navegador, dentro do Developer tools.
 */