var app = angular.module('todoList', []);

app.controller('todoList', ['$scope', function($scope) {
    $scope.content = [];

    $scope.addEvent = function() {
        if ($scope.inputText) {
            $scope.content.push({
                text: $scope.inputText,
                done: false,
                star: false
            });
            $scope.inputText = '';
            $scope.getLen();
        }
    };

    $scope.pressEnter = function($event) {
        if ($event.keyCode === 13) {
            $scope.addEvent();
        }
    };

    $scope.deleteEvent = function(index) {
        $scope.content.splice(index, 1);
        $scope.getLen();
    };

    $scope.changeStar = function(index) {
        $scope.content[index].star = !$scope.content[index].star;
    };

    $scope.delDone = function() {
        $scope.content = $scope.content.filter(function(item) {
            return !item.done;
        });
        $scope.getLen();
    };

    $scope.getLen = function() {
        $scope.contentLen = 0;
        $scope.content.forEach(function(item) {
            if (!item.done) {
                $scope.contentLen++;
            }
        });
    };
}]);