var fs = require('fs');

//1  klasyczny interfejs programowania asynchronicznego, w którym asynchroniczny
//wynik wywołania funkcji jest dostarczany jako argument do funkcji zwrotnej (callback).


fs.readFile('plik.txt', 'utf-8', function(err, data1) {
    fs.readFile('plik2.txt', 'utf-8', function(err, data2) {
        fs.readFile('plik3.txt', 'utf-8', function(err, data3) {
            console.log(data1);
            console.log(data2);
            console.log(data3);
          });
      });
});

//Zmiana interfejsu na Promise na trzy sposoby

//2 za pomocą ”ręcznie” napisanej funkcji przyjmującej te same argumenty co fs::readFile, ale zwracającej Promise----------------

//code-kodowanie, tu utf-8
//fs.readFile( path, code, (err, data) -. jak ok weźmie data, jak nie to err
function my_fspromise( path, code ) {
    return new Promise( (res, rej) => {
        fs.readFile( path, code, (err, data) => {//czyli tak wygląda promis, jak ok, to resolve(res) jak err to reject(rej) 
            if ( err )
                rej(err);
            res(data);
            });
        });
};


async function readIt(path) {
    try {
        const text = await my_fspromise('plik.txt', 'utf-8');
        console.log('My promis await:', text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
readIt('plik.txt');


//wywołanie z kontynuacją 

my_fspromise('plik.txt', 'utf-8')
    .then( data1 => {
        my_fspromise('plik2.txt', 'utf-8')
            .then( data2 => {
                my_fspromise('plik3.txt', 'utf-8')
                    .then( data3 => {
                        console.log( data1 );
                        console.log( data2 );
                        console.log( data3 );
                })
        })
    })


    


// 3------------------------------------------------------------------------------------------------------------
//za pomocą util.promisify z biblioteki standardowej


const util = require('util');
const readFile = util.promisify(fs.readFile);

//STARY
readFile('plik.txt', 'utf8')
    .then((text) => {
        console.log(text);
    })
    .catch((err) => {
        console.log('Error', err);//jakby błąd przy zczytywaniu
    });

//NOWY

async function readIt1(path) {
    try {
        const text = await readFile(path, {encoding: 'utf8'});
        console.log('CONTENT:', text);
    }
    catch (err) {
        console.log('ERROR:', err);
    }
}
readIt1('plik.txt');


// 4 • za pomocą fs.promises z biblioteki standardowej ---------------------------------------------------------------


const fsPromises = require('fs').promises;
async function openAndClose() {
  let file;
  try {
    file = await fsPromises.readFile('plik.txt', 'utf-8');//korzystamy z tego mofułu i zniego read file
    console.log(file)
  } catch(e){
    console.log(e)
  }
}
openAndClose();

fsPromises.readFile('plik.txt', 'utf-8')
    .then((text) => {
        console.log("4 then", text);
    })
    .catch((err) => {
        console.log('Error', err);//jakby błąd przy zczytywaniu
    });


//asynch bo robi sobie jak mu się podoba