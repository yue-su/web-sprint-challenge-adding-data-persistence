const db = require("../data/dbconfig")

const getProjects = () => {
  return db("projects")
}

const getTasks = (project_id) => {
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



const getShoppingList = (recipe_id) => {
  return db("recipe_detail")
    .join("recipes", "recipes.id", "recipe_detail.recipe_id")
    .join("ingredients", "recipe_detail.ingredient_id", "ingredients.id")
    .select(
      "recipe_detail.id",
      "recipes.recipe_name",
      "ingredients.ingredient_name",
      "recipe_detail.quantity"
    )
    .where("recipes.id", recipe_id)
}

module.exports = {
  getProjects,
  getTasks,
  getShoppingList,
}
