// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")
const cardsMarkup = createGallaryCardMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGallaryCardMarkup(galleryItems) {
  return galleryItems.map (({preview,original,description}) => {
    return `<a class="gallery__link" href= "${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    })
    .join('')
}


galleryContainer.addEventListener("click", onGalleryContainerClick)

const lightbox = new SimpleLightbox(".gallery a", { 
        captionsData: "alt",
        captionDelay: 250,
    });

function onGalleryContainerClick(event) {
  event.preventDefault()

  const isGalleryEl = event.target.nodeName === 'IMG';

  if (!isGalleryEl) {
    return
  }

}   
