const EXPR = 'Papayas';
switch (EXPR) {
  case 'Oranges':
    Oranges();
    break;
  case 'Mangoes':
  case 'Papayas':
    Papayas();
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    Default();
}

// CURD
function Oranges(){
    console.log('1-Oranges are $0.59 a pound.');
}

function Papayas(){
    console.log('2-Mangoes and papayas are $2.79 a pound.');
}

function Default(){
    console.log(`3-Sorry, we are out of ${EXPR}.`);
}