$(document).scroll(()=>{
    let scrool = $(window).scrollTop();

    if(scrool > 10){
        $('.navbar').addClass('sticky')
    }else{
        $('.navbar').removeClass('sticky')
    }
})