
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_des: 'task-des-1', notes:"task-notes-1", task_completed:false, project_id: 1},
        {id: 2, task_des: 'task-des-2', notes:"task-notes-2", task_completed:false, project_id: 1},
        {id: 3, task_des: 'task-des-3', notes:"task-notes-3", task_completed:false, project_id: 1},
        {id: 4, task_des: 'task-des-4', notes:"task-notes-4", task_completed:false, project_id: 1},
        {id: 5, task_des: 'task-des-5', notes:"task-notes-5", task_completed:false, project_id: 2},
        {id: 6, task_des: 'task-des-6', notes:"task-notes-6", task_completed:false, project_id: 2},
        {id: 7, task_des: 'task-des-7', notes:"task-notes-7", task_completed:false, project_id: 3},
        {id: 8, task_des: 'task-des-8', notes:"task-notes-8", task_completed:false, project_id: 3},
        {id: 9, task_des: 'task-des-9', notes:"task-notes-9", task_completed:false, project_id: 4},
        {id: 10, task_des: 'task-des-10', notes:"task-notes-10", task_completed:false, project_id: 4},
        {id: 11, task_des: 'task-des-11', notes:"task-notes-11", task_completed:false, project_id: 5},
        {id: 12, task_des: 'task-des-12', notes:"task-notes-12", task_completed:false, project_id: 5},
        {id: 13, task_des: 'task-des-13', notes:"task-notes-13", task_completed:false, project_id: 6},
        {id: 14, task_des: 'task-des-14', notes:"task-notes-14", task_completed:false, project_id: 6},
        {id: 15, task_des: 'task-des-15', notes:"task-notes-15", task_completed:false, project_id: 7},    
      ]);
    });
};
