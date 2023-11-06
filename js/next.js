function next1() {
  let a = +prompt("a qiymatni kiriting:");

  let hajm = a * a * a;
  let sirt = 6 * (a * a);
  alert("hajmi:" + hajm + "\n sirti: " + sirt);
}
function next2() {
  let a = +prompt(" qiymat kiriting a =:");
  let b = +prompt(" qiymat kiriting b =:");
  let c = +prompt(" qiymat kiriting c =:");
  let hajm = a * b * c;
  let sirt = 2 * (a * b + b * c + a * c);
  alert("hajmi:" + hajm + "\n to'la sirti: " + sirt);
}
function next3() {
  let R = +prompt(" Radiusni kiriting: ");
  let Pi = 3.14;
  let L = 2 * Pi * R;
  let S = Pi * (R * R);
  alert("Doira uzunligi:" + L + "\n Yuzasi: " + S);
}
function next4() {
  let a = +prompt("a va b son kiriting" + "\n son a = : ");
  let b = +prompt("son b = :");
  let orta_arifmetik = (a + b) / 2;
  alert("O'rta arifmetigi:" + orta_arifmetik);
}
