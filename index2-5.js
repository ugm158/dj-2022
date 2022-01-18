let n1 = 9;
let n2 = 0.1;
let n3 = 0.2;
let n4 = n2 + n3;

let n5 = '9';
let n6 = 9;

let s1 = '09215604';
let s2 = 'abc';

let s3 = '國文:80';

let s4 = 80;
let s6 = `您的
國文
分數為 ${s4}`;

// console.log(s6);

let s5 = '您的\n';
s5 += '國文\n';
s5 += '分數為' + s4;

// console.log(s5);

// boolean
// console.log(10 > 5);
// console.log(10 < 5);
// console.log(1);

// undefined
let u;
// console.log(u);

let u1 = {};
// console.log(u1.name);

let u2 = function(x, y) {
    return x + y;
}
// console.log(u2(3,4));

let nu1 = null;
// console.log(nu1);

let x1 = 59;
let x2 = 100;
let x3 = 80;
let x4 = 40;
let x5 = 90;
// console.log(x1);
//        0   1    2   3   4
let xx = [59, 100, 80, 40, 90];
// index value
// console.log(xx[1])

for(let i=0; i < xx.length; i++){
    // console.log(xx[i]);
}

let card = {
    name: '郭俊良',
    tel: '0921560420',
    addr: '台南市中西區西門路一段20號',
    '職稱': '工程師'
};
// console.log(card.name);
// console.log(card.tel);
// console.log(card.addr);

let y = '職稱';
// console.log(card[y]);
// console.log(card.職稱)

let zz = 123;
let yy = zz;
yy = 456;
// console.log(zz);

let card1 = card;
card1.name = '456';
// console.log(card1);

console.log(card.name);
