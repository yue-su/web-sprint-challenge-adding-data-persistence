const express = require("express")

const recipes = require("./project-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  recipes
    .getProjects()
    .then((projects) => {
      res.json(projects)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" })
    })
})

router.get("/:id/tasks", (req, res) => {
  recipes
    .getTasksById(req.params.id)
    .then((item) => res.status(200).json(item))
})

router.get("/:id/shoppingList", (req, res) => {
  recipes
    .getShoppingList(req.params.id)
    .then((item) => res.status(200).json(item))
})

module.exports = router
