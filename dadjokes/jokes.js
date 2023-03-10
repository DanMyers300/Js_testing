const baseEndpoint = "https://icanhazdadjoke.com/api";
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

async function fetchJoke() {
  const reponse = await fetch(`${baseEndpoint}`);
  console.log(reponse);
}

fetchJoke();
