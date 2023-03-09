function wait(ms = 0) {return new Promise(resolve => setTimeout(resolve, ms))};

function getRandomBetween(min = 20, max = 150, randomNumber=Math.random()) {
    return Math.floor(
        randomNumber * (max - min) + min
        );
};

function draw(el) {
    const text = el.textContent;
    let soFar = ``;

    for (const letter of text) {
        console.log(letter);
        soFar += letter;
        console.log(soFar);
    }
};
document.querySelectorAll('[data-type]').forEach(draw);
