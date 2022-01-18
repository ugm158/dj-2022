// 一、算術運算子: +、-、*、/、%、**
let n1 = 6;
let n2 = 2;
let s1 = '1';
// console.log(typeof n1);
// console.log(typeof s1);
// console.log(n1 + n2 );
// console.log(n1 - n2 );
// console.log(n1 * n2 );
// console.log(n1 / n2 );

// console.log(s1 + n1);

// 餘數
// console.log(n1 % n2);
//         0 1 2 3 4 5 6 7 8 9
let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr[9]);
// if(){//條件式

// }
// i++ => i = i + 1;
// true false
for(let i=0; i < arr.length; i++ ){
    if(arr[i] % 2){
        console.log(arr[i] + ':是奇數' );
    }
}
