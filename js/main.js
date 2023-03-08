const main = document.querySelector('.main');
const userInput = document.getElementById('userViewer');
const userText = document.querySelector('.userText');
const texts = document.querySelectorAll(".teks");
const imgKegiatan = document.getElementById('img-kegiatan');
const salamTitle = document.querySelector('.judul-salam');
const title = document.querySelector('.title');

const images = ['Main2.jpeg', 'main3.jpeg', "Smkn7.jpg"];
const textsTitle = ['Membangun Ekosistem teknologi', 'Berbudaya serta Inovatif', "SMK Negeri 7 Batam"];


let i = 0;
let a = 0;
const changeMain = () => {
    main.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('images/${images[i++]}')`;
    main.classList.add('fade');

    setTimeout(() => {
        main.classList.remove('fade');
    }, 4000);

    if (images[i] == 2) {
        // console.log('sama');
    }

    if (i == images.length) {
        i = 0;
    }
}
setInterval(changeMain, 5000);

const changeTitle = () => {
    changeText();
}

setInterval(changeTitle, 5000);

function changeText() {
    // console.log(textsTitle[a++]);
    title.innerHTML = textsTitle[a++];
    if (a == textsTitle.length) {
        a = 0;
    }
}

if (!localStorage.getItem("userviewer")) {
    localStorage.setItem("userviewer", 'There!');
}

const changeUserText = () => {
    let newUserViewer = userInput.value;
    localStorage.setItem('userviewer', newUserViewer);
    userText.innerHTML = "Hello " + newUserViewer;
    userInput.value = "";
}


window.onload = () => {
    userText.innerHTML = "Hello " + localStorage.getItem("userviewer");
}


let imagesKegiatan = ["Paskibra.jpeg", "Kegiatan-ngoding.jpg", 'pramuka2.jpg'];

texts.forEach((text, i) => {
    text.addEventListener('mouseover', () => {
        imgKegiatan.setAttribute('src', 'images/' + imagesKegiatan[i]);
    })
})

const mark = document.getElementById('mark');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const join = document.querySelector('.join');
const profile = document.querySelector('.profile');
const nav = document.querySelector('nav');

window.onscroll = () => {
    let y = window.scrollY;

    let joinOffsetTop = join.offsetTop;

   

    if(window.innerWidth >= 1080) {
        first.style.left = Math.floor(y) / 30 * 2 + 'px';
        second.style.right = Math.floor(y) / 30  * 2.4 + 'px';
    } else if(window.innerWidth <= 647) {
        first.style.left = Math.floor(y) /  2080 * 30+ 'px';
        second.style.right = Math.floor(y) / 2080 * 30+ 'px';
    }

    // profile.style.backgroundPosition = "0px, " +Math.floor(y) + 'px';
    profile.style.backgroundPositionY = Math.floor(y) * 2 / 6 + 'px';
    profile.style.backgroundSize = "cover";

    if(window.pageYOffset > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }

}
function position() {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1080) {
        main.style.backgroundPosition = 'center';
    }else if(windowWidth == 2899) {
        alert('2899');
    }
}


position();


const box = document.querySelector('.box');
const photos = ['Gallery-1.jpeg', 'Gallery-2.jpeg', 'Gallery-3.jpeg', 'Gallery-4.jpeg', 'Gallery-5.jpeg', "Gallery-6.jpeg"]
const galleryWrapper = document.querySelector('.galleryWrapper');


function gallery() {
    let cards = '';

    photos.forEach((photo) => {
        cards += cardsPhoto(photo);
        // cards.style.hover = `background-image: url('images/${photo}')`
        galleryWrapper.innerHTML = cards;
        const boxes = document.querySelectorAll('.box');

        boxes.forEach((box, i) => {
        box.style.transition = '.8s';

            box.addEventListener('mouseover', () => {
                box.style.backgroundImage = ` url('images/${photos[i]}')`
            })

            box.addEventListener('mouseleave', () => {
                box.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,.5), rgba(0,0,0,.5)), url('images/${photos[i]}')`
            })
        })

    })
}
gallery();

function cardsPhoto(photo) {
    return `<div class="box" id="terganti" style="background-image:linear-gradient(0deg, rgba(0,0,0,.5), rgba(0,0,0,.5)), url('images/${photo}')"></div>`;
}


const btnHome = document.querySelector('#btn-home');

btnHome.addEventListener('click', function(e) {
    e.preventDefault();
    backToTop();
})
function backToTop() {  window.scrollTo({top:0, behavior:"smooth"})};


const hamburgerBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const sideBar = document.querySelector('.sidebar');
hamburgerBtn.addEventListener('click', () => {
    sideBar.style.left = "0";
    sideBar.style.transition = '.9s';
})
closeBtn.addEventListener('click',() => {
    sideBar.style.transition = '2s';
    sideBar.style.left = '-80em';
})



const navigationSidebar = document.querySelectorAll('.navigation-sidebar a');

navigationSidebar.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.style.left = '-80em';
    })
})


const navigates = document.querySelectorAll(".navigate a");
const pagination = document.querySelector(".pagination");
const futsal = document.querySelector('#futsal');
const english = document.querySelector('#english');
const lkbb = document.querySelector("#pramuka-lkbb")
const presTitle = document.querySelectorAll('.pres-title');
        presDesc = document.querySelectorAll('.pres-desc');

console.log(presTitle);
let clicked = 0;

navigates.forEach(navigate => {
    navigate.addEventListener("click", (e) => {
        e.preventDefault();
        if(e.target.classList.contains("nav-one")) {
            futsal.style.display = "none";
            english.style.display = "flex";
            lkbb.style.display = " none";
            pagination.style.transform = "translateX(10%)"
            pagination.style.transition = ".4s"

            // Transition
            presTitle[0].classList.add("trans");
            presDesc[0].classList.add("fade")

        } else if(e.target.classList.contains("nav-two")) {
            english.style.display = "none";
            futsal.style.display = "flex";
            lkbb.style.display = "none";
            pagination.style.transform = "translateX(128%)"
            pagination.style.transition = ".4s"

            presTitle[1].classList.add("trans");
            presDesc[1].classList.add("fade")
            if(window.innerWidth < 647) {
                pagination.style.transform = "translateX(320%)"
                
            }

        } else if(e.target.classList.contains("nav-three")) {
            lkbb.style.display = "flex";
            english.style.display = "none";
            futsal.style.display = "none";
            pagination.style.transform = "translateX(267%)"
            pagination.style.transition = ".4s"

            presTitle[2].classList.add("trans");
            presDesc[2].classList.add("fade")

            if(window.innerWidth < 647) {
                pagination.style.transform = "translateX(520%)"
                return;
            } else if(window.innerWidth === 1080) {
                pagination.style.transform = "translateX(267%)"
            }

        }
    })
})


function mobileVersion() {
    pagination.style.transform = "translateX(40%)";
    pagination.style.transition = ".4s"
}