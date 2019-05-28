app.service('serviceLogin', function($http, $location){
    this.loginUser = function(data, $scope){
        $http({
            method : 'POST',
            url : 'http://localhost:3000/login',
            data: data,
        }).then(
            function successCallback(response)
            {
                console.log("Login Successful")
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].name;
                var token = response.data.token;
                localStorage.setItem("userid",userid);
                console.log("login",localStorage.getItem('userid'))
                localStorage.setItem("name",name);
                localStorage.setItem("token",token);
                $location.path("/dashboard")
            },
            function errorCallback(response)
            {
                alert("Login Unsuccessfull");
                console.log("Login Unsuccessfull");
                console.log(response);
                $scope.loginMessage = "Email id or password is Incorrect"
            }
        );
    }
})