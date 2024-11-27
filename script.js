//Gsap Animations For Hero Section Elements//
function heroSectionAnimation() {
   const tl = gsap.timeline();
   gsap.to(".hero-section .hero-img1", {
      y: "-55%",
      rotate: -8,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
   })

   gsap.to(".hero-section .hero-img3", {
      y: "-55%",
      rotate: 5,
      opacity: 1,
      duration: 0.55,
      delay: 0.75,
   })

   gsap.to(".hero-section .hero-img2", {
      y: "-55%",
      rotate: 15,
      opacity: 1,
      duration: 0.65,
      delay: 0.70,
   })

   tl.from(".hero-title #hero-title-1", {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.75,
   })

   tl.from(".hero-title #hero-title-2", {
      y: -400,
      opacity: 0,
      duration: 0.5,
   })

   tl.from(".hero-text h3", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 0.65,
   })
}
heroSectionAnimation();


//Gsap Animations For Navbar//
function navbarAnimation() {
const menu = document.querySelector("#navbar #menu");
const close = document.querySelector("#fullMenu #close");


gsap.from("#navbar #navLogo", {
   opacity: 0,
   duration: 1,
   delay: 0.55,
})

gsap.from("#navbar #menu", {
   opacity: 0,
   duration: 1,
   delay: 0.55,
})


const tl = gsap.timeline();
tl.to("#fullMenu", {
   right: 0,
   duration: 0.6,
   ease: "power2.out",
})

tl.from("#fullMenu h1", {
   x: 150,
   opacity: 0,
   duration: 0.5,
   stagger: 0.3,
})

tl.from("#fullMenu #close", {
   opacity: 0,
   duration: 0.4,
})

tl.pause();

menu.addEventListener("click", function() {
   tl.play();
})
close.addEventListener("click", function() {
   tl.reverse();
})
}
navbarAnimation();


//Gsap Animations For Brand Section Elements//
function brandSectionAnimation() {
gsap.from(".brand-section #brand-text", {
   color: "#9E9E9E",
   duration: 0.5,
   stagger: 0.5,
   scrollTrigger: {
      trigger: "#brand-text",
      scroller: "body",
      start: "top 75%",
      scrub: 2,
   }
})

gsap.from(".brand-section #brand-text .brand-img", {
   width: 0,
   duration: 0.5,
   stagger: 0.4,
   scrollTrigger: {
      trigger: ".brand-section #brand-text .brand-img",
      scroller: "body",
      start: "top 80%",
      scrub: 3,
   }
})

gsap.from("#brand-text-small h2", {
   opacity: 0,
   y: 50,
   duration: 0.65,
   stagger: 0.185,
   scrollTrigger: {
      trigger: "#brand-text-small",
      scroller: "body",
      start: "top 70%",
   }
})

}
brandSectionAnimation();


//Gsap Animations For Work Section Elements//
function workSectionAnimation() {
  gsap.to(".image-slider-con", {
   transform: "translateX(-567%)",
   scrollTrigger: {
      trigger: ".work-section",
      scroller: "body",
      start: "top 5%",
      end: "top -250%",
      scrub: 2,
      pin: true,
   }
})

gsap.to(".work-text", {
   opacity: 0,
   scrollTrigger: {
      trigger: ".work-text",
      scroller: "body",
      start: "top 50%",
      scrub: 5,
   }
})
}
workSectionAnimation();


//Gsap Animations For Approch Section Elements//
function approchSectionAnimation() {
   gsap.from(".approch-section .approch-title h1", {
   opacity: 0.3,
   duration: 0.5,
   stagger: 0.15,
   scrollTrigger: {
      trigger: ".approch-title h1",
      scroller: "body",
      start: "top 70%",
   }
})

gsap.from(".approch-section .approch-facility h1", {
   opacity: 0,
   scale: 0.95,
   duration: 0.5,
   stagger: 0.16,
   scrollTrigger: {
      trigger: ".approch-facility h1",
      scroller: "body",
      start: "top 50%",
   }
})

gsap.from(".approch-btn-con .approch-btn", {
   opacity: 0,
   scale: 0.80,
   rotate: 360,
   duration: 1,
   scrollTrigger: {
      trigger: ".approch-btn-con .approch-btn",
      scroller: "body",
      start: "top 80%",
      ease: "bounce.out"
   }
})

gsap.from(".approch-btn-con small", {
   opacity: 0,
   x: 150,
   duration: 1,
   scrollTrigger: {
      trigger: ".approch-btn-con small",
      scroller: "body",
      start: "top 80%",
      ease: "bounce.out"
   }
})

gsap.from(".approch-footer h3", {
   opacity: 0,
   duration: 0.65,
   stagger: 0.3,
   scrollTrigger: {
      trigger: ".approch-footer h3",
      scroller: "body",
      start: "top 80%",
      ease: "bounce.out"
   }
})

}
approchSectionAnimation();


//Gsap Animations For Footer Section Elements//
function footerSectionAnimation() {
   gsap.from(".footer-title small", {
   opacity: 0,
   duration: 2,
   scrollTrigger: {
      trigger: ".footer-title small",
      scroller: "body",
      start: "top 70%",
   }
})

gsap.from(".footer-title h1", {
   opacity: 0.15,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-title h1",
      scroller: "body",
      start: "top 70%",
   }
})

gsap.from(".footer-text h1", {
   opacity: 0.1,
   duration: 2,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-text h1",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      scrub: 4,
   }
})

gsap.from(".footer-text h1 img", {
   width: 0,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-text img",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      scrub: 4,
   }
})

gsap.from(".footer-text small", {
   opacity: 0,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-text small",
      scroller: "body",
      start: "top 75%",
      end: "top 35%",
      scrub: 4,
   }
})

gsap.from(".footer-links h1", {
   opacity: 0,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-links h1",
      scroller: "body",
      start: "top 80%",
   }
})

gsap.from(".footer-links a", {
   opacity: 0,
   duration: 1,
   stagger: 0.2,
   scrollTrigger: {
      trigger: ".footer-links a",
      scroller: "body",
      start: "top 90%",
   }
})
}
footerSectionAnimation();
