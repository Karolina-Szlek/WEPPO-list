const fs = require('fs');


//próbowałam readFile, ale nie działało
// readFileSync - returns the contents of the path
function fileread(filename){
    
        var contents= fs.readFileSync(filename);//zczytuje
        return contents.toString();
    }
    
console.log(fileread('Fraszka.txt')) //- zadziała do wypisania, ale chcemy otworzyć i błędy wyłapywać 

















function openAndRead(file) {
    fs.open(file, 'r', (err, data) => {
      //flag 'r' read
        if (err) {
          // 2 rodzaje błędów - nie ma pliku(powiedz nam o tym) / inne (zwróć błąd)
          if (err.code === 'ENOENT') {
            //ENOENT błąd na nie ma pliku
            console.error('File: ' + file + ' does not exist');
            return;
          }
      
          throw err;
        }
        console.log(fileread(data).toString());
      });
}


//openAndRead('Fraszka.txt')
//console.log(fileread('Fraszka.txt').toString())
