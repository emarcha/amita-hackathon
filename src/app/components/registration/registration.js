import template from './registration.html';
import './registration.scss';

var toExport;

(function(window, angular) {

    class ComponentCtrl {

        constructor() {

        }

    }

    var component = {
        bindings: {},
        template: template,
        controller: ComponentCtrl,
        controllerAs: 'reg'
    };

    toExport = angular.module('registration', [])
        .component( 'registration', component );

})(window, window.angular);

export default toExport;