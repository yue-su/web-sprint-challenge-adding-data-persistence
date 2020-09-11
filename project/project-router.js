const express = require("express")

const projects = require("./project-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  projects
    .getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" })
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  projects
    .getProjectById(id)
    .then((project) => {
      if (project) {
        res.json(project)
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" })
    })
})

router.post("/", (req, res) => {
  const data = req.body
  projects
    .addProject(data)
    .then((project) => {
      res.status(201).json(project)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" })
    })
})

router.get("/:id/tasks", (req, res) => {
  projects
    .getTasksById(req.params.id)
    .then((item) => res.status(200).json(item))
})

module.exports = router
