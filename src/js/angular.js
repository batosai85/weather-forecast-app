import Config from "./config.js";
import Router from "./router.js";
import Controller from "./controller.js";

export default function App(){
    const myApp = angular.module("myApp", ["ngResource", "ui.router", "ngAnimate", "ngMaterial"]);
    Config(myApp);
    Router(myApp);
    Controller(myApp);
}