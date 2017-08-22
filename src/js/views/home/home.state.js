function HomeConfig($stateProvider){

    var homeState = {
        templateUrl: "./src/js/views/home/home.template.html",
        controller: "HomeController",
        url: "/"
    };

    $stateProvider.state("home", homeState);
}

export default HomeConfig;