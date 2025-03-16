// 1. madde

// Number
let sayi: number = 42;

// String
let isim: string = "Mustafa";

// Boolean
let dogruMu: boolean = true;

// Array
let sayilar: number[] = [1, 2, 3, 4, 5];

// Tuple (Birden fazla tür içeren dizi)
let kisi: [string, number] = ["Ali", 25];

// Enum (Sabit değerler kümesi)
enum Renk { Kirmizi, Yesil, Mavi }
let renk: Renk = Renk.Yesil;

// Any (Herhangi bir tür olabilir)
let rastgele: any = "Merhaba";
rastgele = 123;

// Void (Geri dönüş olmayan fonksiyonlar)
function selamVer(): void {
    console.log("Merhaba, TypeScript!");
}


// --- Interface ve Tip Kontrolü ---
interface Kisi {
    isim: string;
    yas: number;
    aktifMi: boolean;
}

function kisiBilgisiGoster(kisi: Kisi): void {
    console.log("İsim: " + kisi.isim + ", Yaş: " + kisi.yas + ", Aktif mi: " + (kisi.aktifMi ? "Evet" : "Hayır"));
}

// Doğru Kullanım
const mustafa: Kisi = { isim: "Mustafa", yas: 23, aktifMi: true };
kisiBilgisiGoster(mustafa);

// Yanlış Kullanım (Hatalı Kod, yorum satırı yaparak dene!)
// const hata: Kisi = { isim: "Mehmet", yas: "yirmi üç", aktifMi: true };
