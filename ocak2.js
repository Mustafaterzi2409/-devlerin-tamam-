//  İki sayıyı toplayan fonksiyon

function toplama(a, b) {
    return a + b;
}

console.log(toplama(5, 3));


// Arrow Function

const toplamaArrow = (a, b) => a + b;

console.log(toplamaArrow(5, 3));



//Bir dizinin en büyük elemanını bulan fonksiyon

function enBuyukEleman(dizi) {
    if (dizi.length === 0) return null; 
    let enBuyuk = dizi[0];
    for (let i = 1; i < dizi.length; i++) {
        if (dizi[i] > enBuyuk) {
            enBuyuk = dizi[i];
        }
    }
    return enBuyuk;
}

const sayilar = [4, 12, 9, 5, 18, 7];
console.log(enBuyukEleman(sayilar)); 



//Bir dizide belirli bir elemanın olup olmadığını bulan fonksiyon


function elemanBul(dizi, aranan) {
    for (let i = 0; i < dizi.length; i++) {
        if (dizi[i] === aranan) {
            return true;
        }
    }
    return false;
}

const isimler = ["ali", "mustafa", "mehmet", "azra"];
console.log(elemanBul(isimler, "ahmet"));     
console.log(elemanBul(isimler, "azra"));     