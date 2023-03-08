const btnLihat = document.querySelector('.btn-lihat');
const teamContainer = document.getElementById('team');
const alertPop = document.querySelector('.alert-pop');

btnLihat.addEventListener('click', (e) => {

    e.preventDefault();
    teamContainer.classList.remove('hidden');

        alertPop.style.left = '0px';
        alertPop.style.position = "absolute";
        scrollToTeam();
    
        console.log(cardTeam.offsetTop);


    })


const rapids = document.querySelectorAll('.rapid');
const btnRapids = document.querySelectorAll('#btn-person');
const cardsTeam = document.querySelectorAll('.card-team');

let clicked = 0
btnRapids.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cardsTeam[i].classList.remove("hidden");

        if(i == 1) {
            cardsTeam[1].classList.remove("hidden");
            cardsTeam[1].classList.add("fadeToRight");
            cardsTeam[0].classList.add("hidden");
            cardsTeam[2].classList.add("hidden");

            clicked++;

            if(clicked > 1) {
                window.scrollBy(0,0);
                return false;
            }
            window.scrollBy(0,450);

        } else if(i == 0) {
            cardsTeam[0].classList.remove("hidden");
            cardsTeam[0].classList.add("fadeToLeft");
            cardsTeam[1].classList.add("hidden");
            cardsTeam[2].classList.add("hidden");
            clicked++;

            if(clicked > 1) {
                window.scrollBy(0,0);
                return false;
            }
            window.scrollBy(0,450);
            
        } else if(i == 2) {
            cardsTeam[2].classList.remove("hidden");
            cardsTeam[2].classList.add("fadeToTop");
            cardsTeam[1].classList.add("hidden");
            cardsTeam[0].classList.add("hidden");

            clicked++;

            if(clicked > 1) {
                window.scrollBy(0,0);
                return false;
            }
            window.scrollBy(0,450);
        } 

    })
    
})

const rapidWrapper = document.querySelector('.rapid-wrapper');
const cardTeam = document.querySelector('.card-team');


 // setTimeout(() => {
        //     cardsTeam[i].classList.add("hidden");
        // },500)
        // const parent = btn.parentElement;
        // parent.classList.add("hidden");
        // console.log(parent);
// }


function scrollToTeam() {
    window.scrollBy(0, rapidWrapper.offsetTop);
}

function scrollToCard() {
    window.scrollBy(0,450)
}