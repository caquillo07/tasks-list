angular
    .module('TaskList')
    .controller('HomePageController', HomePageController);

function HomePageController($scope, $filter, tasks) {
    'use strict'

    this.title = "Tasks";
    this.tasks = tasks;
    this.completedCount = 0;
    this.circleConfig = {
        fill: {
            color: 'rgba(20, 157, 234, 1)'
        },
        lineCap: 'round'
    }

    this.updateCompletedCount = function() {
        this.completedCount = $filter('filter')(tasks, { completed: true }).length;
        console.log(this.completedCount);
    }

}
