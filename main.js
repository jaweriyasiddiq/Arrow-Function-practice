/////////////////////////////FUNCTION//////////////////////////////
//ARROW FUNCTION
//WITH STRING
var slot = function () { return console.log("I am a student of thursday slot"); };
slot();
//WITH NUMBER
var division = function (x) {
    return x / 2;
};
var result = division(8);
console.log(result);
//WITH PARAMETERS
//WITH STRING
var shop = function (mobilephone, laptop) { console.log("we have", mobilephone, "phone", "but dont have", laptop, "laptop"); };
shop("VIVO", "DELL");
//WITH NUMBERS
var sqauare = function (x) {
    return x * x;
};
var result1 = sqauare(8);
console.log(result1);
//TYPES OF PARAMETERS
//OPTIONAL PARAMETERS
var addition = function (a, b, c) {
    c = c === undefined ? 0 : c;
    console.log(a + b + c);
};
addition(3, 4);
addition(5, 6, 9);
//DEFAULT PARAMETER
var food = function (desifood, jungfood) {
    if (jungfood === void 0) { jungfood = "burgers"; }
    console.log("we have", desifood, "and in jungfood we only have", jungfood);
};
food("mutton karhai");
//rest
var restparam = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
};
restparam(1, "one", 2, "two", 3, "three", 4, "four", 5, "five");
