const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");

const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const name = e.currentTarget.item.value;
    if (!name) return;
    const item = {
        name,
        id: Date.now(),
        complete: false,
    }
    items.push(item);
    console.log(`There are now ${items.length} in your state`);
    e.target.reset();
    displayItems();
}

function displayItems() {
    const html = items.map((item) => 
    `<li class="shopping-item">
    <input type="checkbox">
    <span class="itemName">${item.name}</span>
    <button aria-label="Remove ${item.name}">&times;</button>
    </li>
    `)
    .join('');
    list.innerHTML = html;
    console.log(html);
}

shoppingForm.addEventListener("submit", handleSubmit);
