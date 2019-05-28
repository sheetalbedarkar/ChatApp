app.service('serviceForgetPassword', function($http, $location){
    this.forgetPasswordUser = function(data, $scope){
        $http({
            method: 'POST',
            url: 'http://localhost:3000/forgetPassword',
            data : data,
        }).then(
            function successCallback(response){
                console.log("forget password successful")
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].name;
                var token = response.data.token;
                localStorage.setItem("userid",userid);
                localStorage.setItem("name",name);
                localStorage.setItem("token",token);
                $location.path("/login")
            },
            function errorCallback(reponse){
                console.log("registeration unsuccessfull");
                console.log(reponse);
                $scope.loginMessage = "Incorrect EmailID"
            }
        );
    }
})