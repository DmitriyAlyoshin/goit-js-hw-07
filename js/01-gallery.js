import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryEl = document.querySelector(".gallery");

let galleryMarkup = galleryItems
  .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src='${preview}' 
        alt='${description}' 
        data-source='${original}'/>
        </a>
        </li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", clickOnContainer);

function clickOnContainer(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  let closeModal = (evt) => {
    if (evt.code === "Escape") {
      lightboxInstance.close();
    }
  };

  let largeImgUrl = evt.target.dataset.source;

  let lightboxInstance = basicLightbox.create(
        `<img src="${largeImgUrl}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  lightboxInstance.show();
}
