"use strict";

import DiscConfig from "./disc.config";
import DiscController from "./disc.controller";
DiscController.$inject = ["StartModel"];

angular.module("disc", ["disc.components.questions", "disc.views.home", "disc.components.start", "disc.templates"]);
angular.module("disc").config(DiscConfig);
angular.module("disc").controller("DiscController", DiscController);



