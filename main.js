/*SHOW MENU*/
const showMenu = (toggleID,navID) =>{
    // Get the DOM elements with the specified IDs
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID);

    // Check if both elements exist
    if(toggle && nav){
        // Add a click event listener to the toggle element
        toggle.addEventListener('click',()=>{
            // Toggle the 'show-menu' class on the navigation element
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*REMOVE MENU MOBILE*/
// Select all elements with the class 'nav__link'
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
// Add a click event listener to each 'nav__link' element
navlink.forEach(n => n.addEventListener('click', linkAction))

/*SCROLL SECTION ACTIVATION LINK*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    // Get the current vertical scroll position
    const scrollY = window.pageYOffset;

    // Iterate through each section
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        // Get the ID of the current section
        sectionID = current.getAttribute('id');

        // Check if the scroll position is within the current section
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Add the 'active-link' class to the corresponding navigation link
            document.querySelector('.nav__menu a[href*=' + sectionID+ ']').classList.add('active-link')
        }else{
            // Remove the 'active-link' class from the corresponding navigation link
            document.querySelector('.nav__menu a[href*=' + sectionID+ ']').classList.remove('active-link')

        }

    })
}
window.addEventListener('scroll', scrollActive)

//**Change Background Header */
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

// Show Scroll Top
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)
