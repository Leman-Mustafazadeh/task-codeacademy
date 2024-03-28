
// TASK 1


//  const deq = 150 / 60
// console.log(199/60);
//  const hour = 150 % 60
// console.log(hour);
// console.log(`${hour} saat ${deq} deqe`);

// // TASK2
// let temp = 10
// let sels = 5/9 * (temp-32)
// console.log(sels);

// // TASK 3
// let a=Number(prompt("ededi daixl et"))
// let b= Number(prompt("ededi daixl et"))
// let c= Number(prompt("ededi daixl et"))
// let d= Number(prompt("ededi daixl et"))
// let e= Number(prompt("ededi daixl et"))

// let sum = (a+b+c+d+e)/5
// console.log(sum);

// // TASK4
// let s = Number(prompt("Il dogumunuzu daxil edin"));

// let  l = 2024 - s
// console.log(l);


// // TASK 5

// let a = Number(prompt("ededi daxil edin"))

// let b = Number(prompt("faizii daxil edin"))

// let c = (a * b ) /100
// console.log(c);


// // TASK 6

// let a = Number(prompt("kateti daxil edin"))
// let b = Number(prompt("kateti daxil edin"))

// let s = (a * b) /2
// console.log(s);


// // TASK 7

// let a = Number(prompt("kredit miqdari"))
// let b = Number(prompt("faiz derecesi"))
// let c = Number(prompt("kredit muddeti "))

// let d = a +  (a * b ) /100
// let e = d /c
// console.log(e);

// // TASK 8
// let a = prompt("adiniiz qeyd edin")
// let b = prompt("soyadiniiz qeyd edin")

// console.log(alert(`${a+b} xos gelmisiniz`));


// // TASK9
// let a = Number(prompt("EDEDI DAXIL ET"))
// let s = a**2
// let p = 4*a
// console.log(`perimetri ${p}, sahesi ise ${s}`);

// TASK 10
// let a = Number(prompt("EDEDI DAXIL ET"))
// let b = Number(prompt("EDEDI DAXIL ET"))
// let c =( a + b)**3;
// let d = a**3 + b**3 ;
// console.log(`ceminin kubu ${c} kubunun cemi ${d}`);

// TASK 11

// let a = Number(prompt("EDEDI DAXIL ET"))
// if(a>63){
//     console.log("pensiyaya duse biler");
// }
// else{
//     console.log("o sansi itirdiz");
// }

// TASK12

// let a = Number(prompt("EDEDI DAXIL ET"))
// let b = Number(prompt("EDEDI DAXIL ET"))
// let c = Number(prompt("EDEDI DAXIL ET"))

// if(a==b && b==c && a==c){
//     console.log("beraberterefli ucbucaq");
// }else if(a==b  || a==c || b==c){
//     console.log("beraberyanli ucbucaq");
// }else{
//     console.log("muuxtelif terefli");
// }


// // TASK13
// let a = Number(prompt("EDEDI DAXIL ET"))
// if(a%2=== 0){
//     console.log("CUT EDEDDIR");
// }else{
//     console.log("tek");
// }

// TASK14
// let a = Number(prompt("EDEDI DAXIL ET"))
// if(a<0 || a<12){
//     switch (a) {
//         case 0:
//          console.log("January");
//             break;
//         case 1:
//             console.log("February");
//             break;
//         case 2:
//             console.log("march");
//             break;
//         case 3:
//             console.log("april");
//             break;
//         case 4:
//             console.log("may");
//             break;
//         case 5:
//             console.log("iyun");
//             break;
//         case 6:
//             console.log("iyul");
//             break;
//         case 7:
//             console.log("august");
//             break;
//         case 8:
//             console.log("september");
//             break;
//         case 9:
//             console.log("october");
//             break;
//         case 10:
//             console.log("november");
//             break;
//         case 11:
//             console.log("december");
//             break;
    
//     }
   
// } else{
//     console.log("wrong");
// }


// // TASK15

// let a = Number(prompt("EDEDI DAXIL ET"))

// if(a%15===0){
//     console.log("15e bolunen eededir");
// }else{
//     console.log("bolunen deyil");
// }


// // TASK16

// let a = Number(prompt("EDEDI DAXIL ET"))
// let b = Number(prompt("EDEDI DAXIL ET"))

// let c = a*b
// if(c<0){
//     console.log("menfi");
// }else{
//     console.log("MUSBET");
// }


// // TASK17
// let names = "Leman";
// for(i=0;i<5;i++){
//     console.log(names);
// }

// // TASK18

// for(i=20;i>0;i--){
//     console.log(i);
// }

// // TASK19

// let city = ["Bakı","Gəncə","Sumqayıt"]
// for(i=0;i<city.length;i++){
//     console.log(city[i]);
// }

// // TASK20

// let city = ["Bakı","Gəncə","Sumqayıt"]
// for(i=0;i<city.length;i++){
//    for (let j = 0; j < city[i].length; j++) {
//     console.log(city[i][j]);
//    }
// }

// // TASK21

// let num = [1,4,5,6,7,8,34,56,98]
// let conc = 0;
// for (let i = 0; i < num.length; i++) {
//   conc+=num[i]
  
// }  console.log(conc);

// // TASK22
// for (let i = 0; i < 51; i++) {
//    console.log(i);
// }

// // TASK23

// for (let i = 0; i < 50; i+=3) {
//     console.log(i);
    
// }

// // TASK24
// for (let i = 0; i <= 50; i++) {
//    if(i%2==0){
//     console.log([i]);
//    }
    
// }


// // TASK25

// for (let i = 0; i <= 50; i++) {
//        if(i%8==0){
//         console.log([i]);
//        }
        
//     }


// // TASK26
// let sum = 0
// for (let i = 0; i < 100; i++) {
//     sum+=i
   
// } 
// console.log(sum);

// // TASK27

// let a = Number(prompt("enter number"));
// let sum =1
// for (let i = 1; i <= a; i++) {
//    sum*=i
    
// }console.log(sum);


// TASK28

// // let a = Number(prompt("enter number"));
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//    if(i%15==0){
//     console.log("3e bolunen");
//    }else if(i%5==0){
//     console.log("5e bolunen");
//    }
//     else if(i%3==0){
//         console.log("15");
//     }
// }


// TASK29
// let a = prompt("enter number");
// let sum = 0 
// for (let i = 0; i < a; i++) {
//     let b = Number(a[i])
//     sum+=b;
//     console.log(b);
// }

// // TASK30

// let a = prompt("enter number");
// if(a.length===3){
//     for (let i = 0; i < a.length; i++) {
//       if(a[0]**3+a[1]**3+a[2]**3==a){
//         alert("armstronq")
//       }else{
//         console.log("deyil");
//       }
        
//     }
// }

// TASK31

// let a = prompt("enter number");
// let cut = 0;
// let tek = 0;
// for (let i = 0; i < a.length; i++) {
//     if(i%2==0){
//         cut+=Number(a[i])
//     }else{
//         tek+=Number(a[i])
//     }
// }
// console.log(cut*tek);

// TASK32

// Bir array daxilindəki ədədlərin hasili əgər cüt ədəddirsə, həmin ədədlərin cəmini consolda göstərin. Yox əgər təkdirsə, consolda sıfır göstərin.

// let a = [1,2,5,7]
// let sum = 1
// for (let i = 0; i < a.length; i++) {
//   sum*=a[i]
  
// }
// if(sum%2==0){
//     console.log("CUT");
// }else{
//     console.log("0");
// }

// TASK33
// let a = [2,2,2,2];
// let counter=0
// for (let i = 0; i < a.length; i++) {
//    if(a[i]%2==0){
//     counter++
//    }
// }
// if(a.length==counter){
//     console.log("true")
// }
// else{
//     console.log("false");
// }


// TASK34
// let a = [1,2,2,3,5];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     sum+=a[i]
   
// } 
// let num = sum/a.length
// console.log(parseInt(num));


// TASK35

// İki dəyişən təyin edin. Biri hər hansı söz, digəri isə hərf olsun. Həmin hərf o sözün içində varsa consoleda true, yoxdursa false yazılsın.

// let a = "leman";
// let b = "a";
// let counter = 0;
// for (let i = 0; i < a.length; i++) {
//    if(b==a[i]){
//     counter++}
// }
// if(counter>0){
//     console.log(true);
// }else{
//     console.log("false");
// }


// TASK36
// Bir dəyişən təyin edin.Bu dəyişən sizin sözünüz olacaq. O sözün içində neçə sait olduğunu consoleda yazdırın.
let a = "leman"
let b =["e","a"];
let counter=0;
for (let i = 0; i < a.length; i++) {
   for (let j = 0; j < b.length; j++) {
  if(a[i]==b[j]){
    counter++
  }
   }
}
if(counter>0){
    console.log(counter);
}else{
    console.log("false");
}