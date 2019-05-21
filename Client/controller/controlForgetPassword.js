app.controller('controlForgetPassword', function($scope, serviceForgetPassword){

    $scope.forgetPasswordUser = function(){
        var data = {
            'email' : $scope.email,
        }
        serviceForgetPassword.forgetPasswordUser(data, $scope);
    }
});