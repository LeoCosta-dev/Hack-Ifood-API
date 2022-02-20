# Desenvolvimento de uma AI seletiva escrita em NodeJs utilizando a framework express.

## Descrição da aplicação:
A aplicação é um ambiente back-end que gerencia e automatiza uma busca refinada de pratos em um cardápio, dando a opção para o cliente escolher ingredientes ao qual ele não quer, e com essa informação remover da listagem os itens que possuem na receita algo selecionado.

## Ferramentas utilizadas:
Para o desenvolvimento foi utilizado JavaScript com NodeJS como linguagem da aplicação e o Express como framework, além da hospedagem pela ferramenta de cloud Heroku.

## Dependencias necessárias:
```json
  "dependencies": {
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "puppeteer": "^13.3.2"
  }
```
As dependencias podem ser encontradas <a href = 'https://github.com/LeoCosta-dev/Hack-Ifood-API/blob/main/package.json'>neste arquivo</a> do qual o trecho acima foi extraído, para instalar basta rodar o comando abaixo selecionando e copiando o mesmo com as teclas "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v", o comando abaixo já irá fazer o clone deste repositório e instalar as dependencias necessárias.

```
git clone https://github.com/LeoCosta-dev/Hack-Ifood-API.git && cd Hack-Ifood-API && npm install
```
## Dependencias de desenvolvimento:
```json
  "devDependencies": {
    "jest": "^27.5.1",
    "nodemon": "^2.0.15"
  }
```
Em outra parte do <a href = 'https://github.com/LeoCosta-dev/Hack-Ifood-API/blob/main/package.json'>arquivo</a> de configuração é possível encontrar o código acima que foi extraído do mesmo, essas são as dependencias necessárias para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependencias obrigatórias.

```
npm install --save-dev jest && npm install --save-dev nodemon
```
## Inicialização da aplicação via terminal:
Para inicio da aplicação basta abrir o terminal na pasta do projeto ou executar o código abaixo.

```
npm start
```

## Observação importante:

A versão NodeJs utilizada para desenvolvimento é a 16.x LTS, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

## Rotas da api:

No presente momento temos apenas as rota <b>"/filter"</b> e <b>"/search" onde podemos fazer alguns métodos interessantes.
<br>
<br>

### Ver todos os pratos:

Utilizar o método HTTP Get no caminho <b>"url da api"/filter</b> ou <b>"url da api"/search</b>, ambas as rotas quando não passados nenhum parametro retornam a listagem completa.
<br>
<br>

### Filtrar por ingredientes não desejados:

Para filtrar os pratos por ingredientes não desejados deve ser passado <b>"url da api"/filter?(parametros no formado "nome do parametro"="valor do parametro")</b>, caso passe mais de um parametro os pares de chave e valor dos mesmos devem ser separados pelo caracter <b>"&"</b>.
<br>
<br>

### Filtrar por ingredientes desejados:

Para a busca osposta, o procedimento é o mesmo descrito acima, com a troca da rota por <b>"url da api"/search?(parametros no formado "nome do parametro"="valor do parametro")</b>.
<br>
<br>

### Referências de aplicabilidade:
Repositório: https://github.com/thaissilvr/iFood-Hack-Project
Dashboard: https://ifood-hack-project-time15.vercel.app/

