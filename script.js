var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+20 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -150 +"px"
    blur.style.top = dets.y -150 +"px"
})
 var h4all = document.querySelectorAll("#nav h4")
 h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3 
        crsr.style.border  = " 1px solid #fff" 
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border  = " 0px solid #14fae7" 
        crsr.style.backgroundColor = "#14fae7"
    })
    
 })




gsap.to("#nav",{
    backgroundColor: "#000",
    height:100,
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})

gsap.to("#main",{
     backgroundColor:"#000",
     scrollTrigger:{
        trigger:"main",
        scroller:"body",
       //markers:true,
       start:"top -25%",
       top:"top -70%",
       scrub:2
     }
})

gsap.from("#about-us img,#aboutus-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        //markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#drone1 ",{
     y:-70,
     x:-70,
     scrollTrigger:{
        trigger:"#drone1",
        scroller:"body",
        //markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#drone2 ",{
    y:70,
    x:70,
    scrollTrigger:{
       trigger:"#drone1",
       scroller:"body",
       //markers:true,
       start:"top 55%",
       end:"top 45%",
       scrub:4
   }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
       trigger:"#page4 h1",
       scroller:"body",
       //markers:true,
       start:"top 75%",
       end:"top 70%",
       scrub:4
   }
})