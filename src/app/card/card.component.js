'use strict';

angular.module('myApp')
.component('cardComponent',{
    templateUrl: 'card/card.component.html',
    controller: function() {
             
    },
    bindings: {
        pcard: '<'
    }
})

