//express is a function and return an object
//dados 
// funcionalidades
// servidor
const express = require('express') // recebe o require do express
const server = express() // recebe a variavel contendo express e o utiliza


const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// .use("") = configuração do servidor
// inicio e configurações do servidor
server
// receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public")) // solicitando arquivos estáticos -- pega todos os arquivos dentro do diretorio apontado
    // arrowfunction returning a request to the page[req](what accompanies the order) and the answer[res](what will he show you on screen)   
    // rotas da aplicação
    .get("/", pageLanding) // giving an answer through return  
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500) // listen(5500) select a port to open the project