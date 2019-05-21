app.controller('controlRegister', function($scope, serviceRegister){
    $scope.registerUser = function(){
        var user = {
            'name' : $scope.name,
            'email' : $scope.email,
            'password' : $scope.password,
            'cpassword' : $scope.cpassword,
        }
        console.log("register calling", user);
        if($scope.password != $scope.cpassword)
        {
            $scope.message = "Password do not match"
        }
        else{
            serviceRegister.registerUser(user,$scope)
        }
    }
})