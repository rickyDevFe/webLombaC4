const hiroTitle = document.querySelector('.hiro-title');
const dataTitle = hiroTitle.getAttribute("data-type");
const subTitle = document.querySelector('.subTitle');
const btnStarted = document.querySelector('.btn-started');

const dataArray = [...dataTitle];
const newData = [];
// const array = ['r','e','k','a','y','a','s','a'];

let i = 0;
a = dataArray.length;
log(a);
function printDataArray() {
    // console.log(dataArray[i++]);
    subTitle.innerHTML = newData.join("");
    newData.push(dataArray[i++]);

    if(newData.length == dataArray.length + 1) {
            newData.pop();
    }

    if(i == dataArray.length) {
        i = 0;
    }
}
setTimeout(() => {
    setInterval(printDataArray, 150);
},800);


const penjelasan = document.querySelector('.penjelasan');
const title = document.querySelector('.title');
const desc = document.querySelector('.desc');


const one = document.getElementById('one')
const two = document.getElementById('two')

const footerTitle = document.querySelector('.footer-title');

window.onscroll = () => {
    const windowScroll = Math.floor(window.scrollY);
    const penjelasanOffsetTop = penjelasan.offsetTop;


    if(windowScroll >= 600) {
        if(window.innerWidth > 1070) {
            title.classList.add('fadeLeft');
            desc.classList.add('fadeRight');
            desc.style.width= '800px';
        }
    }


    // two.style.marginLeft = windowScroll / 5  + 'px';

    footerTitle.style.fontSize = windowScroll / 100 + 'px';

    
}


function mobileVersion() {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(window.innerWidth < 647) {
        title.classList.remove("fadeLeft")
        title.style.left = "20%";
        desc.style.width = '300px';
        desc.style.bottom = '15em';
        desc.classList.remove('fadeRight');
    }
}

mobileVersion();




function log(data) {
    console.log(data);
}




