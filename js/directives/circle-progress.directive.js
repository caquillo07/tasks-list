angular
    .module('TaskList')
    .directive('circleProgress', circleProgress);

function circleProgress() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'templates/circle-progress.html',
        scope: {
            tasks: '='
        },
        controller: 'CircleProgressController',
        controllerAs: 'circle'
    }
    return directive
}

