import template from './navigation.html';
import './navigation.scss';

var toExport;

(function(window, angular) {

    class ComponentCtrl {

        static get $inject(){ return [ '$location' ] };

        constructor( $location ) {

            this.$location = $location;

            this.links = [
                {
                    name: 'About',
                    type: 'scroll',
                    url: '/about'
                },
                {
                    name: 'Schedule',
                    type: 'scroll',
                    url: '/schedule'
                },
                {
                    name: 'Register Now',
                    type: 'redirect',
                    url: '/registration'
                }
            ]
        }

        navigateTo( linkObj ) {
            if( linkObj.type === 'redirect' ) {
                this.$location.path( linkObj.url );
            }
        }

    }
    
    var component = {
        bindings: {},
        template: template,
        controller: ComponentCtrl,
        controllerAs: 'nav'
    };
    
    toExport = angular.module('navigation', [])
        .component( 'navigation', component );
    
})(window, window.angular);

export default toExport;