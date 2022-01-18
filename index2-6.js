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
        // console.log(arr[i] + ':是奇數' );
    }
}

// **
// console.log(2 ** 10);
let radius = 5;
// let area = radius * radius * 3.14159;
let area = radius ** 2 * 3.14159;
// console.log(area);

let myName = '郭俊良';
let age = 25;

// console.log(myName + ': ' + age + ' 歲');

// 四、比較運算子：==、!=、<、<=、>、>=、===、!==
let x = 5;
let y = '5';
// console.log(!(x == y));
// console.log(!(x === y));

// 五、邏輯運算子：&&、||、!
// && 且 、 || 或 、 ! 反向
// console.log( true && true)
// console.log( false && true)
// console.log( true && false)
// console.log( false && false)

// console.log( !(false || false))
// console.log( true || false)
// console.log( false || true)
// console.log( true || true)

// 六、條件運算子：?:
let score = 100;
let show = (score >= 60) ? '分數及格' : '分數不及格';
console.log(score,show);
