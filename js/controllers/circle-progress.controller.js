angular
    .module('TaskList')
    .controller('CircleProgressController', CircleProgressController);

function CircleProgressController($scope) {
    'use strict'

    this.completedCount = $scope.count;

    $('#circle')
        .circleProgress($scope.circleConfig)
        .on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').html($scope.count + '/' + $scope.total);
        });

    // TODO: - make the binding work
    $scope.$watch('count', function() {
        var value = $scope.count / $scope.total;
        $('#circle').circleProgress('value', value);
    }, true);

}