const express = require("express")

const projectRouter = require("./project/project-router.js")
const resourceRouter = require("./resource/resource-router.js")
const taskRouter = require("./task/task-router.js")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!" })
})
server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

module.exports = server
