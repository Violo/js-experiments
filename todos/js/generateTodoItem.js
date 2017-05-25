// generateTodoItem

var generateTodoItem = function(todo, template){
  var item = template.content.cloneNode(true);
  var todoTextSpan = item.querySelector('span[role=todo_value]');
  todoTextSpan.innerText = todo;
  return item;
};