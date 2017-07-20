/**
 * Created by Gavin Michael on 20-Jul-17.
 */

// IFFIE
(function() {

    angular
        .module("TodoApp", [])
        .controller("TodoListController", TodoListController);
    // Any dependencies can be put into the array so that they can be loaded
    // No dependencies in this so it is an empty array

    // Controller that handles events that are raised by the view
    // Goes and fetches the data and sends it back to the view
    // $scope allows the controller to speak to the view in an object oriented way
    function TodoListController($scope){

        $scope.todo = {title : ''};
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;
        $scope.todoArray = [];

        //add the to do to the to do array
        function addTodo(todo) {

            // create a new variable to hold the info that is going to be stored
            var latestTodo = {};
            latestTodo.title = todo.title;
            console.log(latestTodo.title);

            // validation
            // if title is no empty, add it to the array
            if (latestTodo.title === undefined) {
                alert('Cannot Add Empty Task')
            } else if (todo.title.length != 0){
                // push the new to do item to the to do array
                $scope.todoArray.push(latestTodo);
                console.log($scope.todoArray);
            }

        } // end of add to do

        // pop the todo index from the array to completely remove a todo item
        function removeTodo(index) {
            $scope.todoArray.pop(index);
        } // end of remove to do

    }; // end of TodoListController
})();