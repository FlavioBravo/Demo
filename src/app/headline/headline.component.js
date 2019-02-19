'use strict';

angular.module('myApp')
.component('headlineComponent',{
    templateUrl: 'headline/headline.component.html',
    controller: function() {
        this.title= 'Intro Copy Headline';
        this.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        
        this.featuredProducts = [
            {"image": "Image of Featured Product",
             "title": "Item Title",
             "description": "Item Category",
             "cost": "$88.00"},
            {"image": "Image of Featured Product",
            "title": "Item Title",
            "description": "Item Category",
            "cost": "$88.00"},
            {"image": "Image of Featured Product",
            "title": "Item Title",
            "description": "Item Category",
            "cost": "$88.00"},
            {"image": "Image of Featured Product",
            "title": "Item Title",
            "description": "Item Category",
            "cost": "$88.00"}
        ];
    }
})

