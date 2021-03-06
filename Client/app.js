var app = angular.module('ChatApp', ['ui.router' , 'btford.socket-io'])
app.config(function($stateProvider, $urlRouterProvider)
{
   
    $stateProvider.state('login',{
        url:'/login',
        templateUrl:'templates/login.html',
        controller:'controlLogin'
    })
    $stateProvider.state('register',{
        url:'/register',
        templateUrl:'templates/register.html',
        controller:'controlRegister'
    })
    $stateProvider.state('forgetPassword',{
        url:'/forgetPassword',
        templateUrl:'templates/forgetPassword.html',
        controller:'controlForgetPassword'
    })
    $stateProvider.state('resetPassword',{
        url:'/resetPassword/:token',
        templateUrl:'templates/resetPassword.html',
        controller:'controlResetPassword'
    })
    $stateProvider.state('dashboard',{
        url:'/dashboard',
        templateUrl:'templates/dashboard.html',
        controller:'controlChatApp'
    })
    $urlRouterProvider.otherwise('login');
})
app.service('SocketService',['socketFactory',function SocketServices(socketFactory)
{
return socketFactory({

iosocket:io.connect('http://localhost:3000')

})
}])