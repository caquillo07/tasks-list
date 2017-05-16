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
        .otherwise({
			redirectTo: '/'
        });
}