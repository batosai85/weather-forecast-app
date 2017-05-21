export default function Controller(module){
    module.controller("homeCtrl", ["$scope", "$mdSidenav", "$location", "$resource", ($scope, $mdSidenav, $location, $resource) => {
        $scope.loading = false;
        $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?");
        $scope.getTemp = (a) => {
            return Math.round(a - 272.15);
        }
        $scope.toggleLeft = () =>  {
            $mdSidenav('left').toggle();
        }
        $scope.getWeather = () => {
            $scope.loading = true;
            $scope.city = $scope.formCity;
            $scope.weatherApi.get({
                q: $scope.city
                , cnt: 7
                , APPID: "b5b6de218a983c577a558a7b8237dce9"
            }).$promise.then((data) => {
                $scope.weatherResult = data;
                $scope.loading = false;
            }).catch((error) => {
                $scope.loading = true;
            });
            $location.path("/weather");
            $scope.formCity = "";
        }
    }]);
}