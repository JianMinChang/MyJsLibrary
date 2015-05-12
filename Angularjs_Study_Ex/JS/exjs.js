var m = angular.module("myService",[]);
m.service('servicePerson', function ($http) {
    this.GetALL = function ($scope) {
        var responsePromise = $http.get("http://localhost:5712/Default.aspx?Action=GetALL");
       
        responsePromise.success(function (data, status, headers, config) {
            //console.log(data.Data);
            if (data.IsSuccess == true) {
                $scope.Persons = JSON.parse(data.Data);
            }
        });
        responsePromise.error(function (data, status, headers, config) {
            console.log("AJAX failed!");
        });
    };

    this.Add = function ($scope,data) {
        var parms = "&Name=" + data.Name + "&Age=" + data.Age + "&Sex="+data.Sex;
        var responsePromise = $http.get("http://localhost:5712/Default.aspx?Action=Add"+parms);

        responsePromise.success(function (data, status, headers, config) {
            //console.log(data.Data);
            if (data.IsSuccess == true) {
                $scope.Persons.push(JSON.parse(data.Data));
            }
            else {
                console.log("Add failed!");
            }
        });
        responsePromise.error(function (data, status, headers, config) {
            console.log("AJAX failed!");
        });
    };


});



var myMoudle = angular.module("ngappEx1", ['ngResource', 'ngRoute', 'myService']);

myMoudle.config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

//myMoudle.factory('helloWorldFromFactory', function () {

//    var test = {};
//    test.say = function () {
//        console.log("This is Test!");
//    };
//    return test;
//});


myMoudle.factory('Persons', ['$resource', function ($resource) {

    return $resource('http://localhost:56336/api/Values/:id', null,
        {
        'query': { method: 'GET', isArray: true },
        'get': { method: 'GET' },                     //取得物件(Read)
        'save': { method: 'POST' },                   //新增(Create)
        'update': { method: 'PUT' },                  //更新(Update)
        'remove': { method: 'DELETE' }                //刪除(Delete)
    });
}]);


myMoudle.controller("ExTestController", function ($scope) {
    $scope.Message = "測試一下";
});

myMoudle.controller("TestController", ['$scope', '$http', 'servicePerson', 'Persons', function ($scope, $http, servicePerson, Persons) {

    //console.log("Age", $scope.Age);
    //console.log("Name", $scope.Name);

    //Model
    $scope.Persons = {};
    servicePerson.GetALL($scope);
    
    //helloWorldFromFactory.say();
    //console.log(Persons.query());
    

    var Getdatafun = function () {
        var responsePromise = $http.get("http://localhost:5712/Default.aspx?Action=GetALL");

        responsePromise.success(function (data, status, headers, config) {
            //console.log(data);
            if (data.IsSuccess == true) {
                $scope.Persons = {};
                $scope.Persons = JSON.parse(data.Data);
            }
        });
        responsePromise.error(function (data, status, headers, config) {
            alert("AJAX failed!");
        });
    };

    //Init 
    //Getdatafun();
    
    $scope.Add = function () {
        //console.log("Age", $scope.age);
        //console.log("Name", $scope.name);
        //console.log("Sex", $scope.sex);
        var person = {};
        person.Name = $scope.name;
        person.Age = $scope.age;
        person.Sex = $scope.sex;

        servicePerson.Add($scope, person);

    };

    $scope.Save = function (item) {
        item.IsEditing = false;
        console.log("Save", "ID = "+item.ID , " Name = "+item.Name , " Sex = " +item.Sex , " Age = " +item.Age);
        
    };

    $scope.Remove = function (item) {
        if (confirm("Is Delete?")) {
            console.log(item);
        }
        else {
            console.log("No Delete");
        }
        
    };

    $scope.GetData = function () {
        Getdatafun();
    };
}]);