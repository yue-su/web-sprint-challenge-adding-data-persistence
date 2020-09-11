
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'project-1', project_des: "project-des-1", project_completed: false},
        {id: 2, project_name: 'project-2', project_des: "project-des-2", project_completed: false},
        {id: 3, project_name: 'project-3', project_des: "project-des-3", project_completed: false},
        {id: 4, project_name: 'project-4', project_des: "project-des-4", project_completed: false},
        {id: 5, project_name: 'project-5', project_des: "project-des-5", project_completed: false},
        {id: 6, project_name: 'project-6', project_des: "project-des-6", project_completed: false},
        {id: 7, project_name: 'project-7', project_des: "project-des-7", project_completed: false},
      ]);
    });
};
