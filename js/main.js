// const navMenu = document.getElementById('nav_menu');
// const navCLose = document.getElementById('nav_close');
// const navToggle = document.getElementById('nav_toggle');
// const header = document.getElementById('header');
// const navLink = document.querySelectorAll('.nav-link');

// navToggle.addEventListener("click", () => {
//     navMenu.classList.add('show_menu');
// });
// navCLose.addEventListener("click", () => {
//     navMenu.classList.remove('show_menu');
// });

// function linkAction(){
//     navMenu.classList.remove('show_menu');
// }

// navLink.forEach(n => n.addEventListener("click", linkAction) 

// navLink.forEach(n => n.addEventListener("click", () => {
//     navMenu.classList.remove('show_menu');
// }));

// function scrollHeader(){
//     if(this.scrollY >= 100) header.classList.add('scroll-header');
//     else header.classList.remove('scroll-header');
// }
// window.addEventListener("scroll", scrollHeader);

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/

const videoFile = document.getElementById('video_content'),
      videoButton = document.getElementById('video_button'),
      videoIcon = document.getElementById('video_icon');

function playPause(){
    if(videoFile.paused){
        videoFile.play()

        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')

    } else{
        videoFile.pause()

        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click',playPause);

function vidEnded(){
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoFile.addEventListener('ended', vidEnded)



