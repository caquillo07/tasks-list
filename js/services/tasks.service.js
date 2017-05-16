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

    this.getTasks = function() {
        // Shuffle tasks to show different ones each time app loads
        var shuffledTasks = tasks.sort(function() { return 0.5 - Math.random() });

        // Returnt the first 6 tasks
        return shuffledTasks.splice(0, 6);
    }

    this.getAllTasks = function() {
        return tasks;
    }
}