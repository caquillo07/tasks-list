angular
    .module('TaskList')
    .config(config);

function config($routeProvider) {
    'use strict'

    $routeProvider
        .when('/', {
            templateUrl: 'views/home-page.html',
            controller: 'HomePageController',
            controllerAs: 'home',
            resolve: {
                tasks: function(TasksService) {
                    // Get the tasks from service
                    return TasksService.getTasks();
                }
            }
        })
        .when('/tasks', {
            templateUrl: 'views/tasks-page.html',
            controller: 'TasksPageController',
            controllerAs: 'tasks',
            resolve: {
                tasks: function(TasksService) {
                    return TasksService.getAllTasks();
                }
            }
        })
        .otherwise({
			redirectTo: '/'
        });
}