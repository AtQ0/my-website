
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
    }, delayForAppearenceOfNavbar)

});


/*=================================================*/
/*=== APPEARANCE/DISSAPEARANCE OF NAV ON SCROLL ===*/
/*=================================================*/

let prevScrollpos = window.pageYOffset;
let scrollCounter = 0;
let scrollThreshold = 10; // Set the number of scrolls before triggering transition
let scrollEnabled = true; // Flag to enable or disable the scroll event

window.onscroll = function () {
    if (!scrollEnabled) return; // Check if scroll is enabled
    let currentScrollPos = window.pageYOffset;
    let navbar = document.getElementById("navbar");
    let transitionDuration = 0.5; // Set the initial transition duration

    if (prevScrollpos > currentScrollPos) {
        navbar.style.transition = `top ${transitionDuration}s, opacity 3s`;
        navbar.style.top = "-5px";
    } else {
        if (scrollCounter >= scrollThreshold) {
            navbar.style.transition = `top ${transitionDuration}s, opacity 3s`;
            navbar.style.top = "-70px";
            scrollCounter = 0; // Reset the scroll counter
        } else {
            scrollCounter++;
        }
    }
    prevScrollpos = currentScrollPos;
}



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
const localOverlayDiv = document.querySelector(".local-overlay");
const navbar = document.getElementById("navbar");
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
    scrollEnabled = false;

    //Set dark overlay over background
    localOverlayDiv.style.display = "block";

    //Initiate opacity transition from 0 to 0.7
    setTimeout(function () {
        localOverlayDiv.classList.add("increase-overlay-opacity");
    }, 500)

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
    scrollEnabled = true;

    //Transition opacity of overlay from 0.7 to 0
    localOverlayDiv.classList.remove("increase-overlay-opacity");

    //Remove overlay styles once transition has finished
    setTimeout(function () {
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


/*========================================*/
/*================= MENU =================*/
/*========================================*/

const menuLinkAbout = document.querySelector(".menu-link-about");
const menuLinkProjects = document.querySelector(".menu-link-projects");
const menuLinkReferences = document.querySelector(".menu-link-references");
const menuLinkContact = document.querySelector(".menu-link-contact");
const menuLinkLocation = document.querySelector(".location-container-for-footer");

//HIDE MENU ONCE ANY MENU LINK HAS BEEN CLICKED
menuLinkAbout.addEventListener("click", () => {
    onSecondHamburgerClick();
});
menuLinkProjects.addEventListener("click", () => {
    onSecondHamburgerClick();
});
menuLinkReferences.addEventListener("click", () => {
    onSecondHamburgerClick();
});
menuLinkContact.addEventListener("click", () => {
    onSecondHamburgerClick();
});
menuLinkLocation.addEventListener("click", () => {
    onSecondHamburgerClick();
});
localOverlayDiv.addEventListener("click", () => {
    onSecondHamburgerClick();
});


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
        530: {
            slidesPerView: 1.6,
            spaceBetween: 50.5,
        },
        540: {
            slidesPerView: 1.65,
            spaceBetween: 51.0,
        },
        550: {
            slidesPerView: 1.7,
            spaceBetween: 51.5,
        },
        560: {
            slidesPerView: 1.8,
            spaceBetween: 52.5,
        },
        // When window width is greater than 560px and less than or equal to 600px
        600: {
            slidesPerView: 1.9,
            spaceBetween: 55,
        },
        // When window width is greater than 600px and less than or equal to 640px
        640: {
            slidesPerView: 2.0,
            spaceBetween: 57.5,
        },
        // When window width is greater than 640px and less than or equal to 680px
        680: {
            slidesPerView: 2.1,
            spaceBetween: 60,
        },
        // When window width is greater than 680px and less than or equal to 720px
        720: {
            slidesPerView: 2.2,
            spaceBetween: 62.5,
        },
        // When window width is greater than 720px and less than or equal to 760px
        760: {
            slidesPerView: 2.3,
            spaceBetween: 65.0,
        },
        // When window width is greater than 760px and less than or equal to 800px
        800: {
            slidesPerView: 2.4,
            spaceBetween: 67.5,
        },
        // When window width is greater than 800px and less than or equal to 840px
        840: {
            slidesPerView: 2.5,
            spaceBetween: 70,
        },
        // When window width is greater than 840px and less than or equal to 880px
        880: {
            slidesPerView: 2.6,
            spaceBetween: 72.5,
        },
        // When window width is greater than 880px and less than or equal to 920px
        920: {
            slidesPerView: 2.7,
            spaceBetween: 75.0,
        },
        // When window width is greater than 920px and less than or equal to 960px
        960: {
            slidesPerView: 2.8,
            spaceBetween: 77.5,
        },
        // When window width is greater than 960px and less than or equal to 1000px
        1000: {
            slidesPerView: 2.9, // Maximum slidesPerView at 3.0
            spaceBetween: 80,
        },
        // When window width is greater than 1000px and less than or equal to 1040px
        1040: {
            slidesPerView: 3.0,
            spaceBetween: 82.5,
        },

        1080: {
            slidesPerView: 3.1,
            spaceBetween: 85.0,
        },

        1120: {
            slidesPerView: 3.2,
            spaceBetween: 87.5,
        },

        1160: {
            slidesPerView: 3.3,
            spaceBetween: 90.0,
        },

        1200: {
            slidesPerView: 3.4,
            spaceBetween: 92.5,
        },

        1240: {
            slidesPerView: 3.5,
            spaceBetween: 95.0,
        },


        1280: {
            slidesPerView: 3.6,
            spaceBetween: 97.5,
        },

        1320: {
            slidesPerView: 3.7,
            spaceBetween: 100,
        },


        1360: {
            slidesPerView: 3.8,
            spaceBetween: 102.5,
        },

        1400: {
            slidesPerView: 3.9,
            spaceBetween: 105.0,
        },

        1440: {
            slidesPerView: 4.0,
            spaceBetween: 107.5,
        },


    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        slideChangeTransitionStart: function () {

            // Get the REAL index of the currently active slide
            const activeRealIndex = this.realIndex;

            const activeIndex = this.activeIndex;

            // Define an array of details for each slide
            const slideDetails = [

                {
                    projectType: "Website",
                    projectTitle: "Project Title 1",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae felis dictum fermentum. Ut facilisis metus nec nisl posuere, ac interdum tellus rhoncus. Pellentesque lacinia orci sed vehicula sagittis. Nulla facilisi.
                    `,
                    projectLink: "https://example.com/project1",
                },
                {
                    projectType: "E-commerce App",
                    projectTitle: "Project Title 2",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, etiam nec lectus in turpis lacinia commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Sed bibendum, mi vitae tincidunt ullamcorper.
                    `,
                    projectLink: "https://example.com/project2",
                },
                {
                    projectType: "Game",
                    projectTitle: "Project Title 3",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, ante a consectetur congue, elit lacus feugiat justo, ac euismod tellus urna sit amet neque. Curabitur vitae justo id libero scelerisque tincidunt.
                    `,
                    projectLink: "https://example.com/project3",
                },
                {
                    projectType: "Website",
                    projectTitle: "Project Title 4",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, adipiscing elit. Suspendisse at orci vel urna semper ultrices. Nunc gravida libero in risus tristique, non ultricies ligula fermentum. Suspendisse potenti. Integer quis vehicula purus.
                    `,
                    projectLink: "https://example.com/project4",
                },
                {
                    projectType: "E-commerce App",
                    projectTitle: "Project Title 5",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel fermentum tortor. Integer sit amet luctus orci. Quisque in convallis dolor. Sed eu purus euismod, vestibulum lectus eu, pharetra massa.
                    `,
                    projectLink: "https://example.com/project5",
                },
                {
                    projectType: "Game",
                    projectTitle: "Project Title 6",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, etiam nec lectus in turpis lacinia commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Sed bibendum, mi vitae tincidunt ullamcorper.
                    `,
                    projectLink: "https://example.com/project6",
                },
                {
                    projectType: "Website",
                    projectTitle: "Project Title 7",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec pulvinar metus, at efficitur metus. Aenean fermentum, ante ac luctus lacinia, justo orci venenatis. Maecenas ut laoreet odio.
                    `,
                    projectLink: "https://example.com/project7",
                },
                {
                    projectType: "E-commerce App",
                    projectTitle: "Project Title 8",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, adipiscing elit. Fusce tristique justo in eros faucibus, non rhoncus eros tincidunt. Sed nec leo vel ex malesuada lacinia. Nullam ut fermentum neque, vel facilisis libero. Etiam non eros in sapien.
                    `,
                    projectLink: "https://example.com/project8",
                },
                {
                    projectType: "Game",
                    projectTitle: "Project Title 9",
                    projectDescription: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet urna nec odio cursus ullamcorper. Integer eu felis vel tellus sollicitudin efficitur. Aliquam nec efficitur turpis. In hac habitasse platea dictumst.
                    `,
                    projectLink: "https://example.com/project9",
                },
            ];

            // Get the details for the currently active slide
            const activeSlideDetails = slideDetails[activeRealIndex];

            // Update the wrapperContentBelowSwiper innerHTML with the active slide's details
            wrapperContentBelowSwiper.innerHTML = `
                <h5 class="activity">${activeSlideDetails.projectType}</h5>
                <h5 id="swiper-description-header">${activeSlideDetails.projectTitle}</h5>
                <p id="swiper-description">
                    ${activeSlideDetails.projectDescription}
                </p>
                <div class="wrapper-view-project">
                    <a href="${activeSlideDetails.projectLink}" target="_blank"><b>View project</b></a>
                    <div class="left-view-project-underline"></div>
                    <div class="right-view-project-underline"></div>
                </div>
            `;


            //Assigns filter on active/inactive slides
            this.slides.forEach((slide, index) => {
                // Check if the current slide is not the active slide
                if (index !== activeIndex) {
                    // Add the inactive class to this slide
                    slide.classList.remove("active-slide");
                    slide.classList.add('inactive-slide');
                } else {
                    // Remove the inactive class from the active slide
                    slide.classList.remove('inactive-slide');
                    slide.classList.add("active-slide");
                }
            });

        },

    }

});


/*=============================================*/
/*==== POPULATE EXHIBITION SWIPER ON START ====*/
/*=============================================*/


const wrapperContentBelowSwiper = document.querySelector(".wrapper-content-below-swiper");

// Function to update the content ON START, based on slide details
function updateContent(slideDetails) {
    wrapperContentBelowSwiper.innerHTML = `
        <h5 class="activity">${slideDetails.projectType}</h5>
        <h5 id="swiper-description-header">${slideDetails.projectTitle}</h5>
        <p id="swiper-description">
            ${slideDetails.projectDescription}
        </p>
        <div class="wrapper-view-project">
            <a href="${slideDetails.projectLink}" target="_blank"><b>View project</b></a>
            <div class="left-view-project-underline"></div>
            <div class="right-view-project-underline"></div>
        </div>
    `;

    //Apply active/inactive classes to slides when called (On Start)
    projectsSwiper.slides.forEach((slide, index) => {
        if (index === projectsSwiper.activeIndex) {
            slide.classList.remove("inactive-slide");
            slide.classList.add("active-slide");
        } else {
            slide.classList.remove("active-slide");
            slide.classList.add("inactive-slide");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Define slide details for the first slide
    const firstSlideDetails = {
        projectType: "Website",
        projectTitle: "Project Title 1",
        projectDescription: `

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis vitae felis dictum fermentum. Ut facilisis metus nec nisl posuere, ac interdum tellus rhoncus. Pellentesque lacinia orci sed vehicula sagittis. Nulla facilisi.

        `,
        projectLink: "https://example.com/project1",
    };

    // Call the updateContent function with the details of the first slide
    updateContent(firstSlideDetails);
});




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

/*=========== CONTACT SEND BTN ============*/

//SELECT ELEMENTS FROM DOM
const conactSendBtn = document.querySelector(".send-contact-btn");
const contactErrorContainer = document.querySelector(".contact-error-container");
const nameInputTbx = document.querySelector(".name-input");
const emailInputTbx = document.querySelector(".email-input");
const messageInputTbx = document.querySelector(".message-input");

conactSendBtn.addEventListener("click", function () {

    //Clear all field on button-click
    nameInputTbx.value = null;
    emailInputTbx.value = null;
    messageInputTbx.value = null;

    contactErrorContainer.style.visibility = "visible";
    contactErrorContainer.classList.add("contact-error-visible")

    //Disable button temporarily
    conactSendBtn.disabled = true;

    //Change border color to resemble disabled
    conactSendBtn.style.transition = "background-color 0.35s, transform 0.35s, border-color 0.35s, color 0.5s";
    conactSendBtn.style.borderColor = "#6D6D6D";
    conactSendBtn.style.color = "#6D6D6D";

    //Turn off hover and active effect
    conactSendBtn.classList.add('no-hover');
    conactSendBtn.classList.add('no-active');
    conactSendBtn.style.cursor = "auto";


    // Set a timeout to remove the 'visible' class after 5 seconds
    setTimeout(function () {
        contactErrorContainer.classList.remove('contact-error-visible');

        //Enable button again
        conactSendBtn.disabled = false;

        //Change back border color to resemble able
        conactSendBtn.style.transition = "background-color 0.35s, transform 0.35s, border-color 3s, color 2s";
        conactSendBtn.style.borderColor = "black";
        conactSendBtn.style.color = "black";

        //Turn on hover and active effect
        conactSendBtn.classList.remove('no-hover', 'no-active');
        conactSendBtn.style.cursor = "pointer";

        setTimeout(function () {
            contactErrorContainer.style.visibility = "hidden";
        }, 1500);

    }, 20000);

})

//Clear all input fields on page-reload
document.addEventListener("DOMContentLoaded", function () {
    //Clear all field on button-click
    nameInputTbx.value = null;
    emailInputTbx.value = null;
    messageInputTbx.value = null;
})




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
