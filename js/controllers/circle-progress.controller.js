angular
    .module('TaskList')
    .controller('CircleProgressController', CircleProgressController);

function CircleProgressController($scope) {
    console.log("hello world");
    this.tasks = $scope.tasks;
    $('#circle').circleProgress({
        value: 0.5,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
    });

    $scope.$watch('tasks', function() {
        console.log('something changed');
    })

    // $('.second.circle').circleProgress({
    //     value: 0.6
    // }).on('circle-animation-progress', function(event, progress) {
    //     $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
    // });

}