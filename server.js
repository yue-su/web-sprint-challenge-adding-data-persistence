const express = require("express")

//const projectRouter = require("./project/project-router.js")

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome!'})
})
//server.use("/api/projects", projectRouter)

module.exports = server
