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

module.exports = router
