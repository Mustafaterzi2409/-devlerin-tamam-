// 1. madde
// Number
var sayi = 42;
// String
var isim = "Mustafa";
// Boolean
var dogruMu = true;
// Array
var sayilar = [1, 2, 3, 4, 5];
// Tuple (Birden fazla tür içeren dizi)
var kisi = ["Ali", 25];
// Enum (Sabit değerler kümesi)
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 0] = "Kirmizi";
    Renk[Renk["Yesil"] = 1] = "Yesil";
    Renk[Renk["Mavi"] = 2] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Yesil;
// Any (Herhangi bir tür olabilir)
var rastgele = "Merhaba";
rastgele = 123;
// Void (Geri dönüş olmayan fonksiyonlar)
function selamVer() {
    console.log("Merhaba, TypeScript!");
}
function kisiBilgisiGoster(kisi) {
    console.log("İsim: " + kisi.isim + ", Yaş: " + kisi.yas + ", Aktif mi: " + (kisi.aktifMi ? "Evet" : "Hayır"));
}
// Doğru Kullanım
var mustafa = { isim: "Mustafa", yas: 23, aktifMi: true };
kisiBilgisiGoster(mustafa);
// Yanlış Kullanım (Hatalı Kod, yorum satırı yaparak dene!)
// const hata: Kisi = { isim: "Mehmet", yas: "yirmi üç", aktifMi: true };
