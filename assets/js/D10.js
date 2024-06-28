const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio A----------------------")
let sum = 10 +20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("")
console.log("Esercizio B----------------------")
let random = Math.floor(Math.random() * 21);
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("")
console.log("Esercizio C----------------------")
const me = {name: "Samuele",
            surname: "Castaldo",
            age: '23' 
          }
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("")
console.log("Esercizio D----------------------")
delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("")
console.log("Esercizio D----------------------")
me.skills = ["assembler","c", "c++", "java", "javascript", "sql"]
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("")
console.log("Esercizio F----------------------")
me.skills.push("ciao")
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("")
console.log("Esercizio G----------------------")
me.skills.pop();
console.log(me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("")
console.log("Esercizio 1----------------------")
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("")
console.log("Esercizio 2----------------------")
function whoIsBigger(n1, n2){
  if(n1>n2) {
    return n1;
  } else {
    return n2;
  }
}
console.log(whoIsBigger(2,3))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("")
console.log("Esercizio 3----------------------")
function splitMe(stringa) {
  return stringa.split(/\s+/);
}
console.log(splitMe("Questa è una frase da parte di Epicode"))


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("")
console.log("Esercizio 4----------------------")
function deleteOne(s1, flag) {
  if (flag) {
    return s1.slice(1);
  } else {
    return s1.slice(0, -1);
  }
}
console.log(deleteOne("Epicode", false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("")
console.log("Esercizio 5----------------------")
function onlyLetters(s1) {
  return s1.replace(/\d/g, '');   //d indica una cifra numerica, g per fare la sostituzione con  ''
}
console.log(onlyLetters("I have 4 dogs"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("")
console.log("Esercizio 6----------------------")
function isThisAnEmail(stringa) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(stringa);      //qui riporta se è vero o falso
}
console.log(isThisAnEmail("email@example.com"))
console.log(isThisAnEmail("emailexample.com"))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("")
console.log("Esercizio 7----------------------")
function whatDayIsIt() {
  const giorniDellaSettimana = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  const oggi = new Date();
  const indiceGiorno = oggi.getDay()
  return giorniDellaSettimana[indiceGiorno]
}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("")
console.log("Esercizio 8----------------------")
function rollTheDices(n) {
  const oggetto = { sum: 0, values: [] };

  for (let i = 0; i < n; i++) {
    let numeroCasuale = dice();
    oggetto.sum += numeroCasuale;
    oggetto.values.push(numeroCasuale);
  }
  
  return oggetto;
}

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("")
console.log("Esercizio 9----------------------")
function howManyDays(data) {
  const startDate = new Date(data);
  const oggi = new Date();
  
  const differenzaMs = oggi - startDate;
  const giorniTrascorsi = Math.floor(differenzaMs / (1000 * 60 * 60 * 24));
  
  return giorniTrascorsi;
}
console.log(howManyDays('2024-06-20'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("")
console.log("Esercizio 10----------------------")
function isTodayMyBirthday(compleanno) {
  const oggi = new Date();
  
  const oggiGiorno = oggi.getDate();
  const oggiMese = oggi.getMonth() + 1;
  
  const compleannoData = new Date(compleanno);
  const compleannoGiorno = compleannoData.getDate();
  const compleannoMese = compleannoData.getMonth() + 1; 
  
  return (oggiGiorno === compleannoGiorno) && (oggiMese === compleannoMese);
}
console.log(isTodayMyBirthday('2024-06-28'))

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("")
console.log("Esercizio 11----------------------")
function deleteProp(movies, s) {
  movies.forEach(element => {
    delete element[s]
  })
  
  return movies; // Ritorna l'oggetto movies modificato
}
console.log(deleteProp(movies, 'Poster'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("")
console.log("Esercizio 12----------------------")
function newestMovie(movies) {
  let max = 0
  let maxObjecct = null
  movies.forEach(el => {
    if(max < parseFloat(el.Year)) {
      max = parseFloat(el.Year)
      maxObjecct = el
    }
  })
  return maxObjecct
}
let maxObjecct = newestMovie(movies)
console.log(maxObjecct)

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("")
console.log("Esercizio 13----------------------")
function countMovies(movies) {
 return movies.length
}
console.log(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("")
console.log("Esercizio 14----------------------")
function onlyTheYears(movies) {
  let ar = []
  movies.forEach(el => {
    ar.push(el.Year)
  })
  return ar
}
let onlyYears = onlyTheYears(movies)
console.log(onlyYears)


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("")
console.log("Esercizio 15----------------------")
function onlyInLastMillennium(movies) {
  let ar = []
    movies.forEach(el => {
      if(parseFloat(el.Year) < 2000) {    //in teoria non ce bisogno del pareseFloat
        ar.push(el)
      }
    })
    return ar
}
const onlMillennium = onlyInLastMillennium(movies)
console.log(onlMillennium)

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("")
console.log("Esercizio 16----------------------")
function sumAllTheYears(movies) {
  let sum = 0;
  movies.forEach(el => {
    sum += parseFloat(el.Year)
  })
  return sum
}
console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("")
console.log("Esercizio 17----------------------")
function searchByTitle(movies, s) {
  let ar = []
  movies.forEach(el => {
    if(el.Title.includes(s)) {
      ar.push(el)
    }
  })
  return ar
}
let serchTitle = searchByTitle(movies, 'Lord')
console.log(serchTitle)

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("")
console.log("Esercizio 18----------------------")
function searchAndDivide(movies, s) {
  let ar = {match: [], unmatch: []}
  movies.forEach(el => {
    if(el.Title.includes(s)) {
      ar.match.push(el)
    } else {
      ar.unmatch.push(el)
    }
  })
  return ar
}
let serchDivide = searchAndDivide(movies, 'Lord')
console.log(serchDivide)

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("")
console.log("Esercizio 19----------------------")
function removeIndex(movies, i) {
  if(i < movies.length && i >= 0) {  //controllo dell'indice se è presente
    movies.splice(i,1);
    return movies
  } else {
    console.log('questo indice non è presente');
    return
  }
}
console.log(removeIndex(movies,13))


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("")
console.log("Esercizio 20----------------------")
function ElContainer() {
  let cont = document.getElementById('container')
  return cont
}
let container = ElContainer();
console.log(container);


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("")
console.log("Esercizio 21----------------------")
function selectAllTDs() {
  let tds = document.querySelectorAll('td');

  return tds;
}

let tdElements = selectAllTDs();
console.log("Numero di <td> trovati:", tdElements.length);

tdElements.forEach(td => {
  console.log(td.textContent);
});


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("")
console.log("Esercizio 22----------------------")
function printTds() {
  let tds = document.querySelectorAll('td')

  tds.forEach(td => {
    console.log(td.textContent)
  })
}

printTds();


/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("")
console.log("Esercizio 23----------------------")
function aBackRed() {
  let aRed = document.querySelectorAll('a');

  aRed.forEach(el => {
    el.style.backgroundColor = 'red'
  })
}
aBackRed()


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("")
console.log("Esercizio 24----------------------")
function aggiungiLista(text) {
  let newItem = document.createElement('li')

    newItem.textContent = text

  let myList = document.getElementById('myList')
  myList.appendChild(newItem)
}

aggiungiLista('Nuovo elemento 4');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("")
console.log("Esercizio 25----------------------")
function SvuotaLista() {
  let myList = document.getElementById('myList');

  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}

SvuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("")
console.log("Esercizio 26----------------------")
function addClassTr() {

  let righe = document.querySelectorAll('tr');
  
  righe.forEach(row => {
    row.classList.add('test');
  });
}

addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/
console.log("")
console.log("Esercizio 27----------------------")
function halfTree(n) {
  for(let i = 1; i <= n; i++) {
    let line = '';
    for(let j = 0; j < i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

halfTree(4);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("")
console.log("Esercizio 28----------------------")
function tree(n) {
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n - i - 1; j++) { //questa serve per gli spazi
      line += ' ';
    }

    for (let k = 0; k < 2 * i + 1; k++) { //questa aggiunge *
      line += '*';
    }

    console.log(line);
  }
}

tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("")
console.log("Esercizio 29----------------------")
function isItPrime(n) {

  for(let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; 
    }
  }

  return true;
}
console.log(isItPrime(5))


