
let card = {
    name: '郭俊良',
    tel: '0921560420',
    addr: '台南市中西區西門路一段20號',
    '職稱': '工程師'
};

// let x = 'name';
// console.log(card[x]);

for(let i in card){
    // console.log(i);
    // console.log(typeof i);
    console.log(card[i])
}