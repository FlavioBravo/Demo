'use strict';

angular.module('myApp')
.component('galleryComponent',{
    templateUrl: 'gallery/gallery.component.html',
    controller: function() {
        this.gallery= 'Image Gallery of Featured Products';
    }
})

