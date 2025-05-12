 const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
let isLightboxOpen = false; // Variable pour suivre l'état du lightbox

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.src;
        lightbox.style.display = 'flex';
        isLightboxOpen = true; // Indique que le lightbox est ouvert
    }
});

lightbox.addEventListener('click', () => {
    if (isLightboxOpen) {
        lightbox.style.display = 'none';
        isLightboxOpen = false; // Indique que le lightbox est fermé
    }
});
