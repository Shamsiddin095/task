function task1() {
  let num1 = prompt("birinchi son:");
  let num2 = prompt("Ikkinchi son:");

  let yigindi = Number(num1) + Number(num2);

  console.log("yig'indi: " + yigindi);
  alert("yig'indi: " + yigindi);
}
function task2() {
  let son1 = +prompt("Birinchi son:");
  let son2 = +prompt("ikkinchi son:");
  let son3 = +prompt("uchinchi son:");

  let orta = (son1 + son2 + son3) / 3;

  console.log("O'rta arifmetik: " + orta);
  alert("O'rta arifmetik " + orta);
}
function task3() {
  let son1 = prompt("Birinchi sonni kiriting:");
  let son2 = prompt("Ikkinchi sonni kiriting:");

  let kvadrat1 = son1 * son1;
  let kvadrat2 = son2 * son2;

  let yigindi = kvadrat1 + kvadrat2;

  console.log("Kvadratlar yig'indisi: " + yigindi);
  alert("kvadratlar yig'indisi:" + yigindi);
  s;
}
function task4() {
  let d = prompt("Aylananing diametrini kiriting:");
  let PI = 3.14;
  let l = PI * d;

  console.log("Aylani uzunligi: " + l);
  alert("aylaning uzunligi:" + l);
}
function task5() {
  let L = prompt("Doiraning uzunligini kiriting:");

  let Radius = L / (2 * 3.14);
  let Yuza = 3.14 * Radius * Radius;

  console.log("Doiraning radiusi: " + Radius);
  console.log("Doiraning yuzasi: " + Yuza);
  alert("Doira radiusi: " + Radius + "\nDoira yuzasi: " + Yuza);
}
function task6() {
  let s = prompt("Doiraning yuzasini kiriting:");
  let r = Math.sqrt(s / 3.14);
  let d = 2 * r;

  console.log("Doira radiusi: " + r);
  console.log("Doira diametri: " + d);
  alert("Doira radiusi: " + r + "\nDoira diametri: " + d);
}
function task7() {
  let bayt = +prompt("baytni kiriting:");
  let natija = 1024 * bayt;
  console.log("siz kiritgan son :" + natija);
  alert("kilobaytdagi qiymat: " + natija);
}
function task8() {
  let kesma1 = +prompt("A kesmani kiriting:");
  let kesma2 = +prompt("B kesmani kiriting:");

  let natija = kesma1 / kesma2;
  alert("B kesma A kesma orasida: " + natija);
}
function task9() {
  let kesmaA = +prompt("A kesmani kiriting:");
  let kesmaB = +prompt("B kesmani kiriting:");

  let natija = kesmaA / kesmaB;
  let qoldiq = kesmaA % kesmaB;

  console.log("A kesma B kesma orasida :" + natija);
  console.log("Qoldiq:" + qoldiq);
  alert("A kesma B kesma orasida :" + natija);
  alert("Qoldiq :" + qoldiq);
}
function task10() {
  let son = +prompt("ikki xonali son kiriting: ");
  birinchi_raqam = son % 10;
  ikkinchi_raqam = (son - birinchi_raqam) / 10;
  yigindi = birinchi_raqam ** 2 + ikkinchi_raqam ** 2;
  alert("kvadratlar yig'indisi:" + yigindi);
}
function task11() {
  let son = +prompt("Ikki xonali son kiriting");
  let birlar = son % 10;
  let onlar = (son - birlar) / 10;
  let teskari = birlar * 10 + onlar;
  alert("Teskari natija:" + teskari);
}
function task12() {
  let son = +prompt("Uch xonali son kiriting");

  let birlar_xonasi = son % 10;
  let x = son % 100;
  let onlar_xonasi = (x - birlar_xonasi) / 10;
  let yuzlar_xonasi = (son - x) / 100;

  alert(
    "yuzlar xonasi: " +
      yuzlar_xonasi +
      "\n o'nlar xonasi " +
      onlar_xonasi +
      "\n Birlar xonasi: " +
      birlar_xonasi
  );
}
function task13() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;
  let yigindi = birlar + onlar + yuzlar;

  alert(" yigindi " + yigindi);
}
function task14() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert(" Teskari tartibda: " + birlar + "" + onlar + "" + yuzlar);
}
function task15() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("son " + x + "" + yuzlar);
}
function task16() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("natija: " + birlar + "" + yuzlar + "" + onlar);
  console.log("natija " + birlar + "" + yuzlar + "" + onlar);
}
function task17() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("Natija:" + yuzlar + "" + birlar + "" + onlar);
}
function task18() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("Natija:" + onlar + "" + yuzlar + "" + birlar);
}
function task19() {
  let son = +prompt("to'rt xonali son kiriting");
  let birlar = son % 10;
  let onlar = ((son % 100) - birlar) / 10;
  let yuzlar = ((son % 1000) - (son % 100)) / 100;
  let minglar = ((son % 10000) - (son % 1000)) / 1000;
  alert("Natija:" + birlar + "" + onlar + "" + yuzlar + "" + minglar);
}
function task20() {
  let son = +prompt("999 dan katta son kiriting: ");
  let birlar = son % 10;
  let butun = son / 10;
  let qoldiq = son % 10;
  let onlar = ((son % 100) - birlar) / 10;
  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      " \nonlik xonasidagi raqam: " +
      onlar
  );
}
function task21() {
  let son = +prompt("999 dan katta son kiriting: ");
  let butun = son / 10;
  let qoldiq = son % 10;
  let yuzlar = ((son % 1000) - (son % 100)) / 100;

  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      "\nyuzalar xonasidagi raqam: " +
      yuzlar
  );
}
function task22() {
  let son = +prompt("999 dan katta son kiriting: ");
  let butun = son / 10;
  let qoldiq = son % 10;
  let minglar = ((son % 10000) - (son % 1000)) / 1000;

  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      "\nyuzalar xonasidagi raqam: " +
      minglar
  );
}
function task23() {
  let sekund = +prompt("sekundni kiriting:");
  let minut = sekund / 60;

  alert("natija minutda:" + minut);
}
function task24() {
  let sekund = +prompt("sekundni kiriting:");
  let soat = sekund / 3600;

  alert("natija soatda:" + soat);
}
function task25() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(+minut + " minut" + "\n" + sekund + " sekund");
}
function task26() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(+soat + " soat\n" + "\n" + sekund + " sekund");
}
function task27() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(
    +soat + " soat\n" + "\n" + minut + " minut" + "\n" + sekund + " sekund"
  );
}
function task28() {
  let Jasur_buyi = 1.8;
  let Jasur_massa = 70;
  let Navruz_buyi = 1.73;
  let Navruz_massa = 55;

  let BMIjasur = 70 / (1.8 * 1.8);
  let BMInavruz = 55 / (1.73 * 1.73);

  alert("Jasur BMI =" + BMIjasur + "/n Navruz BMI = " + BMInavruz);
  alert(BMIjasur >= BMInavruz);
}

function home27() {
  var paragraph = document.getElementById("cont_27");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function home8() {
  var paragraph = document.getElementById("last");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function if1() {
  let num = +prompt("son kiriting:");
  let natija;

  if (num > 0) {
    natija = 1;
  } else if (num < 0) {
    natija = -1;
  } else {
    natija = 0;
  }
  alert("qiymat:" + natija);
}
function if2() {
  let a = +prompt("a son = ");
  let b = +prompt("b son = ");

  yigindi = a + b;
  let natija;
  if (yigindi < 4) {
    natija = "Below";
  } else {
    natija = " Over";
  }
  alert("natija:" + natija);
}
function if3() {
  alert("Ro'yhatdan o'tish uchun login parol kiriting:");
  let login = prompt("Login kiriting:");
  let parol = +prompt(" 4 talik son parol kiriting :");
  alert("Ro'yhatdan o'tdingiz:");
  alert("Parol va login kiriting:");
  let l = prompt("loginingiz:");
  let p = +prompt("parolingiz");

  if (!l || !p) {
    alert("NuN NuN NuN NuN NuN NuN NuN NuN ");
  } else if (l == login && p == parol) {
    alert("Muvaffaqiyatli");
    window.location.href =
      "https://kun.uz/news/2023/11/09/dunyo-siyosiy-arxitekturasi-tom-manoda-ozgarmoqda-shavkat-mirziyoyev";
  } else {
    alert("Notug'ri parol yoki login");
  }
}
