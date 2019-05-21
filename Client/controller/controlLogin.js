app.controller('controlLogin', function($scope, serviceLogin)
{
    $scope.loginUser = function()
    {
        var data = {
            'email' : $scope.email,
            'password' : $scope.password
        }
        console.log(data);

        serviceLogin.loginUser(data);
    }
})