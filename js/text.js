$(function(){
    'use strict';
    $('.toggle-menu').on('click',function(){
        $('header nav ul').fadeToggle(500);
    });
});