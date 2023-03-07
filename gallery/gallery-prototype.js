function Gallery(gallery) {

    // If there is no gallery then throw an error
    if (!gallery) {
        throw new Error(`No gallery Found!`);
    }

    // Set the variables
    this.gallery = gallery;
    this.images = Array.from(gallery.querySelectorAll('img'));
    this.modal = document.querySelector('.modal');
    this.prevButton = this.modal.querySelector('.prev');
    this.nextButton = this.modal.querySelector('.next');


    // Escape closes the Modal
    function handleKeyUp(e) {
        if (e.key === `Escape`) return closeModal();
        if (e.key === 'ArrowRight' ) return showNextImage();
        if (e.key === 'ArrowLeft') return showPrevImage();
    }

    this.images.forEach((image) => 
        image.addEventListener(`keyup`, (e) => {
        if (e.key === `Enter`) {
            showImage(e.currentTarget);
        }
    }))

    // Event Listeners
    this.images.forEach(image => image.addEventListener(`click`, (e)=>showImage(e.currentTarget)));
    this.modal.addEventListener(`click`, handleClickOutside);
}

// Handle opening the modal
function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (this.modal.matches('.open')) {
      console.info('Madal already open');
      return; // stop the function from running
    }
    this.modal.classList.add('open');
    window.addEventListener(`keyup`, handleKeyUp);
    this.nextButton.addEventListener(`click`, showNextImage);
    this.prevButton.addEventListener(`click`, showPrevImage);
}

// If someone clicks outside then close the modal
function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
        closeModal();
    }
}
// Close Modal
function closeModal() {
    console.info(`Closing Modal...`);
    this.modal.classList.remove(`open`);
    window.removeEventListener("keyup", handleKeyUp);
    this.nextButton.removeEventListener("click", showNextImage);
}

// Show next Image
function showNextImage() {
    showImage(currentImage.nextElementSibling
    || gallery.firstElementChild);
}
// Show prev Image
function showPrevImage() {
    showImage(currentImage.previousElementSibling
    || gallery.lastElementChild);
}

// Update the image in the modal and change the text to match
function showImage(el) {
    if(!el) {
        console.info(`No image to show`);
        return;
    }

    console.log(el);
    this.modal.querySelector(`img`).src = el.src;
    this.modal.querySelector(`h2`).textContent = el.title;
    this.modal.querySelector(`figure p`).textContent = el.dataset.description;
    currentImage = el;
    openModal();
}

// Display gallery to page
const gallery1 = new Gallery(document.querySelector(`.gallery1`));
const gallery2 = new Gallery(document.querySelector(`.gallery2`));

console.log(gallery1, gallery2)
