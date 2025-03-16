// Pozitif, Negatif veya Sıfır Kontrolü
function checkNumber(number) {
    if (number > 0) {
        console.log(number + " pozitif bir sayıdır.");
    } else if (number < 0) { // Hatalı olan 'num' yerine 'number' kullandık.
        console.log(number + " negatif bir sayıdır."); // Boşluk eklendi.
    } else {
        console.log("Sayı sıfırdır.");
    }
}

// 1'den 10'a Kadar Sayıları Yazdırma

// For Döngüsü
console.log("For Döngüsü:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While Döngüsü
console.log("While Döngüsü:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// Do-While Döngüsü
console.log("Do-While Döngüsü:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);

// Asal Sayı Kontrolü
function isPrime(number) {
    if (number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) return false; 
    }
    return true; 
}

// Kullanıcıdan Sayı Alma ve Asal Kontrol
const number = parseInt(prompt("Bir sayı girin:"));
if (isPrime(number)) {
    console.log(number + " bir asal sayıdır."); 
} else {
    console.log(number + " asal sayı değildir.");
}
