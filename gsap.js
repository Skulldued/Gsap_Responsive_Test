
let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    var t1 = gsap.timeline();
    t1.from(".card", {
      x: -1500,
      duration: 4,
      scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        scrub: 3,
      },
    });
});

mm.add("(max-width: 799px)", () => {
  var t1 = gsap.timeline();
t1.from(".card", {
  x: -1500,
  duration: 4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    scrub: 3,
  },
});
});






