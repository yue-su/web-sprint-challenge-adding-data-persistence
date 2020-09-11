
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_detail').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_detail').insert([
        {id: 1, project_id: 1, resource_id:1},
        {id: 2, project_id: 1, resource_id:2},
        {id: 3, project_id: 1, resource_id:3},
        {id: 4, project_id: 1, resource_id:4},
        {id: 5, project_id: 2, resource_id:5},
        {id: 6, project_id: 2, resource_id:6},
        {id: 7, project_id: 3, resource_id:2},
        {id: 8, project_id: 3, resource_id:3},
        {id: 9, project_id: 3, resource_id:4},
        {id: 10, project_id: 4, resource_id:2},
        {id: 11, project_id: 5, resource_id:3},
        {id: 12, project_id: 6, resource_id:4},
        {id: 13, project_id: 7, resource_id:5},
      ]);
    });
};
