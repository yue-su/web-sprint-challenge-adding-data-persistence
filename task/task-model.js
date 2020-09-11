const db = require("../data/dbconfig")

const getTasks = () => {
  return db("tasks")
}

module.exports = {
  getTasks,
}
