toDoApp.controller('ToDoController', function() {

  var self = this;

  self.todos = [{ text: "ToDo1", completed: true },
                { text: "ToDo2", completed: false},
                { text: "ToDo3", completed: false }];

  self.addToDo = function(toDo) {
    self.todos.push({text: toDo, completed: false});
  };

  self.removeToDo = function(toDo) {
    index = self.todos.indexOf(toDo);
    self.todos.splice(index,1);
  };
});
