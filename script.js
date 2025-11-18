var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "80% 60%",
        scrub: true,
    }
});

tl.to("#cans", {
    top: "145%",
    left: "77%",
    width: "20%",
    rotate: "-30deg"
}, 'orange');

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "20% 50%",
        scrub: true,
    }
});

tl2.to("#cans", {
    top: "245%",
    left: "50%",
    width: "20%",
    rotate: "0deg",
}, 'orange');