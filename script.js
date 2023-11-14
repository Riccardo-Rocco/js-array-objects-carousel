const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carosello = document.querySelector(".carosello");
const anteprimeContainer = document.querySelector(".anteprime");
const thumbnailsContainer = document.querySelector(".thumbnails");
const frecce = document.querySelectorAll(".freccia");

let immagineAttuale = 0;
let autoplayInterval;

function cambiaImmagine(index) {
    document.querySelector(".carosello-image.active").classList.remove("active");
    document.querySelectorAll(".carosello-image")[index].classList.add("active");
    immagineAttuale = index;
}

function creaThumbnail(index) {
    const anteprima = document.createElement("img");
    anteprima.src = images[index].image;
    anteprima.classList.add("anteprima-image");
    anteprima.dataset.index = index;
    anteprima.addEventListener("click", () => {
        const index = anteprima.dataset.index;
        cambiaImmagine(index);
    });
    thumbnailsContainer.appendChild(anteprima);
}

function attivaAutoplay() {
    autoplayInterval = setInterval(() => {
        immagineAttuale = (immagineAttuale + 1) % images.length;
        cambiaImmagine(immagineAttuale);
    }, 3000);
}

function disattivaAutoplay() {
    clearInterval(autoplayInterval);
}

frecce.forEach(freccia => {
    freccia.addEventListener("click", () => {
        disattivaAutoplay();
        if (freccia.classList.contains("prev")) {
            immagineAttuale = (immagineAttuale - 1 + images.length) % images.length;
        } else if (freccia.classList.contains("next")) {
            immagineAttuale = (immagineAttuale + 1) % images.length;
        }
        cambiaImmagine(immagineAttuale);
    });
});

carosello.addEventListener("mouseenter", disattivaAutoplay);
carosello.addEventListener("mouseleave", attivaAutoplay);

for (let i = 0; i < images.length; i++) {
    const immagine = document.createElement("img");
    immagine.src = images[i].image;
    immagine.classList.add("carosello-image");
    if (i === 0) {
        immagine.classList.add("active");
    }
    carosello.appendChild(immagine);

    creaThumbnail(i);
}


attivaAutoplay();
