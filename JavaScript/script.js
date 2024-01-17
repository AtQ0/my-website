
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
/*============= APPEARANCE OF NAV ON PAGE LOAD =============*/
/*==========================================================*/
document.addEventListener("DOMContentLoaded", function () {

    const delayForAppearenceOfNavbar = 1200;
    let navbar = document.getElementById("navbar");

    setTimeout(function () {
        navbar.classList.add("animateNavOnPageLoad")
        // navbar.style.top = "-10px"
        // navbar.style.opacity = "1";
    }, delayForAppearenceOfNavbar)

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

//Do the same for logo in footer
const logoContainerFooter = document.getElementById("top-footer-logo-container");

//Add eventlistene (click-event) to the chosen element
logoContainerFooter.addEventListener("click", () => {
    //Set url to a constant
    const url = "./index.html";
    //redirect window to chosen url
    window.location.href = url;
});

/*==================================================*/
/*======= SLIDE MENU WHEN BURGER IS CLICKED ========*/
/*==================================================*/

//GET ELEMENT FROM DOM
const globalOverlayDiv = document.querySelector(".global-overlay");
const localOverlayDiv = document.querySelector(".local-overlay");
const hamburger = document.querySelector(".hamburger-wrapper");
const slidingMenu = document.getElementById("container-menu");
const main = document.getElementById("theMain");
const rectA = document.querySelector(".rectA");
const rectB = document.querySelector(".rectB");
const rectC = document.querySelector(".rectC");
let isHamburgerClickedOnce = false;

//SET A CLICK EVENT ON constant
hamburger.addEventListener("click", () => {

    //First time hamburger is clicked
    if (isHamburgerClickedOnce === false) {

        onFirstHamburgerClick();

    }
    //Second time hamburger is clicked
    else {

        onSecondHamburgerClick();

    }
});

//Logic that is runs, when hamburger has been clicked once
function onFirstHamburgerClick() {

    //Hamburger shall not move on-scroll when menu is evident
    hamburger.style.position = "fixed";

    //Set dark overlay over background
    globalOverlayDiv.style.display = "block";
    localOverlayDiv.style.display = "block";

    //Initiate opacity transition from 0 to 0.7
    setTimeout(function () {
        globalOverlayDiv.style.opacity = "0.7"
        localOverlayDiv.style.opacity = "0.7";
    }, 100)

    //Compensate vertical pos of rectB if js onHover is not activated yet
    //It activates when user the first time hovers in/out of hamburger wrapper
    if (!rectB.classList.contains("hamburgerJSHoverActivated")) {
        rectB.style.marginRight = "0px";
    }

    //Instruct rectB to staticly stay on the onHover position
    rectB.classList.add("stop-rectB-on-right-position");

    hamburger.removeEventListener("mouseover", mouseoverHandlerForBurger);
    hamburger.removeEventListener("mouseout", mouseoutHandlerForBurger);

    setTimeout(function () {
        rectA.classList.add("align-rectA");
        rectC.classList.add("align-rectC");

        //Make rectB invisible for the coming X-rotation
        setTimeout(function () {
            rectB.style.opacity = "0";
        }, 300);

        //Rotate rectA and rectC to form an X
        setTimeout(function () {
            rectA.style.transform = "rotate(45deg)";
            rectC.style.transform = "rotate(-45deg)";
        }, 300);

    }, 200);

    //Slide out the hamburger menu
    slidingMenu.classList.remove("move-menu-out-of-view");
    slidingMenu.classList.add("move-menu-in-view");

    //Set boolean as true, so that it can be used for going back
    isHamburgerClickedOnce = true;
}

//Logic that runs when hamburger has been clicked for the second time
function onSecondHamburgerClick() {
    //Hamburger shall move on-scroll when menu is NOT evident
    hamburger.style.position = "static";

    //Transition opacity of overlays from 0.7 to 0
    globalOverlayDiv.style.opacity = "0";
    localOverlayDiv.style.opacity = "0";

    //Remove overlay styles once transition has finished
    setTimeout(function () {
        globalOverlayDiv.style.display = "none";
        localOverlayDiv.style.display = "none";
    }, 500)

    //Remove class that indicates if hamburger JS onHover is activated
    rectB.classList.remove("hamburgerJSHoverActivated");

    //Rotate back rectA & rectC from an X to a line
    rectA.style.transform = "rotate(0deg)";
    rectC.style.transform = "rotate(0deg)";

    //Bring back opacity of rectB
    setTimeout(function () {
        rectB.style.opacity = "1";
    }, 300);

    //Un-align rectA & rectC from rectB
    setTimeout(function () {
        rectA.classList.remove("align-rectA");
        rectC.classList.remove("align-rectC");


        setTimeout(function () {
            //Bring back rectB to it´s mouseout position
            rectB.style.marginRight = "10px";

        }, 400);

    }, 400);

    setTimeout(function () {
        //Add Hover effect on hamburger
        hamburger.addEventListener("mouseover", mouseoverHandlerForBurger);
        hamburger.addEventListener("mouseout", mouseoutHandlerForBurger);
    }, 1000);

    //Slide back the hamburger menu, out of view
    slidingMenu.classList.remove("move-menu-in-view");
    slidingMenu.classList.add("move-menu-out-of-view");

    isHamburgerClickedOnce = false;
}



function mouseoverHandlerForBurger() {
    //Add your mouseover event code here
    rectB.style.marginRight = "0px";

    //Add a class to rectB to indicate that js onHover is now activated
    //It activates when user the first time hovers in/out of hamburger wrapper
    rectB.classList.add("HamburgerJSHoverActivated");
}

function mouseoutHandlerForBurger() {
    // Add your mouseout event code here
    rectB.style.marginRight = "10px";
}


/*=========================================*/
/*================ SLOGAN =================*/
/*=========================================*/

/*Using intersection observer to ensure setInterval is only active when div is in sight*/

/*SELECT ELEMENTS FROM DOM*/
const topSloganContainer = document.getElementById("top-slogan-container");
const topSlogan = document.getElementById("top-slogan");
const bottomSlogan = document.getElementById("bottom-slogan");
let callFunctionToMoveTopSloganOnce;
let isMessageInTopSloganAlternated = false;
let callFunctionToMoveTopSlogan;

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


/*===========================================*/
/*======== LET'S WORK TOGETHER BTN ==========*/
/*===========================================*/

const letsWorkTogetherBtn = document.querySelector(".lets-work-together-btn");
const contactSection = document.getElementById("contact");

letsWorkTogetherBtn.addEventListener("click", () => {
    // Scroll to the top of the anchored div
    contactSection.scrollIntoView({ behavior: 'smooth' });
})


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

let stringForCreatingDynamicDivs;
const wrapperContentBelowSwiper = document.querySelector(".wrapper-content-below-swiper");

document.addEventListener("DOMContentLoaded", () => {

    stringForCreatingDynamicDivs = `
    <h5 class="activity">API WEB SITE</h5>
    <h5 id="swiper-description-header">"TRAVEL EZ: EXPLORE CITIES BY API"</h5>
    <p id="swiper-description">
        Embark on an artistic journey through diverse interpretations of faces, from classic paintings to immersive installations and sculptures.
    </p>
    `;

    wrapperContentBelowSwiper.innerHTML = stringForCreatingDynamicDivs;

});





//OLD STUFF BELOW NEEDS TO BE DELTED ONCE THE ABOVE IS DONE

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

//OLD STUFF ABOVE; NEEDS TO BE DELETED ONCE ANOTHER SOLUTION IS FOUND


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


/*=============================================*/
/*=============== CONTACT FORM ================*/
/*=============================================*/
const nameTbx = document.querySelector(".name-input");
const nameLabel = document.querySelector(".name-title");
const emailTbx = document.querySelector(".email-input");
const emailLabel = document.querySelector(".email-title");
const messageTbx = document.querySelector(".message-input");
const messageLabel = document.querySelector(".message-title");

//Animate nameLabel when nameTbx is focused or not
nameTbx.addEventListener("focusin", (e) => {
    nameLabel.classList.add("animate-name-title-when-name-tbx-is-focused");
});

nameTbx.addEventListener("focusout", (e) => {
    if (nameTbx.getAttribute('placeholder') === "" && nameTbx.value === '') {
        nameLabel.classList.remove("animate-name-title-when-name-tbx-is-focused");
    }
});

//Animate emailLabel when emailTbx is focused or not
emailTbx.addEventListener("focusin", (e) => {
    emailLabel.classList.add("animate-email-title-when-email-tbx-is-focused");
});

emailTbx.addEventListener("focusout", (e) => {
    if (emailTbx.getAttribute('placeholder') === "" && emailTbx.value === '') {
        emailLabel.classList.remove("animate-email-title-when-email-tbx-is-focused");
    }
});

//Animate MessageLabel and messageTbx height, when messageTbx is focused or not
messageTbx.addEventListener("focusin", (e) => {
    messageLabel.classList.add("animate-message-title-when-message-tbx-is-focused");
    messageTbx.classList.add("animate-message-tbx-height-when-message-tbx-is-focused");
});

messageTbx.addEventListener("focusout", (e) => {
    if (messageTbx.getAttribute('placeholder') === "" && messageTbx.value === '') {
        messageLabel.classList.remove("animate-message-title-when-message-tbx-is-focused");
        messageTbx.classList.remove("animate-message-tbx-height-when-message-tbx-is-focused");
    }
});


/*=======================================*/
/*=============== FOOTER ================*/
/*=======================================*/

//Event that disables page-reload whenever a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
