var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
   
 $routeProvider.when('/',{
    templateUrl: './components/home.html',
    controller:'homeCtrl'
}).when('/login', {
    templateUrl: './components/login.html',
    controller:'loginCtrl'
}).when('/dashbord', {
    templateUrl: './components/dashbord.html',
    controller:'dashbordCtrl'
}).otherwise({
    template:'404'
})    

});
app.service('user', function(){
    var username;
    var loggedin = false;
    this.setName=function(name){
username =name;
    };
    this.getName= function(){
        return name;
    };
    this.isuserLoggedIn=function(){
        return loggedin;
    }
    this.userLoggedIn= function(){
        loggedin = true;
    }
})
app.controller('homeCtrl', function($scope, $location){
$scope.goToLogin = function (){
    $location.path('/login');
};
$scope.register = function (){
    $location.path('/register');
};
});
app.controller('loginCtrl',function($scope,$http,user,$location){

$scope.login=function(){
    var username = $scope.username;
//$scope.username='prema fgfdg';
   // console.log($scope.username);
    var password= $scope.password;
    $http({
        url:'http://localhost/angularmysqlphp/server.php',

        method:'POST',
        //Content-Type:'text/plain', 
       // contentType: 'application/json; charset=utf-8',
        headers : {
            //'Content-Type': 'application/x-www-form-urlencoded'
              "Content-Type": "application/x-www-form-urlencoded"
        },
        data: 'username='+username+'&password='+password

    }).then(function(response){

        console.log(response.data);
        if(response.data.user =='loggedin')
        {
            user.userLoggedIn();
            user.setName(response.data.user);
           $location.path('/dashbord');
        }
        else
        {
            alert('wrong creditional');
        }
        //console.log('hello prema');
    })
} 
} );
app.controller('dashbordCtrl',function($scope,user){
    $scope.user=user.setName();

});

