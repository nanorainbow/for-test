// 'use strict';
// var a = 1;
// var b = 2;
// console.log("hello world");
// console.log("a = ", a);
// console.log("b = ", b);
// alert('hello~')


// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     var y = 'Bob';
//     alert(y);
// }

// foo();
// window.alert('调用window.alert()');
// // 把alert保存到另一个变量:
// var old_alert = window.alert;
// // 给alert赋一个新函数:
// window.alert = function () {};
// alert('你好世界')
// // 恢复alert:
// window.alert = old_alert;
// alert('又可以用alert()了!');
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
// console.log(results);
// function pow(x) {
//     return x * x;
// }


// var now = new Date();
// now;
// alert(now)
// alert(now.getSeconds())
'use strict'

var url = 'https://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&appid=800f49846586c3ba6e7052cfc89af16c';
$.getJSON(url, function (data) {    
    var info = {
    city: data.city.name,
    weather: data.list[0].weather[0].main,
    time: data.list[10].dt_txt
};
alert(JSON.stringify(info, null, '  '));
alert("我没有错")
});