// F -> C
// T(°C) = (T(°F) - 32) × 5/9

let fTemp1 = 77;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`); 

let fTemp2 = 90;
let cTemp2 = (fTemp2 - 32) * 5/9;
console.log(`\n${fTemp2}°F is equals to ${cTemp2}°C`); 

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTemp3 = 60;
let kTemp3 = (fTemp3 + 459.67)* 5/9
console.log(`\n${fTemp3}°F is equals to ${kTemp3}K`);

let fTemp4 = 60;
let kTemp4 = (fTemp4 + 459.67)* 5/9
console.log(`\n${fTemp4}°F is equals to ${kTemp4}K`);

// C -> F
// T(°F) = T(°C) × 9/5 + 32
let cTemp3 = 40;
let fTemp5 = cTemp3 * 9/5 + 32;
console.log(`n\n${cTemp3}°C is equal to ${fTemp5}°F`);

// C -> K
// T(K) = T(°C) + 273.15

let cTemp4 = 15;
let kTemp5 = cTemp4 + 273.15;
console.log(`n\${cTemp4}°C is equal to ${kTemp5}K`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67

let kTemp6 = 50;
let fTemp6 = kTemp6 * 9/5 - 459.67
console.log(`n\${kTemp6}K is equal to ${fTemp6}°F`);

// K -> C
// T(°C) = T(K) - 273.15

let kTemp7 = 80;
let cTemp5 = kTemp7 - 273.15
console.log(`${kTemp7}K is equal to ${cTemp5}°C`);
