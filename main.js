const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question(`KALKULATOR  
Pilih nomor:
1. Tambah
2. Kurang
3. Kali
4. Kurang

nomor: `, function(dataDariUser){
    console.log(dataDariUser); //output
    interface.close();
});
