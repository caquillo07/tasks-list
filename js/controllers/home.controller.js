angular
    .module('TaskList')
    .controller('HomePageController', HomePageController);

function HomePageController($scope, tasks) {
    'use strict'

    this.title = "Tasks";
    this.tasks = tasks;

    this.toggleCompleted = function(task) {
        // if action needed when toggled
    }

}
