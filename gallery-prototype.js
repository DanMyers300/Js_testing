function Gallery(gallery) {

    // If there is no gallery then throw an error
    if (!gallery) {
        throw new Error(`No gallery Found!`);
    }


    // Set the variables
    const images = Array.from(gallery.querySelectorAll(`img`));
    const modal = document.querySelector(`.modal`);
    const prevButton = modal.querySelector(`.prev`);
    const nextButton = modal.querySelector(`.next`);
    let currentImage;


    // Handle opening the modal
    function openModal() {
        console.info('Opening Modal...');
        // First check if the modal is already open
        if (modal.matches('.open')) {
          console.info('Madal already open');
          return; // stop the function from running
        }
        modal.classList.add('open');
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
        modal.classList.remove(`open`);
    }

    // Update the image in the modal and change the text to match
    function showImage(el) {
        if(!el) {
            console.info(`No image to show`);
            return;
        }

        console.log(el);
        modal.querySelector(`img`).src = el.src;
        modal.querySelector(`h2`).textContent = el.title;
        modal.querySelector(`figure p`).textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }


    // Event Listeners
    images.forEach(image => image.addEventListener(`click`, (e)=>showImage(e.currentTarget)));
    modal.addEventListener(`click`, handleClickOutside);
}

// Display gallery to page
const gallery1 = Gallery(document.querySelector(`.gallery1`));
const gallery2 = Gallery(document.querySelector(`.gallery2`));
