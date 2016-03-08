var init = function() {

    var toDoList = toDos();
    $('input[role="add_button"]').click(function(){
        var input = $('input[role="add_input"]');
        toDoList.addToDo(input.val());
        input.val('');

        var templateToDoList = _.template($('script[role="toDoTemplate"]').text());

        var html = templateToDoList({
            list:toDoList.listAll()
        });

        $('div[role="todolist"]').html(html);

    });

}
$(document).ready(function(){
    init();
})