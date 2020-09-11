const db = require("../data/dbconfig")

const getResources = () => {
  return db("resources")
}

const getResourceById = (id) => {
  return db("resources").where("id", id)
}

const addResource = (body) => {
    return db("resources").insert(body).then(item =>{ return getResourceById(item)})
}



module.exports = {
    getResources,
    getResourceById,
    addResource,
}