// index js

var addButton = document.querySelector('button[role=add_button]');
var addTodoValue = document.querySelector('input[role=add_todo_value]');
var addTodoLinkTemplate = document.querySelector('#todo_item_template');
var addTodoList = document.querySelector('ul[role=todo_list]');
var addTodoErrorContainer = document.querySelector('p[role=error_text]');
var hide = function(element){
    element.style.display = 'none';
}
var show = function(element){
    element.style.display = 'block';
}
hide(addTodoErrorContainer);

//console.log(addButton);
var onClick = function(){
  hide(addTodoErrorContainer);
  var value = addTodoValue.value;
  if (value){
    var newItem = generateTodoItem(value, addTodoLinkTemplate);
    addTodoValue.value = '';
    addTodoList.appendChild(newItem);
  } else{
    show(addTodoErrorContainer);
  }
}

addButton.addEventListener('click', onClick, false);

// per il disable
//addButton.addEventListener('change', false);






// var onClick = function(e){
//   console.log('ho cliccato');
//   console.log(e);
// }

// addButton.addEventListener('click', function(){
//   console.log('ho cliccato');
// },false);