app.service('serviceResetPassword', function ($http, $location) {
    this.resetPasswordUser = function (data, $scope,token) {
        console.log("data on service register--- ", data);
        
        $http({
            method: 'POST',
            url: 'http://localhost:3000/resetPassword',
            data: data,
            headers:{
                'token':token
            }

        }).then(
            function successCallback(response) {
                console.log("reset password successfull ");
                console.log(response);
                $scope.message = "reset password successfull";
                $location.path('/login');
            },
            function errorCallback(response) {
                console.log("hjmbmjhbkjgu76565r87",response);

                console.log("reset password Unsuccessfull ");
             $scope.message =response.data.message.message;


            }
        );
    }
});