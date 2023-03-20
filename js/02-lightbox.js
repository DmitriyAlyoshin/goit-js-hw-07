import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryElem = document.querySelector(".gallery");
let galleryMarkup = galleryItems.map(renderGallery).join("");

function renderGallery({ original, preview, description }) {
  return `
    <li class="gallery__item">
        <a class="gallery__item" href="${original}" >
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>
    </li>`;
}

galleryElem.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
    caption: true,
    captionPosition: "top",    
    captionsData: "alt",
    captionDelay: 256,
    disableScroll:	true,
}) ;
