import _ from 'lodash';

var images = document.querySelectorAll('img');

var image = new Image();
    image.src = require('../icons/logo.png');

$(images).map(function(i,e){
    e.onload = function(){
        console.log('load')
    }
})