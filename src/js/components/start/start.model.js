function StartModel(){
    var model = {
        isLoading: null
    };
    return model;
}
StartModel.$inject = [];
angular.module("disc.components.start").factory("StartModel", StartModel);
