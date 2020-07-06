let timed=gsap.timeline()
let timed1=gsap.timeline()
let over=document.querySelector('#handler')
let Sam=document.querySelector('#Samples')
let close=document.querySelector('#Close')

close.addEventListener('click',function(){
    gsap.to('#Samples',{ease:'expo.inOut',duration:1,left:'100%',display:'none'})

})


timed.to('#overlay',{width:1700,height:1700,ease:'expo.inOut',duration:.6,delay:.5 })
timed.from('#overlay h1 span',{ease:'linear',duration:.4,delay:.5,y:50 })
timed.to('#overlay h1 span',{ease:'linear',duration:.4,delay:1.5,y:-50 })
timed.to('#overlay',{opacity:0,ease:'expo.inOut',duration:1.6,delay:.5,
onComplete:function(){
    over.style.display='none'
}
})

timed.from('#nav h2',{ease:'expo.inOut',delay:-.2,duration:.4,x:30,opacity:0})
timed.from('#icon i',{ease:'expo.inOut',duration:.4,x:30,opacity:0,stagger:.2})
timed.from('.a',{ease:'expo.inOut',duration:.4,y:30,opacity:0,stagger:.2})
timed.from('.line',{ease:'expo.inOut',duration:1,width:'0%',delay:-.5})
timed.from('#links p',{ease:'expo.inOut',stagger:.2,duration:1.2,x:40,delay:-0.8,opacity:0})
timed.from('#main img',{ease:'expo.inOut',duration:.9,opacity:0,delay:-.5})



gsap.from('#center img',{ease:'expo.inOut',duration:2,opacity:0,delay:8})


function animated(){
    timed1.to('#Samples',{ease:'expo.inOut',duration:1.3,left:0,delay:.2,display:'initial',
    onComplete:function(){
        let sam=document.querySelector('#Samples')
        sam.style.height='200%'
    }
    })
    .from('#Samples h1',{duration:.7,x:60,opacity:0,
        onComplete:function(){
            let gly=document.querySelector('#Gallery')
            gly.style.display='flex'
            let gly1=document.querySelector('#Gallery1')
            gly1.style.display='flex'
        }
    })
    .from('#Samples h1 span',{duration:1.5,opacity:0})
    .from('#Gallery',{duration:1,opacity:0,y:50})
    .from('.aaa img',{duration:1,left:'100%',stagger:.4,ease:'expo.inOut',delay:-1})
    .from('.O',{duration:.5,opacity:0,x:20,stagger:.4,delay:-.7})
    .from('.Look',{duration:1,stagger:.2,ease:'expo.inOut',opacity:0,x:40})

}








