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

module.exports = router