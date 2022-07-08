/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'USA USA';
 const totalcountryName = countryName.length;
 console.log(totalcountryName);

 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence1 = ['HeAlTh', 'wAs', 'EArlIer', 'said', 'To', 'Be', 'the', 'AbILitY', 'of', 'the', 'bOdY', 'funcTiOnInG', 'WElL.']
 const sentence1length = sentence1.length;
 console.log(sentence1length);
 

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */

  let fourWordSent = 'never eat soggy waffles';
  let fourWordToLowerCase = fourWordSent.toLowerCase();
  let fourWordArr = fourWordToLowerCase.split(' ');
  let fourWordTitleCase = fourWordArr[0].charAt(0).toUpperCase() + fourWordArr[0].slice(1);
  fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[1].charAt(0).toUpperCase() + fourWordArr[1].slice(1);
  fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[2].charAt(0).toUpperCase() + fourWordArr[2].slice(1);
  fourWordTitleCase = fourWordTitleCase +" "+ fourWordArr[3].charAt(0).toUpperCase() + fourWordArr[3].slice(1);

  console.log(fourWordTitleCase);
 
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */ 

  let fourWordSen2 = 'wOrK HarD pLaY HaRd';
  let fourWordSen2_UpperCase = fourWordSen2.toUpperCase();
  let fourWord_arr2 = fourWordSen2_UpperCase.split(' ');
  let fourWordAbr = fourWord_arr2[0].charAt(0);
  fourWordAbr = fourWordAbr + fourWord_arr2[1].charAt(0);
  fourWordAbr = fourWordAbr + fourWord_arr2[2].charAt(0);
  fourWordAbr = fourWordAbr + fourWord_arr2[3].charAt(0);
  console.log(fourWordAbr);