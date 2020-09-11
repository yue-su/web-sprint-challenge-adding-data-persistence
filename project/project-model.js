const db = require("../data/dbconfig")

const getProjects = () => {
  return db("projects")
}

const getTasksById = (project_id) => {
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .select(
      "projects.id",
      "projects.project_name",
      "tasks.task_des",
      "tasks.notes",
      "tasks.task_completed"
    )
    .where("projects.id", project_id)
}

const getProjectById = (id) => {
  return db("projects").where("id", id)
}

const addProject = (body) => {
  return db("projects")
    .insert(body)
    .then((item) => {
      return getProjectById(item)
    })
}

module.exports = {
  getProjects,
  getTasksById,

  getProjectById,
  addProject,
}
