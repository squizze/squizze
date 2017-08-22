"use strict";

import Ajax from "./ajax.model";
import angular from "angular";

Ajax.$inject = ["$http"];

angular.module("ajax", []);
angular.module("ajax").factory("Ajax", Ajax);