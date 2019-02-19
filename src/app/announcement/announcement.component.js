'use strict';

angular.module('myApp')
.component('announcementComponent',{
    templateUrl: 'announcement/announcement.component.html',
    controller: function() {
        this.subtitle1= 'Quick Links';
        this.subtitle2= 'Announcements / Promoted Content';
        this.subtitle3= 'Coming Soon';

        this.tags = ['Home', 'Event', 'Support', 'Contact'];
        this.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.product = 'Image of upcoming product';
        
    }
})

