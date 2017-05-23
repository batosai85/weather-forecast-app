export default function Router(module){
    module.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider.state("home", {
            url: "/"
            , cache: false
            , templateUrl: "/home.html"
            , controller: "homeCtrl"
        }).state("home.weather", {
            url: "weather"
            , cache: false
            , templateUrl: "/weather.html"
            , controller: "homeCtrl"
        });
        $urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
    });
}