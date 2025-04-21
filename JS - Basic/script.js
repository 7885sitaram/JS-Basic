let root = document.getElementById("root");
// Basic Calculation
// 1. Base sallery

let grossSallery = parseInt(prompt("Enter your gross sallery "))

let allowances =parseInt(prompt("Enter your allowances  "))
let  benefits =parseInt( prompt("Enter your benefits  "))
let  bonuses =parseInt(prompt("Enter your bonuses  "))

let baseSallery = grossSallery - (allowances + benefits + bonuses)

console.log('your base sallery is ' + baseSallery)

// 2. celcius to ferenhite

let cel = 37;

let ferenhite = (cel * 9) / 5 + 32;

console.log("Celcious to ferenhite is : " + ferenhite);

// 3.meter to foot

let meter = 50;
let foot = meter * 3.28084;
console.log("Meter to foot is " + foot);

// 4. mm to meter

let mm = 25;

let res = mm / 1000;

console.log("MM to Meter is ", +res);

// 5. mile to km

let mile = 500;

let km = mile * 1.60934;

console.log("Mile to km is ", +km);

// 6. km to mile

let km2 = 500;

let mile2 = (km2 / 1.60934).toFixed(3);

console.log("Mile to km is ", +mile2);

// 7.second to hour

let hr = 2;
let sec = hr * 3600;

console.log("second to hour  ", +sec);

// 8. hour to minutes

let hour = 2;
let min = hour * 60;

console.log("hour to minutes  ", +min);

/////////////////////////////////////////////////////

// Conditional Statements

// Repetation Logic
// 1.
for (let i = 1; i <= 50; i = i + 7) {
  console.log(i);
}

// 2.

console.log("\n");

// 3.
for (let j = 90; j >= 50; j = j - 5) {
  console.log(j);
}

// 4.
let k = 110;
while (1) {
  k = k - 11;

  if (k == 0) {
    break;
  }

  console.log(k);
}

console.log("\n");

// 5.

let x = 90;

do {
  if (x == 90) {
    console.log(x);
  }

  x = x + 100;
  console.log(x);
} while (x < 900);

// UDF

console.log("UDF");

// 1. Add two number

const add = (a, b) => {
  return a + b;
};

console.log("adding is " + add(10, 20));

// 2. multiply 3 numbers

function mul(a, b, c) {
  return a * b * c;
}

console.log("multiply of three is " + mul(1, 2, 3));

// 3. find MAX value from three number

function max(a, b, c) {
  if (a > b && a > c) {
    return console.log("a is greater than b and c :", a);
  } else if (b > c && b > a) {
    return console.log("b is greater than a and c :", b);
  } else {
    return console.log("c is greater than a and b :", c);
  }
}

console.log(max(100, 50, 30));

// 4. Area of square

const area = (s) => {
  return s * s;
};

console.log("Area of square is :", area(10));

// 5. Area of circle

const cir = (r) => (3.14 * r).toFixed(2);

console.log("area of circle is ", cir(20));

// 6. Area of rectangle

const rect = (l, w) => l * w;

console.log("area of rectangle is ", rect(20, 20));

// 7. Area of triangle

const tri = (b, h) => {
  return (b * h) / 2;
};

console.log("area of triangle is ", tri(10, 20));

// 8. volume of cube

const cube = (a) => a * a * a;

console.log("area of cube is ", cube(5));

// 9. volume of cylinder

function cylinder(r, h) {
  console.log("area of cylinder is ", 3.14 * (r * r) * h);
}

cylinder(5, 10);

// 10. volume of cone

function cone(r, h) {
  console.log("area of cone is ", ((3.14 * (r * r) * h) / 3).toFixed(3));
}

cone(10, 30);

// END
let r = 5; // example radius
let h = 10;
root.append(
  "Your Base Sallery is : " + baseSallery,
  document.createElement("br"),
  "Celcious to ferenhite is : " + ferenhite,
  document.createElement("br"),
  "Meter to foot is " + foot,
  document.createElement("br"),
  "MM to Meter is ",
  +res,
  document.createElement("br"),
  "Mile to km is ",
  +km,
  document.createElement("br"),
  "second to hour  ",
  +sec,
  document.createElement("br"),
  "hour to minutes  ",
  +min,
  document.createElement("br"),
  "UDF PART",
  "hour to minutes  ",
  +min,
  document.createElement("br"),
  "adding is " + add(10, 20),
  document.createElement("br"),
  "multiply of three is " + mul(1, 2, 3),
  document.createElement("br"),
  "Area of square is :",
  area(10),
  document.createElement("br"),
  "area of circle is ",
  cir(20),
  document.createElement("br"),
  "area of rectangle is ",
  rect(20, 20),
  document.createElement("br"),
  "area of triangle is ",
  tri(10, 20),
  document.createElement("br"),
  "area of cube is ",
  cube(5),
  document.createElement("br"),
  "area of cylinder is ",
  (3.14 * (r * r) * h),
  document.createElement("br"),
  "area of cone is ",
  ((3.14 * (r * r) * h) / 3).toFixed(3)
);

document.body.append(root);
