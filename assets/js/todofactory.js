toDoApp.factory('ToDoFactory', function(){

  var Todo = function(toDo){
    this.text = toDo;
    this.completed = false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;
});
