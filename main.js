let sana = new Date();
 
sana.setFullYear(2008)
sana.setDate(12)
let yil =sana.getFullYear();
let oy =sana.getMonth();
let kun =sana.getDate();
let haftaKuni =sana.getDay();

let oylar = ["yanvar" , "fevral" , "mart", "aprel" , "may" , "iyun" , "iyul", "avgust" , "sentabr", "okytabr" , "noyabr","dekabr"]

let haftaKunlar = ["dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba", "yakshanba"]
document.write("Barno " +yil+ " -yil  " +oylar[oy]+ "  oyining  " +kun+ "  -kuni, haftaning " +haftaKunlar[haftaKuni]+ " kuni tug'ilgan"
)