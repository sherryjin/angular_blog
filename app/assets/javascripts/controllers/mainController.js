var MainCtrl = function ($scope, Posts){
  $scope.title = "totally not tumblr.";

  Posts.query(function(results){
    $scope.posts = results;
  });
}

mainApp.controller('MainCtrl', ['$scope', 'Posts', MainCtrl])
