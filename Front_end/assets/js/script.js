$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('#header').addClass("sticky");
        }else{
            $('#header').removeClass("sticky");
        }
    });

});