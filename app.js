// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.set("#mouse-follower", { xPercent: -50, yPercent: -50 });

//   let xTo = gsap.quickTo("#mouse-follower", "x", {
//       duration: 0.6,
//       ease: "power3",
//     }),
//     yTo = gsap.quickTo("#mouse-follower", "y", {
//       duration: 0.6,
//       ease: "power3",
//     });

//   window.addEventListener("mousemove", (e) => {
//     xTo(e.clientX);
//     yTo(e.clientY);
//   });

//    gsap.timeline({
//     scrollTrigger: {
//         trigger:'#hero',
//         start: "top top",
//         end: "100% 50%",
//         scrub: true,
//         // markers: true

//     }
//   }).to('#hero .hero-bg',{
//     scale: 1.5,
//     opacity: 0
//   });



//   gsap.timeline({
//     scrollTrigger: {
//         trigger: "#hero #hero-bottom",
//         start: "top 100%",
//         end: "100% top",
//         scrub: true,
//     }
//   }).to('#hero-bottom img',{
//     x:-500
//   });


// });
