// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const contents = gsap.utils.toArray("#horizontal .content");

// gsap.to(contents, {
//     xPercent: -100 * (contents.length - 1),
//     scrollTrigger: {
//         trigger: "#horizontal",
//         pin: true,
//         scrub: 1,
        
//     },
// });


// create the scrollSmoother before your scrollTriggers
// ScrollSmoother.create({
//   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//   effects: true, // looks for data-speed and data-lag attributes on elements
//   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
// });

// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#horizontal .content");

gsap.to(contents, {
    xPercent: -100 * (contents.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: "#horizontal",
        pin: true,
        scrub: 3, // Increase this for smoother scrolling (1-5)
        end: () => "+=" + document.querySelector("#horizontal").scrollWidth,
    },
});