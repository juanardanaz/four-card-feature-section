/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.card_section_title`, {origin: 'bottom'});
sr.reveal(`.card_section_subtitle`, {delay: 600, origin: 'bottom'});
sr.reveal(`.card_container`, {delay: 700, origin: 'bottom'});