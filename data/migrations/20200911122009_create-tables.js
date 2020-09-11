
exports.up = function (knex) {
    
       return knex.schema
         .createTable("projects", (tbl) => {
           tbl.increments()
             tbl.string("project_name", 128).notNullable()
             tbl.string("project_des", 128)
             tbl.boolean("project_completed").defaultTo("false")
         })
         .createTable("tasks", (tbl) => {
           tbl.increments()
             tbl.string("task_des", 128).notNullable()
             tbl.string("notes", 255)
             tbl.boolean("task_completed").defaultTo("false")
           tbl
             .integer("project_id")
             .unsigned()
             .notNullable()
             .references("id")
             .inTable("projects")
         })
         .createTable("resources", (tbl) => {
           tbl.increments()
             tbl.string("resource_name", 128).notNullable()
             tbl.string("resource_des", 128)
         })
         .createTable("project_detail", (tbl) => {
           tbl.increments()
           tbl
             .integer("project_id")
             .unsigned()
             .notNullable()
             .references("id")
             .inTable("projects")
           tbl
             .integer("resource_id")
             .unsigned()
             .notNullable()
             .references("id")
             .inTable("resources")
         })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_detail")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
};
