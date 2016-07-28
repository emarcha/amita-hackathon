import template from './landing-page.html';
import './landing-page.scss';

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
        controllerAs: 'landing'
    };
    
    toExport = angular.module('landing', [])
        .component( 'landingPage', component );
    
})(window, window.angular);

export default toExport;