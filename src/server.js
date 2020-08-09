//express is a function and return an object

const proffys = [{
    name: " Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "71982922438",
    bio: "Entusiasta das melhores tecnologias de química avançada. <br><br> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [
        0
    ],
    time_from: [720],
    time_to: [1220]
}, {
    name: " Pedro Oliveira",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "71982922438",
    bio: "Facadas na saboneteira são artes na forma expressa, mais agressiva do ser humano <br><br> Costumo perceber as coisas em momentos bons e reflexões ruins, assim como o simples ato de tomar um café.",
    subject: "Química",
    cost: "20",
    weekday: [
        0
    ],
    time_from: [720],
    time_to: [1220]
}]

const express = require('express') // recebe o require do express
const server = express() // recebe a variavel contendo express e o utiliza

// .use("") = configuração do servidor


server.use(express.static("public")) // solicitando arquivos estáticos -- pega todos os arquivos dentro do diretorio apontado
    // arrowfunction returning a request to the page[req](what accompanies the order) and the answer[res](what will he show you on screen)   

.get("/", (req, res) => {
    // giving an answer through return
    return res.sendFile(__dirname + "/views/index.html") // utilizamos sendFile para requisitar um arquivo e __dirname para selecionar o arquivo concatenado com o diretorio
})

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})

.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})


.listen(5500) // listen(5500) select a port to open the project