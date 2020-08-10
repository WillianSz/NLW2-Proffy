//express is a function and return an object

//dados 
const proffys = [{
        name: " Pedro Oliveira",
        avatar: "",
        whatsapp: "71982922438",
        bio: "Facadas na saboneteira são artes na forma expressa, mais agressiva do ser humano.  <br><br> Amo a Sociologia porquê costumo refletir em momentos bons , sempre encontro respostas no simples ato de tomar café.",
        subject: "Sociologia",
        cost: "400",
        weekday: [
            3
        ],
        time_from: [720],
        time_to: [1220]
    }, {
        name: " Aurelielza ",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "71982922438",
        bio: "A poesia é o grito da felicidade",
        subject: "Geografia",
        cost: "400",
        weekday: [
            5
        ],
        time_from: [720],
        time_to: [1220]
    }, {
        name: " Aurelielza ",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "71982922438",
        bio: "A poesia é o grito da felicidade",
        subject: "Geografia",
        cost: "400",
        weekday: [
            5
        ],
        time_from: [720],
        time_to: [1220]

    }


]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    //  return res.sendFile(__dirname + "/views/index.html") // utilizamos sendFile para requisitar um arquivo e __dirname para selecionar o arquivo concatenado com o diretorio
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const dados = req.query

    // se tiver dados (data)
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
            //adicionar data a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }

    // se não, mostrar a página
    return res.render("give-classes.html", { subjects, weekdays })


}

// servidor
const express = require('express') // recebe o require do express
const server = express() // recebe a variavel contendo express e o utiliza


// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// .use("") = configuração do servidor
// inicio e configurações do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public")) // solicitando arquivos estáticos -- pega todos os arquivos dentro do diretorio apontado
    // arrowfunction returning a request to the page[req](what accompanies the order) and the answer[res](what will he show you on screen)   
    // rotas da aplicação
    .get("/", (pageLanding)) // giving an answer through return  
    .get("/study", (pageStudy))
    .get("/give-classes", (pageGiveClasses))
    .listen(5500) // listen(5500) select a port to open the project