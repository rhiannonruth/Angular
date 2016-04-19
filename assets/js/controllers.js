toDoApp.controller('ToDoController', ['ToDoFactory', 'ToDoFetcher', function(ToDoFactory, ToDoFetcher) {

  var self = this;

  self.todos = ToDoFetcher.index();

  self.addToDo = function(toDo) {
    self.todos.push(new ToDoFactory(toDo));
  };

  self.removeToDo = function(toDo) {
    index = self.todos.indexOf(toDo);
    self.todos.splice(index,1);
  };
}]);
