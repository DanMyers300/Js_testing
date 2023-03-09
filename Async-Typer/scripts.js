function wait(ms = 0) {return new Promise(resolve => setTimeout(resolve, ms))};

function getRandomBetween(min = 20, max = 150, randomNumber=Math.random()) {
    return Math.floor(
        randomNumber * (max - min) + min
        );
};

console.log(getRandomBetween());
