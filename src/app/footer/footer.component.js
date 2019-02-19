'use strict';

angular.module('myApp')
.component('footerComponent',{
    templateUrl: 'footer/footer.component.html',
    controller: function() {
        this.info= '©2012 AcmeWidgets. All Rights Reserved. Support: Support@AcmeWidget.com';

    }
})

