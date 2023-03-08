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


const mainJurusan = document.querySelector('.main-jurusan');
function position() {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1080) {
        mainJurusan.backgroundPosition = "center";
    }else if(windowWidth == 2899) {
        alert('2899');
    }
}

position();