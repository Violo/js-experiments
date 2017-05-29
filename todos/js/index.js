// index js

var todoAddButton = document.querySelector('button[role=todo_add_button]');
var todoValueInput = document.querySelector('input[role=todo_value_input]');
var todoItemTemplate = document.querySelector('#todo_item_template');
var todoList = document.querySelector('ul[role=todo_list]');
var todoErrorText = document.querySelector('p[role=error_text]');
var todoClearTodoButton = document.querySelector('button[role=clear_todo_button]');

var hide = function(element){
    element.style.display = 'none';
}
var show = function(element){
    element.style.display = 'block';
}
hide(todoErrorText);



var addItem = function(){
  hide(todoErrorText);
  var value = todoValueInput.value;
  if (value){
    var newItem = generateTodoItem(value, todoItemTemplate);
    todoValueInput.value = '';
    todoList.appendChild(newItem);
  } else{
    show(todoErrorText);
  }
}
todoAddButton.addEventListener('click', addItem, false);



var clearTodo = function(){
  todoList.remove();
}
todoClearTodoButton.addEventListener('click', clearTodo, false);

// per il disable
//todoAddButton.addEventListener('change', test, false);






// var onClick = function(e){
//   console.log('ho cliccato');
//   console.log(e);
// }

// addButton.addEventListener('click', function(){
//   console.log('ho cliccato');
// },false);