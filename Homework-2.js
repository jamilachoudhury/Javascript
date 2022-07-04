// Due Date : Tuesday Jul-05

/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;

result1 = sentence1.length >=10 ? 15 : 25;
console.log(`result1 -> ${result1}`);

/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */

const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence2_Replace_All_a_α_IgnoreCase = sentence2.replace(/a/gi, 'α');
console.log(`sentence2_Replace_All_a_α_IgnoreCase -> ${sentence2_Replace_All_a_α_IgnoreCase}`);


/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WEll.";
 
let sentence3_length = sentence3.length;
console.log(`The length of sentence 3: ${sentence3_length}`);

let sentence3StartsWith_HeAlTh = sentence3.startsWith('HeAlTh');
 console.log(`does ${sentence3} starts with 'HeAlTh' : ${sentence3StartsWith_HeAlTh}`);

 let sentence3Includes_Body = sentence3.includes('bOdY');
 console.log(`does ${sentence3} contains with 'bOdY' : ${sentence3Includes_Body}`);

let indexof_Body_IgnoreCase = sentence3.indexOf('bOdY');
 console.log(`indexofbOdY in sentence 3 -> ${indexof_Body_IgnoreCase}`);

const sentence3_Last_Character = sentence3.charAt(sentence3.length - 1);
console.log(`The last character in sentence 3: ${sentence3_Last_Character}`);

let sentence3_LastIndexOfBody = sentence3.lastIndexOf('bOdY');
let sentence3_bOdY_once = sentence3_LastIndexOfBody == indexof_Body_IgnoreCase;
console.log(`Does ${sentence3} include bOdY once : ${sentence3_bOdY_once}`);
