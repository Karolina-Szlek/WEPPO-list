//zapytanie o imię użytkownika
console.log("What is Your name?")


process.stdin.setEncoding('utf8');//żeby polski działał

process.stdin.on('readable', () => {
  const name = process.stdin.read();//odczyta z konsoli wprowadzony tekst
  if (name !== null) {//gdy mamy imię
    process.stdout.write(`Witaj ${name}`);// wypisze Witaj (IMIE)
    process.exit();
  }
});

// Treść- wszystkie te techniki sprowadzają się do jakiejś 
// formy dojścia do strumienia process.stdin