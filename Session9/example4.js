//1. Khai bao bien voi ten cua minh
var name = "DoTheTrung";
//2. Dem so tu trong ten cua minh
var sln = name.length;
document.getElementById("length").innerHTML = sln;
//3. Thay the ten dem = chu PHP09
var n = name.replace("The","PHP09");
document.getElementById("middleName").innerHTML = n;
//4. Tim vi tri chu n trong ten cua minh
var pos = name.search("n");
document.getElementById("searchN").innerHTML = pos;
//5. In hoa ten cua minh
var uppercase = name.toUpperCase();
document.getElementById("upper").innerHTML = uppercase;
//6. In thuong ten cua minh
var lowercase = name.toLowerCase();
document.getElementById("lower").innerHTML = lowercase;
//7.Cat ho cua minh di,chi de lai chu lot va ten
var res = name.substr(2,9);
document.getElementById("sub").innerHTML = res;