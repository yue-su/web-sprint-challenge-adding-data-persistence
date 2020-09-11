const db = require("../data/dbconfig")

const getTasks = () => {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("tasks.id",
      "tasks.task_des",
      "tasks.notes",
      "tasks.task_completed",
      "tasks.project_id",
      "projects.project_name",
      "projects.project_des")

}

const getTaskById = (id) => {
  return db("tasks").where("id", id)
}

const addTask = (body) => {
  return db("tasks")
    .insert(body)
    .then((item) => {
      return getTaskById(item)
    })
}

module.exports = {
  getTasks,
  addTask,
}
