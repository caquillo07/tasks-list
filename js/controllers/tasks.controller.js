angular
    .module('TaskList')
    .controller('TasksPageController', TasksPageController);

function TasksPageController($scope, tasks) {
    'user strict'

    this.title = "All Tasks"
    this.tasks = tasks;

}