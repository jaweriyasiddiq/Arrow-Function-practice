/////////////////////////////FUNCTION//////////////////////////////
//ARROW FUNCTION
//WITH STRING
let slot = () => console.log("I am a student of thursday slot");
slot();
//WITH NUMBER
let division = (x) => { return x / 2;};
let result = division(8);
console.log(result);
//WITH PARAMETERS
//WITH STRING
let shop=(mobilephone:string,laptop:string)=>
    {console.log("we have",mobilephone,"phone","but dont have",laptop,"laptop");}
 shop("VIVO","DELL")
//WITH NUMBERS
let sqauare = (x: number) => {
  return x * x;
};
let result1=sqauare(8);
console.log(result1);
//TYPES OF PARAMETERS
//OPTIONAL PARAMETERS
let addition = (a: number, b: number, c?: number) => {
  c = c === undefined ? 0 : c;
  console.log(a + b + c);
};
addition(3, 4);
addition(5, 6, 9);
//DEFAULT PARAMETER
let food = (desifood: string, jungfood: string = "burgers") => {
  console.log("we have", desifood, "and in jungfood we only have", jungfood);
};
food("mutton karhai");
//rest
let restparam = (...rest: any[]) => {
  console.log(rest);
};
restparam(1, "one", 2, "two", 3, "three", 4, "four", 5, "five");
