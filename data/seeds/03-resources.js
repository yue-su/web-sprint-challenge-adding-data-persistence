
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'paper', resource_des: 'fine paper for print'},
        {id: 2, resource_name: 'ink', resource_des: 'blue ink'},
        {id: 3, resource_name: 'wood', resource_des: 'raw wood'},
        {id: 4, resource_name: 'computer', resource_des: 'thinkpad T590'},
        {id: 5, resource_name: 'printer', resource_des: 'Canon printer'},
        {id: 6, resource_name: 'staple', resource_des: 'can only be used once per day'},
      ]);
    });
};
