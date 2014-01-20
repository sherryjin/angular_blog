var MainCtrl = function ($scope, Posts){
  $scope.title = "Totally Not the Same as Tumblr";

  Posts.query(function(results){
    $scope.posts = results;
  });
}

mainApp.controller('MainCtrl', ['$scope', 'Posts', MainCtrl])
