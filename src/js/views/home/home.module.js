"use strict";
import HomeController from "./home.controller";
import HomeConfig from "./home.state";

HomeConfig.$inject = ["$stateProvider"];

angular.module("disc.views.home", ["ui.router"]);
angular.module("disc.views.home").config(HomeConfig);
angular.module("disc.views.home").controller("HomeController", HomeController);
