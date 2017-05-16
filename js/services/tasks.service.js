angular
    .module('TaskList')
    .service('TasksService', TasksService);

function TasksService() {
    var tasks = [
        {title: 'title 1', completed: false},
        {title: 'title 2', completed: false},
        {title: 'title 3', completed: false},
        {title: 'title 4', completed: false},
        {title: 'title 5', completed: false},
        {title: 'title 6', completed: false},
        {title: 'title 7', completed: false},
        {title: 'title 8', completed: false},
        {title: 'title 9', completed: false},
        {title: 'title 10', completed: false},
    ];

    var userTasks = []

    this.getTasks = function() {
        if (userTasks.length === 0) {
            console.log('user tasks is empty');
            // Shuffle tasks to show different ones each time app loads
            var shuffledTasks = angular.copy(tasks).sort(function() { return 0.5 - Math.random() });
            
            // Return the first 6 tasks
            userTasks = shuffledTasks.splice(0, 6);
        }
        console.log('user array ' + userTasks);
        return userTasks;
        
    }

    this.getAllTasks = function() {
        return tasks;
    }
}