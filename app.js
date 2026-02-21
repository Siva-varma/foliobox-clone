document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  gsap.set("#mouse-follower", { xPercent: 50, yPercent: 50 });

  let xTo = gsap.quickTo("#mouse-follower", "x", {
      duration: 0.6,
      ease: "power3",
    }),
    yTo = gsap.quickTo("#mouse-follower", "y", {
      duration: 0.6,
      ease: "power3",
    });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "100% 50%",
        scrub: true,
        // markers: true
      },
    })
    .to("#hero .hero-bg", {
      scale: 1.5,
      opacity: 0,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero #hero-bottom",
        start: "top 100%",
        end: "100% top",
        scrub: true,
      },
    })
    .to("#hero-bottom img", {
      x: -500,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-2",
        start: "top 70%",
        end: "70% 70%",
        scrub: true,
      },
    })
    .from("#section-2 .img", {
      y: 300,
      opacity: 0,
      stagger: 0.2,
    });

  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function () {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#projects",
            start: "top 50%",
            end: "100% bottom",
            scrub: true,
          },
        })
        .from(".project .text", {
          y: -500,
          stagger: 1,
        });
    },
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      gsap.to(window, { duration: 1, scrollTo: this.getAttribute("href") });
    });
  });

  document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  });
});

const menuIcon = document.querySelector(".nav-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const closeIcon = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  mobileMenu.style.transform = `translateY(0px)`;
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.transform = `translateY(-500px)`;
});
