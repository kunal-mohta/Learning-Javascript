// function Element () {}

// Element.prototype.staticMethod = function () {
//   console.log('static method');
// }

// let SubElement = Object.create(Element);
// // SubElement = new Function()
// // SubElement.prototype = Element.prototype

// // let x = new SubElement(); ERROR
// console.log(SubElement, SubElement.prototype, typeof(SubElement));

// let SubElement2 = Object.create(Element.prototype);
// // let x = new SubElement2(); ERROR
// console.log(SubElement2, typeof(SubElement2));

// function SubElement3 () {}
// SubElement3.prototype = Object.create(Element.prototype);

// console.log(SubElement3, typeof(SubElement3));
// // console.log(SubElement3.prototype);

// let SubElement4 = {
//   __proto__: Element.__proto__
// };

// console.log(SubElement4);

//////////////////////////////////////////////

// let button = {
//   clickable: true,
//   text: 'Click me'
// };

// let signOutButton = {};
// Object.setPrototypeOf(signOutButton, button);
// console.log(signOutButton);
// console.log(signOutButton.text)
// console.log(Object.keys(signOutButton))

// for (x in signOutButton) {
//   console.log(x);
// }

function Button (text) {
  // console.log(this);

  if (!new.target) return new Button(text);

  this.clickable = true;
  this.text = text;
}

Button.prototype.click = function () {console.log('clicked'); }

let btn1 = new Button ('asdf');
console.log(btn1);
console.log(Object.keys(btn1));
let keys = [];
for (x in btn1) {
  keys.push(x);
}
console.log(keys);
let btn2 = Button('asdfasdf');
console.log(btn2);
console.log(global.text);

let btn3 = Object.getPrototypeOf(btn1).constructor('asdfasdfasdf');
console.log(btn3.text);

let wrongButton = {
  clickable: false,
  text: 'Wrong!',
};

function Button () {
  this.clickable = true;
}

Button.prototype = wrongButton;

let btn1 = new Button();
console.log(btn1.clickable);
console.log(btn1.text);
