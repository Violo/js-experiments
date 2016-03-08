var toDos = function() {

    var toDoList = [];

    var addToDo = function(text) {
        var todo = {
            text: text,
            done: false
        };
        toDoList.push(todo);
    }

    var clearToDo = function() {
        toDoList = [];
    }

    var markToDoAsDone = function(index) {
        toDoList[index].done = true;
    }

    var removeToDo = function(index) {
        toDoList.splice(index, 1);
    }

    var listAll = function() {
        //return JSON.parse(JSON.stringify(toDoList));
        return Object.freeze(toDoList);
    }

    return {
        addToDo:addToDo,
        clearToDo:clearToDo,
        markToDoAsDone:markToDoAsDone,
        removeToDo:removeToDo,
        listAll:listAll
    };

}