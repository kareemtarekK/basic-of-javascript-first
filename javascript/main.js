/*
there are different types of console......
*/
console.log(10);     // 1
console.error("you have an error");     // 2
console.table(["kareem",1,{},5]);      // 3
console.group("one");
console.groupCollapsed("type one");
console.groupEnd();                    // 4
/* ways to name variables */
//1- camal case => userName.
//2- snake case => user_name.
//3- pascal case => UserName.
//4- kabab case => user-name.
//5- clear case => username.
////////////////////////////////////////////////////////////////////////////
/*styling from console by directive %c*/
console.log("hello %cmy friend","color:red");
/*declaring variables  (var || let || const) */
console.log(a);
var a = 10;          // undefined

var v = 10;
var v = 30;
console.log(v);     // 30

/*using var it add variable in windows as an object [window scope drama] */

console.log(p);
let p = 10;      // error

let g = 10;
let g = 30;
console.log(g);   // error

/*it doesn`t add variable in windows */
/*
[let] is like [const]
*/
/*
condition to name variables
1- can start any letter[captail || small].
2- can start with _ || $.
3- can`t contain any space.
4- can contain number but not at starting.
*/
/*string and escape*/
console.log('"hello"');   // "hello"
console.log("'hello'");   // 'hello'
console.log("\"hello\"")  // "hello"
console.log("hello \nmy \nfriend");  // hello
                                     // my
                                     // friend
console.log("hello\
my\
friend");                  // "hello my friend"
console.log(`hello${user}`);  // hello uservalue picktik[template literal]
// arthmetic operators
/*
1- + addition operator
2- - subtraction operator
3- * multipling operator
4- / division operator
5- % modulus operator
6- ++variable prefix[increament || decreament]
7- variable++ postfix[increament || decreament]
 */
/*
some examples
*/
console.log(10+"welcome"); // 10welcome
console.log(10 - "welcome"); // NaN not a number
// unary operator [postive || negative] convert to number
console.log(+100); // 100
console.log(+"100");  // 100
console.log(+"welcome"); // NaN
console.log(+"15.5");  // 15.5
console.log(+null);  // 0
console.log(+true);  // 1
console.log(+false);  // 0
console.log(-100);  // -100
console.log(-"100"); // -100
console.log(-"-100"); // 100
console.log(-"15.5");  // -15.5
console.log(-null);   //  -0
console.log(-false);  // -0
console.log(-true);   // -1
console.log(-"welcome");  //  NaN
/* Number() = unary operator */
// type coerction [casting].
let y = "10";
let u = 20;
let c = true;
console.log(y+u+c);  // 1020true
console.log(+y +u+c); // 31
console.log(" " - u);  // -20
console.log(" " - true);  // -1




















                                        

