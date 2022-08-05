import { galleryItems } from "./gallery-items.js";

const listGallary = document.querySelector(".gallery");

function createElements() {
  const markup = galleryItems.reduce((acc, elem) => {
    return (acc += `<li><a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}  alt="${elem.description}" />
</a></li>`);
  }, "");

  listGallary.insertAdjacentHTML("beforeend", markup);
}
createElements();

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
lightbox();
