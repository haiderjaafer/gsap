// FREE VERSION - Works with CDN GSAP
// No import needed - gsap is loaded globally from CDN

document.addEventListener("DOMContentLoaded", () => {
  // Simple custom easing (alternative to CustomEase)
  const customEase = "power3.inOut";

  // Manual text splitting (alternative to SplitText)
  const splitText = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
      const charSpan = document.createElement('span');
      charSpan.className = 'char';
      if (index === 0) {
        charSpan.classList.add('first-char');
      }
      const innerSpan = document.createElement('span');
      innerSpan.textContent = char === ' ' ? '\u00A0' : char;
      charSpan.appendChild(innerSpan);
      element.appendChild(charSpan);
    });
  };

  // Split words for tags
  const splitWords = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    text.split(' ').forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.textContent = word;
      element.appendChild(wordSpan);
      // Add space after each word except the last
      if (index < text.split(' ').length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
    });
  };

  // Split all text elements
  document.querySelectorAll('.intro-title h1, .outro-title h1, .card h1').forEach(splitText);
  
  // Split words for tags
  document.querySelectorAll('.tag p').forEach(splitWords);

  const isMobile = window.innerWidth <= 1000;

  // Initial states for split-overlay
  gsap.set(".split-overlay .intro-title .char span", {
    y: "0%"
  });

  gsap.set(".split-overlay .outro-title .char span", {
    y: "0%"
  });

  gsap.set(".split-overlay .intro-title .first-char", {
    x: isMobile ? "7.5rem" : "18rem",
    y: isMobile ? "-1rem" : "-2.75rem",
    fontWeight: "900",
    scale: 0.75,
  });

  gsap.set(".split-overlay .outro-title .char", {
    x: isMobile ? "-3rem" : "-8rem",
    fontSize: isMobile ? "6rem" : "14rem",
    fontWeight: "500",
  });

  // Main timeline
  const tl = gsap.timeline({ defaults: { ease: customEase } });
  const tags = gsap.utils.toArray(".tag");

  // Animate tags in
  tags.forEach((tag, index) => {
    tl.to(
      tag.querySelectorAll(".word"),
      {
        y: "0%",
        duration: 0.75,
      },
      0.5 + index * 0.1
    );
  });

  // Animate intro title
  tl.to(
    ".preloader .intro-title .char span",
    {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    },
    0.5
  );

  // Hide other chars except first
  tl.to(
    ".preloader .intro-title .char:not(.first-char) span", 
    {
      y: "100%",
      duration: 0.75,
      stagger: 0.05
    },
    2
  );

  // Animate outro title in
  tl.to(
    ".preloader .outro-title .char span",
    {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    },
    2.5
  );

  // Move first char
  tl.to(
    ".preloader .intro-title .first-char",
    {
      x: isMobile ? "9rem" : "21.25rem",
      duration: 1,
    },
    3.5
  );

  // Move outro title
  tl.to(
    ".preloader .outro-title .char",
    {
      x: isMobile ? "-3rem" : "-8rem",
      duration: 1,
    },
    3.5
  );

  // Final positioning of first char
  tl.to(
    ".preloader .intro-title .first-char",
    {
      x: isMobile ? "7.5rem" : "18rem",
      y: isMobile ? "-1rem" : "-2.75rem",
      fontWeight: "900",
      scale: 0.75,
      duration: 0.75,
    },
    4.5
  );

  // Final outro title positioning
  tl.to(
    ".preloader .outro-title .char",
    {
      x: isMobile ? "-3rem" : "-8rem",
      fontSize: isMobile ? "6rem" : "14rem",
      fontWeight: "500",
      duration: 0.75,
      onComplete: () => {
        gsap.set(".preloader", {
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        });
        gsap.set(".split-overlay", {
          clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
        });
      },
    },
    4.5
  );

  // Container reveal - first squeeze
  tl.to(
    ".container",
    {
      clipPath: "polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)",
      duration: 1,
    },
    5
  );

  // Container full reveal and split overlays
  tl.to(
    ".container",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
    },
    6
  );

  tl.to(
    [".preloader", ".split-overlay"],
    {
      y: (i) => (i === 0 ? "-50%" : "50%"),
      duration: 1,
    },
    6
  );

  // Animate tags out
  tags.forEach((tag, index) => {
    tl.to(
      tag.querySelectorAll(".word"),
      {
        y: "100%",
        duration: 0.75,
      },
      5.5 + index * 0.1
    );
  });

  // Card reveal
  tl.to(
    ".container .card",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.75,
    },
    6.25
  );

  tl.to(
    ".container .card h1 .char span",
    {
      y: "0%",
      duration: 0.75,
      stagger: 0.05,
    },
    6.5
  );
});