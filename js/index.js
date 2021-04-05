document.addEventListener('DOMContentLoaded', () => {
    let videoBanner = document.getElementById('banner-video');
    videoBanner.play();
});

function loop() {
    videoBanner.currentTime = 0;
    videoBanner.play();
}
let videoBanner = document.getElementById('banner-video');
videoBanner.addEventListener('ended', () => {
    loop();

});


addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.contador-cantidad');
    const vel = 200;

    const counterAnimated = () => {
        for (const counter of counters) {
            const counterUpdate = () => {
                let max = +counter.dataset.total,
                    current = +counter.innerText,
                    increasing = max / vel;

                if (current < max) {
                    counter.innerText = Math.ceil(current + increasing);
                    setTimeout(counterUpdate, 1);
                } else {
                    counter.innerText = max;
                }
            }
            counterUpdate();
        }
    }
    counterAnimated();
});


window.addEventListener("load", () => {
    document.getElementById("loader").classList.toggle("loaderHide");
});
let swiperTwo = new Swiper('.swiper-container-sponsors', {
    loop: false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: false,
    effect: 'slide',
    breakpoints: {
        375: {
            spaceBetween: 20,
            slidesPerView: 4
        },
        425: {
            spaceBetween: 30,
            slidesPerView: 4

        },
        450: {
            spaceBetween: 30,
            slidesPerView: 5,

        },
        540: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        580: {
            slidesPerView: 6,
        },
        760: {
            slidesPerView: 7,
            spaceBetween: 40,
        },
        820: {
            slidesPerView: 7,
            spaceBetween: 60,
        },
        900: {
            slidesPerView: 8,
            spaceBetween: 45,
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 60,
        },
        1500: {
            slidesPerView: 10,
            spaceBetween: 60,
        },
        1500: {
            slidesPerView: 10,
            spaceBetween: 80,
        }
    }

});

function accordionOptions() {

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {



            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
                accordionItemBody.style.marginTop = "15px";
            } else {
                accordionItemBody.style.maxHeight = 0;
                accordionItemBody.style.marginTop = "0px";
            }

        });
    });
}
accordionOptions();


const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const msg = document.querySelector('#form textarea');

const expresiones = {

    name: /^[a-zA-ZÀ-ÿ\s]{6,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,15}$/,
    msg: /^[\s\S]{10,400}$/,
}

const campos = {
    name: false,
    email: false,
    phone: false,
    msg: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            break;
        case "phone":
            validarCampo(expresiones.phone, e.target, 'phone');
            if (phone.value == "") {

                document.querySelector(`.input-phone .input-error`).style.display = "none"
            }
            break;
        case "msg":
            validarText(expresiones.msg, e.target, 'msg');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {


        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
        campos[campo] = true;
    } else {


        document.querySelector(`.input-${campo} .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (input.value == "") {

        document.querySelector(`.input-${campo} .input-error`).style.display = "none"
    }
}
const validarText = (expresion, msg, campo) => {
    if (expresion.test(msg.value)) {



        document.querySelector(`.input-msg .input-error`).style.display = "none"
        campos[campo] = true;
    } else {


        document.querySelector(`.input-msg .input-error`).style.display = "block"
        campos[campo] = false;
    }
    if (msg.value == "") {

        document.querySelector(`.input-msg .input-error`).style.display = "none"
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
msg.addEventListener('keyup', validarFormulario);
msg.addEventListener('blur', validarFormulario);

form.addEventListener('keyup', () => {
    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none";
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();


    if (campos.name && campos.email && campos.phone && campos.msg || campos.name && campos.email && campos.phone == "" && campos.msg) {
        document.querySelector(`.input-submit .input-error`).style.display = "none"

        form.reset();
        form.submit();


        return;
    } else {
        document.querySelector(`.input-submit .input-error`).style.display = "block";
        setTimeout(() => {
            document.querySelector(`.input-submit .input-error`).style.display = "none";
        }, 2500);
        return;
    }

});