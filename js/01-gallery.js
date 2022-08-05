import { galleryItems } from "./gallery-items.js";

const listGallary = document.querySelector(".gallery");

function createElements() {
  const markup = galleryItems.reduce((acc, elem) => {
    return (acc += `<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src=${elem.preview}
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>`);
  }, "");

  listGallary.insertAdjacentHTML("beforeend", markup);
}
createElements();

listGallary.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const UrlBigImg = event.target.dataset.source;
  const modal = basicLightbox.create(
    `
     <img src=${UrlBigImg} width="800" height="600">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", keyboardEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", keyboardEsc);
      },
    }
  );

  modal.show();
  function keyboardEsc(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}

// Останнє збереження
