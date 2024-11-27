
//function multiplierPar2(x) {
   // return x * 2;
//}

//function multiplierPar3(x) {
   // return x * 3;
//}
//function multiplierPar4(x){
    //return x * 4;
//}

//function somme(x, y, tableMultiplication) {
 //   let res = tableMultiplication(x) + tableMultiplication(y) ;
  //  return res;
//}

//let e1 = 5;
//let e2 = 10;

//let res1 = somme(e1, e2, multiplierPar2);//30
//let res2 = somme(e1, e2, multiplierPar3);//40
//let res3 = somme(e1, e2, multiplierPar4);//50 
//console.log(res1);
//console.log(res2);
//console.log(res3);

function incrementeur(x){
    return(a)=> a + x;
}


let incr = incrementeur(10);
console.log(incr(2));
console.log(incr(4));

