/* GSAP Timeline Creation and Initialization
 * Creates a timeline that will play automatically when page loads
 */
let tl = gsap.timeline().play();
/* gsap.timeline() creates a new timeline object for sequencing animations
 * .play() starts the timeline immediately
 * Timeline allows chaining multiple animations together
 */

/* Color Array Definition
 * Array of 8 hex color codes that will be applied to grid items
 */
const colors = [
    "#493D9E",    // Index 0: Deep purple/blue
    "#B2A5FF",    // Index 1: Light lavender
    "#FFB4A2",    // Index 2: Soft coral/peach
    "#B5828C",    // Index 3: Dusty rose
    "#D2665A",    // Index 4: Warm terracotta
    "#2973B2",    // Index 5: Ocean blue
    "#5B913E",    // Index 6: Forest green
    "#212121",    // Index 7: Dark charcoal/black
];
/* These colors will be randomly or sequentially assigned to grid items
 * Hex format: # followed by 6 characters (RRGGBB)
 */

/* Selecting All Grid Items from DOM
 * Retrieves all elements with class "grid_item"
 */
const items = document.querySelectorAll(".grid_item");
/* document.querySelectorAll() returns NodeList of all matching elements
 * ".grid_item" is a CSS selector targeting elements with that class
 * items becomes an array-like collection we can iterate over
 */

/* Iterating Over Each Grid Item
 * forEach loop processes each grid item individually
 */
items.forEach((item, index) => {
    /* forEach(callback) executes function for each array element
     * item: current grid item element being processed
     * index: position of current item in the array (0-7)
     * Arrow function (=>) provides concise syntax
     */
    
    /* Animation Configuration Object for Initial State
     * tl.to() animates FROM current state TO specified properties
     */
    tl.to(
        item,    // Target element to animate
        {
            /* Animation properties object */
            
            transform: "translate(0, 0)",
            /* Moves element to its original position (0, 0)
             * Removes any CSS transform offsets
             * Creates "snap into place" effect as user scrolls
             */
            
            borderRadius: "1rem",
            /* Sets rounded corners with 1rem radius (16px typically)
             * Creates smooth, modern card appearance
             */
        },
        0    // Position in timeline (0 = start immediately)
        /* Third parameter controls when animation starts
         * 0 means all items animate simultaneously from timeline start
         * Could use relative values like "+=1" for delays
         */
    );
    
    /* Second Animation - Background Color Change
     * Animates item to assigned background color
     */
    tl.to(item, {
        /* Animation properties for color transition */
        
        backgroundColor: `${colors[index]}`,
        /* Template literal syntax for dynamic value insertion
         * colors[index] retrieves color from array based on item position
         * Item 0 gets color[0] (#493D9E), item 1 gets color[1], etc.
         * Creates unique color for each grid item
         */
    });
});

/* GSAP Timeline Animation for Heading Element
 * Animates the "Scroll Magic" heading text
 */
tl.to(
    ".showcase_heading",    // CSS selector targeting the heading
    {
        /* Animation properties object */
        
        opacity: 0,
        /* Fades heading to completely transparent (invisible)
         * Starts at 1 (visible) and animates to 0
         */
        
        scale: 0.5,
        /* Shrinks heading to 50% of original size
         * Creates zoom-out effect
         * scale: 1 is normal size, 0.5 is half size
         */
    },
    0    // Starts at beginning of timeline (position 0)
    /* Animation happens simultaneously with grid item animations
     * All animations coordinate together for cohesive effect
     */
);

/* ScrollTrigger Configuration
 * Creates scroll-based animation control
 */
ScrollTrigger.create({
    /* Configuration object for scroll trigger behavior */
    
    trigger: ".section_showcase",
    /* Element that triggers the animation
     * When this section enters/exits viewport, animation responds
     * Watches scroll position relative to this element
     */
    
    start: "top top",
    /* Animation start point definition
     * Format: "trigger-position viewport-position"
     * "top top" = when top of trigger reaches top of viewport
     * Animation begins when section_showcase reaches top of screen
     */
    
    end: "bottom center",
    /* Animation end point definition
     * "bottom center" = when bottom of trigger reaches center of viewport
     * Animation completes when section bottom hits middle of screen
     * Creates extended animation duration tied to scroll distance
     */
    
    scrub: 1,
    /* Smoothly scrubs animation to scroll position
     * Value of 1 means 1 second of smoothing/easing
     * Creates smooth, responsive animation that follows scroll
     * Animation progress directly linked to scroll position
     * Smaller values = more responsive, larger = more smooth
     */
    
    animation: tl,
    /* Links the timeline (tl) created earlier to this ScrollTrigger
     * ScrollTrigger controls the playback of this timeline
     * Timeline progress syncs with scroll progress
     */
    
    pin: true,
    /* Pins (fixes) the trigger element during animation
     * Element stays in place while user scrolls
     * Creates "sticky" effect where content animates in place
     * Other content scrolls beneath the pinned section
     */
    
    markers: false
    /* Development helper - shows visual markers for trigger points
     * true: displays start/end markers on page
     * false: hides markers for production
     * Useful for debugging scroll trigger positions
     */
});

/* ANIMATION FLOW SUMMARY:
 * 
 * 1. Timeline (tl) is created and starts playing immediately
 * 
 * 2. For each grid item (8 total):
 *    - Moves to position (0, 0) - removes initial offset
 *    - Applies border-radius for rounded corners
 *    - Changes background color to assigned color from array
 * 
 * 3. Heading animation (simultaneous with grid):
 *    - Fades out (opacity: 0)
 *    - Scales down (scale: 0.5)
 * 
 * 4. ScrollTrigger setup:
 *    - Monitors .section_showcase element
 *    - Starts when section top hits viewport top
 *    - Ends when section bottom hits viewport center
 *    - Scrubs animation with 1 second smooth factor
 *    - Pins the section during animation
 *    - Controls timeline playback based on scroll position
 * 
 * RESULT: As user scrolls, grid items smoothly slide into position,
 * change colors, while heading fades/shrinks. Section stays pinned
 * during animation, creating immersive scroll experience.
 */