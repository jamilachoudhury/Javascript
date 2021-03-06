// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 80;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F is equal to ${cTemp1}°C`);

// F -> K
// T(K) =  (T(°F) + 459.67) x 5/9 
let fTemp2 = 35;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
console.log(`\n${fTemp2}°F is equal to ${kTemp1}K`);

// C -> F
// T(°F) = T(°C) x 9/5 + 32
let cTemp2 = 40;
let fTemp3 = cTemp2 * 9/5 + 32;
console.log(`\n${cTemp2}°C is equal to ${fTemp3}°F`);

// C -> K
// T(K) = T(°C) + 273.15
let cTemp3 = 20;
let kTemp2 = cTemp3 + 273.15;
console.log(`\n${cTemp3}°C is equal to ${kTemp2}K`);

// K -> F
// T(°F) = T(K) x 9/5 - 459.67 
let kTemp3 = 300;
let fTemp4 = kTemp3 * 9/5 - 459.67;
console.log(`\n${kTemp3}K is equal to ${fTemp4}°F`);

// K -> C
// T(°C) = T(K) - 273.15
let kTemp4 = 400; 
let cTemp4 = kTemp4 - 273.15;
console.log(`\n${kTemp4}K is equal to ${cTemp4}°C`);