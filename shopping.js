const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const name = e.currentTarget.item.value;
    console.log(name);
}

shoppingForm.addEventListener("submit", handleSubmit);