angular.module('starter.controllers', [])

.controller('NewtaskCtrl',  function($scope,Tasks) {
    $scope.tasks = Tasks.all();
    $scope.addtask = function(){
    $scope.tasks = $scope.tasks.concat([
        {'client_name' : $scope.tasks.client_name,
          'estimation': $scope.tasks.estimation,
          'taskname':$scope.taskname
        }
    ]);

    Tasks.tasks = $scope.tasks;
    console.log(Tasks.tasks)
    }
    $scope.taskchange = function(taskname){
    $scope.taskname = Tasks.changevalue(taskname)
    }
})

.controller('tasklistCtrl', function($scope, Tasks) {
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
  };
})

.controller('taskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
