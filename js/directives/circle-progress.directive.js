angular
    .module('TaskList')
    .directive('circleProgress', circleProgress);

function circleProgress() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'templates/circle-progress.html',
        scope: {
            count: '=',
            total: '=',
            circleConfig: '='
        },
        controller: 'CircleProgressController',
        controllerAs: 'circle'
    }
    return directive
}

