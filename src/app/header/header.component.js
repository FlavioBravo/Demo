'use strict';

angular.module('myApp')
.component('headerComponent',{
    templateUrl: 'header/header.component.html',
    controller: function() {
        this.title= 'A Big title';
        this.menu = ['Home','Event','Accesories','Apparel','Featured Items'];
    }
})

