import angular from 'angular';
import 'angular-route';
import 'angular-messages';

import './app.scss';

// Components
import './components/landing-page/landing-page';
import './components/navigation/navigation';
import './components/registration/registration';


var app;

(function() {

    app = angular.module('app', [
        // Components
        'landing',
        'navigation',
        'registration',

        // Other Stuff
        'ngRoute',
        'ngMessages'
    ]);
    
    app.config( ($routeProvider) => {
        
        $routeProvider
            .when('/', {
                template: '<landing-page></landing-page>'
            })
            .when('/registration', {
                template: '<registration></registration>'
            })
        
    });

})();

export default app;