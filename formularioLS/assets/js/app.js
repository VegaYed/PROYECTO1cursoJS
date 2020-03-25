//variables
const ListTwetts = document.getElementById('lista-tweets');

//Event listener
const EventListener = () =>{
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);
  ListTwetts.addEventListener('click',eliminarTweet);
  document.addEventListener('DOMContentLoaded', localStorageListo);
}

EventListener();
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //rescatamos el tweet del textarea
    let idTweet = Math.random();
    const tweet = document.getElementById('tweet').value;

    tweet
    //creamos el List item para posteriormente agregarlo a ListTwetts
    const li = document.createElement('li');
    //establecemos el texto del li con el valor del tweet rescatado
    li.innerText = tweet;
    //añadimos el li con el tweet la lista de tweets
    ListTwetts.appendChild(li);

    //Creamos un boton para eliminar ese tweet ligandolo al li
    const botonBorrar = document.createElement('a');
    // seteamos la clase 'borrar-tweet' al boton
    botonBorrar.classList = 'borrar-tweet';
    // seteamos un texto al botonBorrar
    botonBorrar.innerText = 'X';
    //añadimos al li el boton
    li.appendChild(botonBorrar);

    agregarTweetLocalStorage(tweet);
}

function eliminarTweet(e) {
  e.preventDefault();
  if(e.target.className === 'borrar-tweet'){
     e.target.parentElement.remove();
  }
}

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
    console.log(JSON.stringify(tweets));
}

function obtenerTweetLocalStorage() {
    let tweets;
    if(localStorage.getItem('tweets') === null){
        tweets=[];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
        console.log(tweets);
    }
    console.log(tweets);
    return tweets;
}

function localStorageListo() {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.forEach((tweet) => {
        const li = document.createElement('li');
        li.innerText = tweet;
        ListTwetts.appendChild(li);
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
        li.appendChild(botonBorrar);
    });
}
