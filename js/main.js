document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;



        if (scrollTop <= 400) {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.remove("header-donate-active");

        } else {
            let headerDonate = document.getElementById('header-donate');
            headerDonate.classList.add("header-donate-active");
        }
    });

});



// const body = document.body;
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;
// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= 100) {
//         body.classList.remove(scrollUp);
//         return;
//     }

//     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//         // down
//         body.classList.remove(scrollUp);
//         body.classList.add(scrollDown);
//     } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
//         // up
//         body.classList.remove(scrollDown);
//         body.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll;
// });


const cBubble = document.getElementById('contact-bubble');

cBubble.addEventListener('click', () => {


    document.getElementById('bubble-social').classList.toggle('bubble-active');
    document.querySelector('#contact-bubble .iconTimes').classList.toggle('times-active');

    let mail = document.getElementById('ml');
    mail.addEventListener('click', () => {
        document.getElementById('bubble-social').classList.remove('bubble-active');
        document.querySelector('#contact-bubble .iconTimes').classList.remove('times-active');
    });
});

//burger menu button animation
const menuBtn = document.querySelector('.header-btn');
let menuOpen = false;
const navLinks = document.querySelectorAll(".header-menu .header-menu-content");

function menu() {


    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;

            let nav = document.getElementById('nav');
            nav.classList.add("nav-active");

            //
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            nav.classList.remove("nav-active");

        }
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `ShowUp2 0.3s ease-out forwards ${index / 13 }s`;
            }
        });

    });


}
menu();