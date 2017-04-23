angular.module('starter.services', [])


.factory('Tasks',  function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tasks = [{
    id: 0,
    client_name: 'PV Studios',
    estimation: '8Hrs',
    face: 'img/ben.png',
    taskname: 'Logodesign'
  }, {
    id: 1,
    client_name: 'KM studios',
    estimation: '10hrs',
    face: 'img/max.png',
    taskname: 'photoshoot'
  }, {
    id: 2 ,
    client_name: 'RK Studios',
    estimation: '12hrs',
    face: 'img/adam.jpg',
    taskname: 'photoshoot'
  }];


  return {
    all: function() {
      return tasks;
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    changevalue:function(taskname){
       return taskname;
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
