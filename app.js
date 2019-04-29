//Array
const myArr = [1, "2", "3", true, "Script"];
const myAngka = [1, 2, 3, 12, 5, 10, 7, 8, 9];

console.log("Array asli >>>>>" + myArr);

//Fungsi Method Array.join()
console.log("Fungsi join >>>>" + myArr.join("||"));

//Fungsi Method Array.reverse();
console.log("Fungsi reverse >>>>" + myArr.reverse());

//Fungsi Method Array.sort();
console.log("Fungsi sort >>>>" + myArr.sort());

//mengurutkan angka dengan my sort
console.log("Array myANgka asli >>>>>" + myAngka);
console.log(
  "Fungsi sort a - b >>>>" +
    myAngka.sort(function(a, b) {
      return a - b;
    })
);
console.log(
  "Fungsi sort b - a >>>>" +
    myAngka.sort(function(a, b) {
      return b - a;
    })
);

//Fungsi Method Array.concat();
const myArrPlus = myArr.concat(11, 12, "Baru");
console.log("Fungsi concat >>>>" + myArrPlus);

//Fungsi Method Array.slice();
const myArrPotong = myArr.slice(2, 4);
console.log("Fungsi slice myArr index 2-4 >> " + myArrPotong);
//Bila argumen Negatif
const myArrSlice = myArr.slice(-5, -2);
console.log("Fungsi slice myArr index -5 sampai -2 >> " + myArrSlice);

//Fungsi Method Array.splice();
///>>> Argumen 1 = yang di hapus
///>>> Argumen 2 = berapa yang di hapus
///>>> Argumen 3,dst = Value yang di tambah kan
const myArrSplice = [1, 2, 3, 4, 5, "x", "y", "z"];
console.log("myArrSPlice asli >>> " + myArrSplice);
const myArrSplice2 = myArrSplice.splice(4, 2, 1, "oke", true);

console.log("myArrSplice setelah fungsi splice" + myArrSplice);
console.log("myArrSplice2 setelah fungsi splice" + myArrSplice2);

//Fungsi Method Array.push & Array.pop
///>>> First in, Last out
const newArray = [1, 2, 3];
console.log("newArray awal >>> " + newArray);

newArray.push(4, 5, "oke");
console.log("newArray setelah push >>>" + newArray);

newArray.pop();
console.log("newArray setelah pop >>>" + newArray);

//Fungsi Method Array.unshift dan Array.shift
///>>> sama seperti push & pop tetapi dari depan

const baruArray = [1, 2, 3];
console.log("baruArray awal >>> " + baruArray);

baruArray.unshift(4, 5, "oke");
console.log("baruArray setelah push >>>" + baruArray);

baruArray.shift();
console.log("baruArray setelah pop >>>" + baruArray);

///Fungsi Method Array.toString dan Array.toLocaleString

const Arr = [1, 2, 3, 4, 5, "oke", true];
console.log("Arr >>>" + Arr);
console.log("Arr setelah toString >>>" + Arr.toString());
console.log("Arr setelah toLocaleString" + Arr.toLocaleString());
