'use strict';

angular.module('myApp')
.component('searchComponent',{
    templateUrl: 'search/search.component.html',
    controller: function() {
        this.account= 'My Account';
    }
})