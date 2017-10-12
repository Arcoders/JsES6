
setTimeout(function callback() {
  console.log('Ya pasó 3 segundo .........');
}, 3000);

console.log('Hola');

function get(URL, callback) {

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    const DONE = 4;
    const OK = 200;

    if (this.readyState === DONE) {
      if (this.status === OK) {
        callback(null, JSON.parse(this.responseText));
      } else {
        callback(new Error(`Se produjo un error ${this.status}`));
      }
    }

  }

  xhr.open('GET', URL);
  xhr.send(null);

}


get("https://swapi.co/api/people/1/", function onResponse(err, luke) {
  if (err) return console.log(`Request failed: ${err}`);
  console.log(`Request succeded`);
  console.log('luke', luke);
});
