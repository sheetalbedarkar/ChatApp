app.service('serviceRegister', function($http, $location)
{
    this.registerUser = function(data, $scope)
    {
        console.log("Data on service register", data);

        $http({
                method: 'POST',
                url : 'http://localhost:3000/register',
                data : data
            }).then(
                function successCallback(response)
                {
                    console.log("register successfull");
                    console.log(respnse);
                    $scope.message = "register successful";
                    $location.path('/login');
                },
                function errorCallback(response){
                    alert("register unsuccessful")
                    console.log("register unsuccessful");
                    $scope.message = response.data.message.message;
                });
    }
})