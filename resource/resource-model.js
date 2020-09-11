const db = require("../data/dbconfig")

const getResources = () => {
  return db("resources")
}

module.exports = {
  getResources,
}