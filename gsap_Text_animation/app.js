// gsap.registerPlugin(TextPlugin);

// const text =  document.getElementById("text");

// gsap.to(text , {
//     duration:2,
//     text: {
//         value:"شركة مصافي الوسط",
//         delimiter : " "
//     }
// })




// gsap.registerPlugin(TextPlugin);

// function loopText() {
//     gsap.to("#text", {
//         duration: 2,
//         text: "شركة مصافي الوسط",
//         ease: "power1.inOut",
        
//         onComplete() {
//             gsap.to("#text", {
//                 duration: 2,
               
//                 text: "",
//                 ease: "power1.inOut",
                
//                 onComplete: loopText
//             });
//         },

        
//     });
// }

// loopText();




// gsap.registerPlugin(TextPlugin);

// const words = ["وزارة","النفط","شركة", "مصافي", "الوسط"];

// // const words = ["وزارة النفط","شركة مصافي الوسط", ];

// let index = 0;

// function animateWords() {
//     gsap.to("#text", {
//         duration: 1,
//         text: words[index],
//         ease: "power1.inOut",
//         onComplete() {
//             gsap.to("#text", {
//                 opacity: 0,
//                 duration: 0.5,
//                 onComplete() {
//                     index = (index + 1) % words.length;
//                     gsap.set("#text", { opacity: 1 });
//                     animateWords();
//                 },
               
//             });
//         }
//     });
// }

// animateWords();




gsap.registerPlugin(TextPlugin);

function loopText() {
    gsap.to("#text", {
        duration: 3,
        text: "شركة مصافي الوسط - مصفى الدورة",
        ease: "power1.inOut",
      // ease: "back.inOut(1.7)",
      //ease: "steps(12)",
      //ease: "bounce.inOut",
        
  
        repeat: -1,


        onRepeat: () => {
    document.getElementById("text").classList.toggle("active");
  }
    });
}

loopText();


