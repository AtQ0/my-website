
/*============================================*/
/*====== ANIMATION FOR STARTING SLIDE ========*/
/*============================================*/

//GET ELEMENT FROM DOM
const startingSlide = document.getElementById("starting-slide");

//add new class to dom-element as soon as page has realoaded
document.addEventListener("DOMContentLoaded", function () {
    startingSlide.style.display = "flex";

    //create a contast that is used for delaying adding of the class, after page reload
    const delayInMilliseconds = 1000;

    //add new class after a certain delay
    setTimeout(function () {
        startingSlide.classList.add("new-starting-slide-class-for-animation");

    }, delayInMilliseconds);

    setTimeout(function () {
        startingSlide.style.display = "none";
    }, 2800);

});

/*============================================*/
/*=== FADE-OUT OF LOGO IN STARTING SLIDE =====*/
/*============================================*/

//GET ELEMENT FROM DOM
const logoStartingSlide = document.getElementById("text-wrapper-starting-slide");

//add new class to dom-element as soon as page has realoaded
document.addEventListener("DOMContentLoaded", function () {

    //create a contast that is used for delaying adding of the class, after page reload
    const delayTimeForFadeOutOfLogoInStartingSlide = 500;

    //add new class after a certain delay
    setTimeout(function () {
        logoStartingSlide.classList.add("fade-out-logo-in-starting-slide");
    }, delayTimeForFadeOutOfLogoInStartingSlide);

});


/*==========================================================*/
/*======= APPEARANCE/DISSAPEARANCE OF NAV ON SCROLL ========*/
/*==========================================================*/



/*==============================================*/
/*=========== MAKE LOGO ACT AS LINK ============*/
/*==============================================*/

//Get element from DOM
const logoContainer = document.getElementById("top-logo-container");

//Add an eventlistener (click-event) to the chosen element
logoContainer.addEventListener("click", logoHomeLink);
function logoHomeLink() {
    //Set url to a constant
    const url = "./index.html";
    //redirect window to chosen url
    window.location.href = url;
}

/*==================================================*/
/*======= SLIDE MENU WHEN BURGER IS CLICKED ========*/
/*==================================================*/

//GET ELEMENT FROM DOM
const hamburger = document.getElementById("hamburger-container");
const slidingMenu = document.getElementById("container-menu");
const body = document.getElementById("theBod");
const leftLinksInNav = document.getElementById("left-links-in-nav");
const rightLinksInNav = document.getElementById("right-links-in-nav");
var isClickedHamburger = false;

//SET A CLICK EVENT ON constant
hamburger.addEventListener("click", () => {

    if (isClickedHamburger === false) {

        //Animate menu div from right to left
        slidingMenu.style.left = "0px";

        //fade out and animate navbar upwards
        navbar.style.top = "-35%";
        navbar.style.opacity = "0";
        navbar.style.transition = "top 1s, opacity 0.5s";

        leftLinksInNav.style.display = "none";
        rightLinksInNav.style.display = "none";

        //Fade in, and animate back, navbar, after 0.5s (500ms)
        let delay = 500;
        setTimeout(function () {
            navbar.style.backgroundColor = "transparent";
            navbar.style.top = "-10px";
            navbar.style.opacity = "1";
            navbar.style.transition = "top 1s, opacity 2s";

            //Blur background


        }, delay);

        //Set boolean as true, so that it can be used for going back
        isClickedHamburger = true;
    }
    else if (isClickedHamburger === true) {
        slidingMenu.style.left = "-70%";

        //fade out and animate navbar
        navbar.style.top = "-35%";
        navbar.style.opacity = "0";
        navbar.style.transition = "top 1s, opacity 0.5s";

        //Fade in, and animate back, navbar after 0.5s (500ms)
        let newDelay = 500;
        setTimeout(function () {
            navbar.style.backgroundColor = "#D06474";
            navbar.style.top = "-10px";
            navbar.style.opacity = "1";
            navbar.style.transition = "top 1s, opacity 2s";

            if (window.innerWidth > 768) {
                leftLinksInNav.style.display = "flex";
                rightLinksInNav.style.display = "flex"
            }

            //Un-blur background


        }, newDelay);


        isClickedHamburger = false;
    }

    //ADD ABOVE SO THAT EITHER MENU IS FIXED OF BODY SCROLL IS LOCKED (Overflow hidden?)


    //ADD HERE code so that hamburger transforms its shape to X
});

/*==== ADDITIONAL RESIZE FUNCTION TO AMEND DISPLAY BUG TO LINKS IN NAV =====*/
window.onresize = manageLinksInNavInRelationToMenu;
function manageLinksInNavInRelationToMenu() {
    if (window.innerWidth >= 769 && isClickedHamburger === false) {
        leftLinksInNav.style.display = "flex";
        rightLinksInNav.style.display = "flex";
    }
    else if (window.innerWidth < 769) {
        leftLinksInNav.style.display = "none";
        rightLinksInNav.style.display = "none";
    }
}

/*=========================================*/
/*================ SLOGAN =================*/
/*=========================================*/

/*Using intersection observer to ensure setInterval is only active when div is in sight*/

/*SELECT ELEMENTS FROM DOM*/
const topSloganContainer = document.getElementById("top-slogan-container");
const topSlogan = document.getElementById("top-slogan");
const bottomSlogan = document.getElementById("bottom-slogan");
const options = {};
let callFunctionToMoveTopSloganOnce;
let isMessageInTopSloganAlternated = false;
let callFunctionToMoveTopSlogan;

/*New observer with a callback and options*/
const observerForSlogan = new IntersectionObserver(function (entries, observer) {

    //For every observed observer entry
    entries.forEach(entry => {

        //If div is inside of viewport, activate interval that manages animation
        if (entry.isIntersecting === true) {

            /*======================================*/
            /*= FIRST TIME ANIMATION OF TOP SLOGAN =*/
            /*======================================*/
            //If first time intersecting, animate div, once, quicker (2000) than ordinarily
            callFunctionToMoveTopSloganOnce = setInterval(moveTopSloganOnce, 2500);

            function moveTopSloganOnce() {

                //Animte top slogan down
                topSlogan.classList.remove("class-for-top-slogan-animating-back-up");
                topSlogan.classList.add("class-for-top-slogan-animating-down");

                //Animate bottom slogan up
                bottomSlogan.classList.remove("class-for-bottom-slogan-animating-back-down");
                bottomSlogan.classList.add("class-for-bottom-slogan-animating-up");

                //Remove class after after delay, to revoke animation again
                setTimeout(function () {

                    /*CHANGE CONTENT INSIDE OF TOP SLOGAN EVERY SECOND TIME*/
                    if (!isMessageInTopSloganAlternated) {
                        topSlogan.textContent = "IMPACTFUL";
                        bottomSlogan.textContent = "SOLUTIONS";
                        isMessageInTopSloganAlternated = true;
                    }
                    else {
                        topSlogan.textContent = "ENTHUSIASTIC";
                        bottomSlogan.textContent = "DEVELOPER"
                        isMessageInTopSloganAlternated = false;
                    }

                    //Animate top slogan back up
                    topSlogan.classList.remove("class-for-top-slogan-animating-down");
                    topSlogan.classList.add("class-for-top-slogan-animating-back-up");

                    //Animate bottom slogan back down
                    bottomSlogan.classList.remove("class-for-bottom-slogan-animating-up");
                    bottomSlogan.classList.add("class-for-bottom-slogan-animating-back-down");

                }, 500);

                //Turn of Interval managing animation after one animation
                clearInterval(callFunctionToMoveTopSloganOnce);
            };


            /*=======================================*/
            /*= SUBSEQUENT ANIMATIONS OF TOP SLOGAN =*/
            /*=======================================*/

            //Delay the subsequent animations to make space between first and subsequent
            setTimeout(function () {

                callFunctionToMoveTopSlogan = setInterval(moveTopSlogan, 5000);

                function moveTopSlogan() {

                    //Animte top slogan down
                    topSlogan.classList.remove("class-for-top-slogan-animating-back-up");
                    topSlogan.classList.add("class-for-top-slogan-animating-down");

                    //Animate bottom slogan up
                    bottomSlogan.classList.remove("class-for-bottom-slogan-animating-back-down");
                    bottomSlogan.classList.add("class-for-bottom-slogan-animating-up");

                    //Remove class after after delay, to revoke animation again
                    setTimeout(function () {

                        /*CHANGE CONTENT INSIDE OF TOP SLOGAN EVERY SECOND TIME*/
                        /*FOR THAT PURPOSE USE AN IF STATEMENT WITH A BOOLEAN*/

                        if (isMessageInTopSloganAlternated) {
                            topSlogan.innerText = "ENTHUSIASTIC";
                            bottomSlogan.innerText = "DEVELOPER";
                            isMessageInTopSloganAlternated = false;
                        }
                        else {
                            topSlogan.innerText = "IMPACTFUL";
                            bottomSlogan.innerText = "SOLUTIONS";
                            isMessageInTopSloganAlternated = true;
                        }

                        //Animate top slogan back up
                        topSlogan.classList.remove("class-for-top-slogan-animating-down");
                        topSlogan.classList.add("class-for-top-slogan-animating-back-up");

                        //Animate bottom slogan back down
                        bottomSlogan.classList.remove("class-for-bottom-slogan-animating-up");
                        bottomSlogan.classList.add("class-for-bottom-slogan-animating-back-down");

                    }, 500);
                }
            }, 2000);
        }
        //If div is outside the viewport, stop the interval and the animation
        else {
            clearInterval(callFunctionToMoveTopSlogan);
            topSlogan.classList.remove("class-for-top-slogan-animating-down");
        }

    })

}, options);

observerForSlogan.observe(topSloganContainer);


/*===========================================*/
/*========= SWIPER.JS IN PROJECTS ===========*/
/*===========================================*/


/* Initilize siper */
const projectsSwiper = new Swiper('.projects-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,

    breakpoints: {
        // When window width is less than or equal to 360px
        360: {
            slidesPerView: 1.48,
            spaceBetween: 30,
        },
        // When window width is greater than 360px and less than or equal to 400px
        400: {
            slidesPerView: 1.5,
            spaceBetween: 35,
        },
        // When window width is greater than 400px and less than or equal to 440px
        440: {
            slidesPerView: 1.52,
            spaceBetween: 40,
        },
        // When window width is greater than 440px and less than or equal to 480px
        480: {
            slidesPerView: 1.54,
            spaceBetween: 45,
        },
        // When window width is greater than 480px and less than or equal to 520px
        520: {
            slidesPerView: 1.56,
            spaceBetween: 50,
        },
        // When window width is greater than 520px and less than or equal to 560px
        560: {
            slidesPerView: 1.58,
            spaceBetween: 55,
        },
        // When window width is greater than 560px and less than or equal to 600px
        600: {
            slidesPerView: 1.6,
            spaceBetween: 60,
        },
        // When window width is greater than 600px and less than or equal to 640px
        640: {
            slidesPerView: 1.65,
            spaceBetween: 65,
        },
        // When window width is greater than 640px and less than or equal to 680px
        680: {
            slidesPerView: 1.7,
            spaceBetween: 70,
        },
        // When window width is greater than 680px and less than or equal to 720px
        720: {
            slidesPerView: 1.75,
            spaceBetween: 75,
        },
        // When window width is greater than 720px and less than or equal to 760px
        760: {
            slidesPerView: 1.8,
            spaceBetween: 80,
        },
        // When window width is greater than 760px and less than or equal to 800px
        800: {
            slidesPerView: 1.85,
            spaceBetween: 85,
        },
        // When window width is greater than 800px and less than or equal to 840px
        840: {
            slidesPerView: 1.9,
            spaceBetween: 90,
        },
        // When window width is greater than 840px and less than or equal to 880px
        880: {
            slidesPerView: 1.95,
            spaceBetween: 95,
        },
        // When window width is greater than 880px and less than or equal to 920px
        920: {
            slidesPerView: 2.0,
            spaceBetween: 100,
        },
        // When window width is greater than 920px and less than or equal to 960px
        960: {
            slidesPerView: 2.1,
            spaceBetween: 105,
        },
        // When window width is greater than 960px and less than or equal to 1000px
        1000: {
            slidesPerView: 2.2, // Maximum slidesPerView at 3.0
            spaceBetween: 110,
        },
        // When window width is greater than 1000px and less than or equal to 1040px
        1040: {
            slidesPerView: 2.25,
            spaceBetween: 115,
        },

        1080: {
            slidesPerView: 2.3,
            spaceBetween: 120,
        },

        1120: {
            slidesPerView: 2.35,
            spaceBetween: 125,
        },

        1160: {
            slidesPerView: 2.4,
            spaceBetween: 130,
        },

        1200: {
            slidesPerView: 2.45,
            spaceBetween: 135,
        },

        1240: {
            slidesPerView: 2.5,
            spaceBetween: 140,
        },


        1280: {
            slidesPerView: 2.55,
            spaceBetween: 145,
        },

        1320: {
            slidesPerView: 2.6,
            spaceBetween: 150,
        },


        1360: {
            slidesPerView: 2.65,
            spaceBetween: 155,
        },

        1400: {
            slidesPerView: 2.7,
            spaceBetween: 160,
        },

        1440: {
            slidesPerView: 2.75,
            spaceBetween: 165,
        },


    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});



/*=====================================================*/
/*==== POPULATE EXHIBITION SWIPER WITH DESCRIPTION ====*/
/*=====================================================*/

const swiperBtnNext = document.querySelector(".swiper-button-next");
const swiperBtnPrev = document.querySelector(".swiper-button-prev");
const activity = document.querySelector(".activity");
const swiperHeader = document.getElementById("swiper-description-header");
const swiperDescription = document.getElementById("swiper-description");


swiperBtnNext.addEventListener("click", nextDescription);
let counter = 1;
function nextDescription() {


    console.log(counter);

    if (counter === 1) {
        activity.innerHTML = "ACTIVITY";
        swiperHeader.innerHTML = '"CANVAS CONNECTIONS: PAINTING SOCIAL"';
        swiperDescription.innerHTML = "Join our welcoming community of art enthusiasts! Whether you're starting or perfecting your skills, connect, learn, and create together";
        counter++;
    }
    else if (counter === 2) {
        activity.innerHTML = "EXHIBITION";
        swiperHeader.innerHTML = '"RADIANT PERSPECTIVES: LIGHT, GEOMETRY AND ART"';
        swiperDescription.innerHTML = "A compelling exhibition which focus on the interplay between light, geometry, and artistic expression.";
        counter++;
    }
    else if (counter === 3) {
        activity.innerHTML = "EVENT";
        swiperHeader.innerHTML = '"RADIANT PERSPECTIVES: LIGHT, GEOMETRY AND ART"';
        swiperDescription.innerHTML = "A compelling exhibition which focus on the interplay between light, geometry, and artistic expression.";
        counter++;
    }
    else if (counter === 4) {
        activity.innerHTML = "ACTIVITY";
        swiperHeader.innerHTML = '"SCULPTURE SPLENDOR: TOUR THROUGH TIME AND FORM "';
        swiperDescription.innerHTML = "GUIDED TOUR";
        counter++;
    }

    console.log(counter);
}

swiperBtnPrev.addEventListener("click", previousDescription);

function previousDescription() {
    if (counter === 1) {
        activity.innerHTML = "EXHIBITION";
        swiperHeader.innerHTML = '"RADIANT PERSPECTIVES: LIGHT, GEOMETRY AND ART"';
        swiperDescription.innerHTML = "A compelling exhibition which focus on the interplay between light, geometry, and artistic expression.";
        counter--;
    }
    else if (counter === 3) {
        swiperHeader.innerHTML = '"CANVAS CONNECTIONS: PAINTING SOCIAL"';
        swiperDescription.innerHTML = "Join our welcoming community of art enthusiasts! Whether you're starting or perfecting your skills, connect, learn, and create together";
        counter--;
    }
    else if (counter === 2) {
        swiperHeader.innerHTML = '"VISAGE VISIONS: EXPLORING THE ART OF FACES"';
        swiperDescription.innerHTML = "Embark on an artistic journey through diverse interpretations of faces, from classic paintings to immersive installations and sculptures.";
        counter--;
    }
}


/*=============================================*/
/*========= SWIPER.JS IN REFERENCES ===========*/
/*=============================================*/

const referencesSwiper = new Swiper('.references-swiper', {
    // Optional parameters
    direction: 'horizontal',


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
