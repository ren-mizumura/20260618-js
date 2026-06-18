// 関数
function sayHello() {
    console.log("こんにちは");
}

sayHello();


// 引数
function sayHelloName(name) {
    console.log("こんにちは", name);
}

sayHelloName("Lemi");
sayHelloName("Lemi");
sayHelloName("Lemi");
sayHelloName("Lemi");


// 演習
function callFunc(elm, price) {
    const element = document.querySelector(elm);
    element.textContent = "商品の値段は" + price + "円です。";
}

callFunc("p#product1", 3000);
callFunc("p#product2", 5000);
callFunc("p#product3", 7000);
callFunc("p#product4", 10000);
callFunc("p#product5", 13000);