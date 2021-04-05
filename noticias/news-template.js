let share = document.getElementById('share');

share.addEventListener('click', () => {
    let media = document.querySelector('.template-title .share-social');
    media.classList.toggle('share-active');
});
let close = document.getElementById('close');
close.addEventListener('click', () => {
    let media = document.querySelector('.template-title .share-social');
    media.classList.remove('share-active');
});

///////////////////////////////////////
let shareTwo = document.getElementById('share-two');

shareTwo.addEventListener('click', () => {
    let mediaTwo = document.querySelector('.share-article .share-social');
    mediaTwo.classList.toggle('share-active');
});
let closeTwo = document.getElementById('close-two');
closeTwo.addEventListener('click', () => {
    let mediaTwo = document.querySelector('.share-article .share-social');
    mediaTwo.classList.remove('share-active');
});
///////////////////////////////////////
let copys = document.querySelectorAll('.copy');
copys.forEach(copy => {
    copy.addEventListener('click', () => {

        document.getElementById('copy-msg').classList.add('copy-show');
        getlink();
        setTimeout(() => {
            document.getElementById('copy-msg').classList.remove('copy-show');
        }, 1500);
    });
});

function getlink() {
    var aux = document.createElement("input");
    aux.setAttribute("value", window.location.href);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}