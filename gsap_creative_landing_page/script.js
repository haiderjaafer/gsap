/* GSAP Timeline Creation
 * gsap.timeline() creates a timeline object that allows sequencing multiple animations
 * This provides better control over animation timing and sequencing
 */
var tl = gsap.timeline();

/* Animation 1: Logo Animation
 * Targets: .logo element (the logo image container)
 * Properties animated:
 *   - y: 200 → Moves element 200px down from its starting position (translateY)
 *   - opacity: 0 → Makes element completely transparent/invisible
 * This creates an entrance animation where logo fades in and moves up
 */
tl.from(".logo", 1, {
    y: 200,        // Vertical position: starts 200px below normal position
    opacity: 0,    // Starts completely transparent
    // Duration: 1 second (first parameter)
});

/* Animation 2: Text Elements Animation (.elmt)
 * Targets: .elmt elements (heading, paragraph, button container)
 * Properties:
 *   - y: 500 → Starts 500px below normal position
 *   - stagger: 0.2 → Delays each element by 0.2 seconds for cascading effect
 *   - opacity: 0 → Starts transparent
 * The "stagger" creates a sequential animation where each .elmt appears one after another
 * Duration: 1 second
 */
tl.from(".elmt", 1, {
    y: 500,           // Vertical position: starts 500px down
    stagger: 0.2,     // 0.2 second delay between each element's animation
    opacity: 0,       // Starts completely transparent
});

/* Animation 3: Image Group Animation - Slide DOWN into full view
 * Targets: .img1 img (all images within .img1 containers)
 * Properties:
 *   - y: -500 → Starts 500px ABOVE normal position (partially hidden above viewport)
 *   - stagger: 0.2 → Each image animates 0.2s after the previous
 *   - opacity: 0 → Starts transparent
 * Duration: 1 second
 * Effect: Images appear cut off at top, then slide DOWN to become fully visible
 */
tl.from(".img1 img", 1, {
    y: -500,          // Starting position: 500px ABOVE normal position (hidden above viewport)
    stagger: 0.2,     // Sequential delay: each image follows previous by 0.2s
    opacity: 0,       // Starting opacity: completely transparent
    ease: "power2.out" // Smooth easing for natural downward movement
});

/* Animation 4: Images Slide DOWN out of viewport (disappear)
 * Targets: .img1 img (all images)
 * Properties:
 *   - y: 300 → Moves 300px DOWN from current position (slides below viewport)
 *   - stagger: 0.2 → Each image animates 0.2s after the previous
 * Effect: After images are fully visible, they slide down and disappear below viewport
 */
tl.to(".img1 img", 1, {
    y: 300,           // Move 300px DOWN (positive value = downward)
    stagger: 0.2,     // Sequential animation with 0.2s delay
    ease: "power2.in" // Accelerating ease for natural downward motion
});

/* Animation 5: Images Slide BACK UP into viewport (reappear)
 * Targets: .img1 img (all images)
 * Properties:
 *   - y: 0 → Returns to original position (back in viewport)
 *   - stagger: 0.2 → Each image animates 0.2s after the previous
 * Effect: Images slide back up from below to their final visible position
 */
tl.to(".img1 img", 1, {
    y: 0,             // Return to original position (y: 0 = no offset)
    stagger: 0.2,     // Sequential animation with 0.2s delay
    ease: "power2.out" // Decelerating ease for smooth arrival
});

/* SUMMARY OF ANIMATION SEQUENCE:
 * Timeline flow (sequential order):
 * 1. Logo fades in and slides up (1 second duration)
 * 2. Text elements (.elmt) cascade in from bottom with stagger (1 second duration each)
 * 3. Images start above viewport (cut off) and slide DOWN to become fully visible (1 second)
 * 4. Images slide DOWN out of viewport (disappear below) (1 second)
 * 5. Images slide BACK UP into viewport (return to final position) (1 second)
 * 
 * The entire animation creates a dynamic entrance effect where:
 * - Logo appears first from below
 * - Text follows in sequence from bottom
 * - Images appear cut off at top, slide down to full view
 * - Images then slide down and exit viewport (disappear)
 * - Images slide back up and return to their final position
 * 
 * GSAP Properties Used:
 * - y: vertical position (positive = down, negative = up)
 *   - y: -500 means element starts 500px ABOVE its final position
 *   - y: 300 means element moves 300px BELOW its current position
 *   - y: 0 means return to original position (no offset)
 * - opacity: transparency (0 = invisible, 1 = fully visible)
 * - stagger: delay between animating multiple elements
 * - ease: animation timing function for smooth motion
 *   - "power2.out" = decelerating (slow ending)
 *   - "power2.in" = accelerating (fast ending)
 * 
 * Visual Effect Timeline:
 * 1. Images reveal from top (sliding down)
 * 2. Images exit downward (sliding below viewport)
 * 3. Images return upward (sliding back to final position)
 * 
 * This creates an engaging "bounce" effect where images
 * appear, temporarily leave, and then return to stay.
 */