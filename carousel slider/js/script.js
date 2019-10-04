
$(document).ready(function(){
    $('li.q').on('click',function(){
       $(this).next().slideToggle(2000).siblings('li.a').slideUp();
       var img=$(this).children('img');
       $('img').not(img).removeClass('rotate');
       img.toggleClass('rotate');
    })
})