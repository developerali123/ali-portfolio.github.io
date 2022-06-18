"use strict"
        var typed = new Typed('.text', {
            strings:[
                "Full stack developer",
                    "web designer",
                    "web developer",
                    "freelancer",
                    "youtuber",
                    "blooger",
                ],  
                typeSpeed: 200,
                backspeed:200,
                loop:true,
                showCursor: false,
                autoInsertCss: true,
            });
            const btnscroll=document.getElementById("scrolltop");
            btnscroll.addEventListener("click",function(){
                window.scrollTo(0,0);
            })
        $(document).ready(function(){
            $("body").scrollspy({
                target:"#navbar",
                offset:60,
            })
            $(window).scroll(function(){
                var positionTop=$(window).scrollTop()
                console.log(positionTop);
                if(positionTop>413){
                    $("#scrolltop").css("display","block");
                }else{
                    $("#scrolltop").css("display","none");
                }
            })
            $("#skills").on("mouseover",function(){
                $("svg").css("display","block");
            })
            $("[data-toggle='tooltip']").tooltip();

            $("#section1").ripples({
                resolution:512,
                dropRadius:20,
                perturbance:0.04,
            });

            $('.progress-bar').waypoint(function() {
            $('.progress-bar').css({
            animation: "animate-positive 2s",
            opacity: "1"
            });
            }, { offset: '75%' });
            
            jQuery('.statistic-counter').counterUp({
delay: 10,
time: 2000
});

$('#certificates').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    items:1,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:2
    //     },
    //     1000:{
    //         items:2
    //     }
    // }
})
// $("#modalbox").modal("hide");
window,addEventListener("load",function(){
    setTimeout(function(){
        $("#modalbox").modal("show");
            },4000);
})
        })
        AOS.init({
            duration:2000,
        });