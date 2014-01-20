var Posts = function($resource){
  return $resource('/posts/:postId.json',
    {postId: '@id'}
  );
}

mainApp.factory('Posts', ['$resource', Posts])