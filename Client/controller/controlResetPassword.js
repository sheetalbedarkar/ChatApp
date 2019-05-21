app.controller('controlResetPassword', function ($scope,$stateParams, serviceResetPassword) {

    // for registration form
    $scope.resetPasswordUser = function () {
        var user = {
            'password': $scope.password,
            'cpassword': $scope.cpassword
        }

        console.log("register calling", user);
        if ($scope.password != $scope.cpassword) {
            $scope.message = "password not match ";
        } else {
            serviceResetPassword.resetPasswordUser(user, $scope,$stateParams.token);
        }
    }
});