const baseEndpoint = "https://icanhazdadjoke.com";
const jokeButton = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke`);

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item == not) {console.log(`Used same one`)
  return randomItemFromArray(arr, not)}

  return item;
}

async function fetchJoke() {
  const response = await fetch(`${baseEndpoint}`, {
    headers: {
      Accept: "application/json",
    }, 
  });
  return response.json();
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener(`click`, handleClick);

console.log(randomItemFromArray(buttonText));
