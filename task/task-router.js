const express = require("express")

const tasks = require("./task-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  tasks
    .getTasks()
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" })
    })
})

router.post("/", (req, res) => {
  const data = req.body
  tasks
    .addTask(data)
    .then((task) => {
      res.status(201).json(task)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" })
    })
})

module.exports = router
