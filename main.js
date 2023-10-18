const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const jokePunchline = document.querySelector('.jokePunchline');

async function generateJoke() {
  const config = {
    headers: {
      'X-RapidAPI-Key': '4933c4a231msh409f7d02188708cp14035cjsnd48285ab927a',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
    },
  };

  const resApi = await fetch(
    'https://dad-jokes.p.rapidapi.com/random/joke',
    config
  );
  // Consuming API
  const data = await resApi.json();
  const response = data.body[0];
  jokeEl.innerHTML = response.setup;

  setTimeout(() => {
    jokePunchline.innerHTML = response.punchline;
  }, 3000);
}
generateJoke();
jokeBtn.addEventListener('click', generateJoke);
