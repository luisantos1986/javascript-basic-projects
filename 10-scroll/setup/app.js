// Element.getBoundingClientRect() method returns the size of an 
// element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number
// of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original 
// string
//offsetTop - A Number, representing the top position of the element, 
// in pixels

const EVENTS = {
    CLICK: 'click',
    SCROLL: 'scroll'
}

const CLASS = {
    FIXED_NAV: 'fixed-nav',
    SHOW_LINK: 'show-link'
}

// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener(EVENTS.CLICK, function() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener(EVENTS.SCROLL, function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const  {FIXED_NAV, SHOW_LINK } = CLASS 
    if (scrollHeight > navHeight) {
        navbar.classList.add(FIXED_NAV);
    } else {
        navbar.classList.remove(FIXED_NAV)
    }

    if (scrollHeight > 500) {
        topLink.classList.add(SHOW_LINK);
    } else {
        topLink.classList.remove(SHOW_LINK)
    }

});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link) {

    link.addEventListener(EVENTS.CLICK, function(e) {
        //prevent default
        e.preventDefault();
        //navigate to specific spot 
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains(CLASS.FIXED_NAV);    
        let position = element.offsetTop - navHeight
    
        if(!fixedNav){
            position = position - navHeight;
        }
        if(containerHeight > 0){
            position = position + containerHeight
        }
        window.scrollTo({
           left: 0,
           top: position,
        });   
        linksContainer.style.height = 0;
    });
});
