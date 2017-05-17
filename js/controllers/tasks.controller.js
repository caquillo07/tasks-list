angular
    .module('TaskList')
    .controller('TasksPageController', TasksPageController);

function TasksPageController($scope, tasks) {
    'user strict'

    this.title = "all tasks"
    this.tasks = tasks;

}