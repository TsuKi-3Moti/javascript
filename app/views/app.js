// alert("Hello World");

// let hello = "Hello World";
// alert(hello);

// 整数
// let int1 = 1;
// alert(int1);

// // 負数
// let int2 = -10;
// alert(int2);

// // 小数点
// let float1 = 3.14;
// alert(float1);

// // 文字列
// let str1 = "JavaScriptを覚えよう";
// alert(str1);

// // 足し算
// alert(4 + 3);

// // 引き算
// alert(8 - 5);

// // 掛け算
// alert(2 * 6);

// // 割り算
// alert(10 / 3);

// // 文字列を結合
// alert("Hello" + 'World');

// // 変数を利用する場合
// let str3 = 'Hello';
// let str4 = 'World!!';
// alert(str3 + str4);

let orange = 100;
let apple = 120;

// if(orange < apple){alert("みかんの値段がリンゴより安い");}
// else if(orange == apple){alert("みかんとリンゴが同じ値段")}
// else {alert("みかんの値段がリンゴより高い");}

if(orange < apple){
  alert("みかんの値段がリンゴより安い");
} else if(orange == apple){
  alert("みかんとリンゴが同じ値段");
} else{
  alert("みかんの値段がリンゴより高い");
}

// let max = 100;  //最大値を決めておく
// let num = 1;    //かけられていく数の初期値
// let count = 0;  //回数

// while(num < max){
//   num = num * 2;  //numの中の値を上書きしていく
//   count = count + 1;
// }

// alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

let i;
let num = 0;

for(i = 1; i < 11; i++){  //初期値が1にする; iが11より小さいときture;でiに1を足す
  num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です");

let momo = 10
let nono = 3
alert(momo - nono)