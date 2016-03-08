var init = function() {

    var toDoList = toDos();
    $('input[role="add_button"]').click(function(){
        var input = $('input[role="add_input"]');
        toDoList.addToDo(input.val());
        input.val('');
    });

}
$(document).ready(function(){
    init();
})