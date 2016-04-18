toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;

  self.todos = [];

  self.addToDo = function(toDo) {
    self.todos.push(new ToDoFactory(toDo));
  };

  self.removeToDo = function(toDo) {
    index = self.todos.indexOf(toDo);
    self.todos.splice(index,1);
  };
}]);
