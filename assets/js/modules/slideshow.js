
export const setupSlideshow = (rootEl) => {

    const content = rootEl.querySelector('.slideshow-content > iframe');
    const prevBtn = rootEl.querySelector('.slideshow-control.prev');
    const nextBtn = rootEl.querySelector('.slideshow-control.next');
    
    // Prevents click events within the iframe
    content.contentDocument.body.style.pointerEvents = 'none';
    content.addEventListener('load', (e) => {
        e.target.contentDocument.body.style.pointerEvents = 'none';
    });

    // Attach forward/back button events
    prevBtn.addEventListener('click', e => {

    });
    
    nextBtn.addEventListener('click', e => {

    });
};
