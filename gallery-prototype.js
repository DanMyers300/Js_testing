function Gallery(gallery) {
    if (!gallery) {
        throw new Error(`No gallery Found!`);
    }

    const images = Array.from(gallery.querySelectorAll(`img`));
    const modal = document.querySelector(`.modal`);
    const prevButton = modal.querySelector(`.prev`);
    const nextButton = modal.querySelector(`.next`);
    let currentImage;

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
    }

    images.forEach(image => image.addEventListener(`click`, (e)=>showImage(e.currentTarget)));
}

const gallery1 = Gallery(document.querySelector(`.gallery1`));
const gallery2 = Gallery(document.querySelector(`.gallery2`));
