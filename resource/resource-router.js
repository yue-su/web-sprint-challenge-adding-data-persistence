const express = require("express")

const resources = require("./resource-model.js")

const router = express.Router()

router.get("/", (req, res) => {
  resources
    .getResources()
    .then((resources) => {
      res.json(resources)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" })
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  resources
    .getResourceById(id)
    .then((resource) => {
      if (resource) {
        res.json(resource)
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id." })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get schemes" })
    })
})

router.post("/", (req, res) => {
  const data = req.body
  resources
    .addResource(data)
    .then((resource) => {
      res.status(201).json(resource)
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" })
    })
})

module.exports = router
