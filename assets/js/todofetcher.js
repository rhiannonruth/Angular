toDoApp.service('ToDoFetcher',['$http', 'ToDoFactory', function($http, ToDoFactory){
  var self = this;

  self.index = function() {
    var todos = [];
    _fetchToDosFromApi(todos);
    return todos;
  };

  function _fetchToDosFromApi(todos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
    .then(function(resp) {
      _handleResponseFromApi(resp.data, todos);
    }, function(err) {});
  }

  function _handleResponseFromApi(data, todos) {
    data.forEach(function(data){
      todos.push(new ToDoFactory(data.text));
    });
  }
}]);
