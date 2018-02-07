/* ---------------------------
*** #1 Percentage ***

Write a JavaScript function to calculate the percentage (%) of a given number.

Test:
console.log(percentage(2000, 37.12));

Output:
742.4
 --------------------------- */

function percentage(number, percentage) {
  return number*(percentage/100);
}
console.log("Percentage Calculator:");

   console.log(percentage(2000, 37.12));
  console.log(percentage(450, 56.5));
  console.log(percentage(5230, 34));


/* ---------------------------
/*** #2 Area of Triangle ***

Write a JavaScript function to calculate the area of a triangle given the base and height.

Test:
console.log(areaTriangle(5, 20));

Output:
50
 --------------------------- */

 function areaTriangle(base, height) {
   return 0.5*(base * height);
 }
 console.log("Triangle Area Calculator:");
 
    console.log(areaTriangle(2, 7));
   console.log(areaTriangle(20, 56.5));
    console.log(areaTriangle(50, 34));


/* ---------------------------
*** #3 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {
  var i, temp, str;

  console.log(text);  // the first one : cat

  for(i = 0; i < text.length; i++)
  {
    text = text[text.length-1] + text.substring(0, text.length-1);  // notice this line
console.log(text);
}
}

console.log("Rotate String:");

  rotate_string("cat");

  rotate_string("pseudonym")


/* ---------------------------
*** #4 Hide part of email address ***

Write a JavaScript function to hide email addresses to protect from unauthorized user.

Test:
console.log(protect_email("tom_jenkins@example.com"));

Output:
"tom_j...@example.com"

HINT: Use split() and substring()
 --------------------------- */

function protect_email(email) {
  var avg, splitted, part1, part2;
    splitted = email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
}

console.log("Protected email:");

  console.log(protect_email("harry_potter@gmail.com"));
  console.log(protect_email("sarah.connor@gmail.com"));


/* ---------------------------
*** #5 Remove First Occurence ***

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

Test:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

Output:
"The quick brown fox jumps over lazy dog"

HINT: Use indexOf() and slice()
 --------------------------- */

function remove_first_occurrence(text, searchstring) {
  var str;

    for(var i = 0; i < text.length; i++)
    {


      //  console.log("line 91: " + text.charAt(i));
        if( text.charAt(i) == searchstring.charAt(0) && text.charAt(i + searchstring.length) == " ")  // incomplete condiiton
        {
            // remove
            str = text.slice(0, i-1) + text.slice(i+searchstring.length,  text.length);   // all before 'the'  +
        }
    }

return str;
}

console.log("Remove First Occurrence:");

  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
  console.log(remove_first_occurrence("Drastic times call for drastic measures", 'drastic'));


/* ---------------------------
*** #6 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('textbook'));

Output:
bekoottx

HINT: Use join(), split() and sort() functions
 --------------------------- */

function alphabetic_order(word) {
  var arr = word.split("");   // split the string at each characters
      //console.log(arr.length);
      arr.sort();
      //for(var i = 0; i < res.length; i++)
      //{
      //  console.log(i + " " + res[i] );
      //}

      var str = arr.join();  // 5:33 check this function
      for(var i =  0; i < str.length; i++)
         str = str.replace(',' , '');
return str;
}

console.log("Alphabetic Order:");

   console.log(alphabetic_order("textbook"));
   console.log(alphabetic_order("webmaster"));
   console.log(alphabetic_order("supercalifragilisticexpialidocious"));


/* ---------------------------
*** #7 Most Frequent Item ***

Write a JavaScript function to find the most frequent item in a given array.

Test:
most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);

Output:
c occurs 5 times
 --------------------------- */

function most_frequent(arr) {

   console.log("Most frequently occuring item in arr");

   var counter = 0, new_count, max_index, visit = [];

   for(var i = 0; i < arr.length; i++)
     visit.push(false);
 

   for(var i = 0; i < arr.length; i++)
   {

     if(visit[i] == false)
     {
       new_count = 1; // first case we meet
       visit[i] = true;

       for(var j = i+1; j < arr.length; j++)
       {

         if(arr[j] === arr[i]) // notice this line
         {
           new_count++;  // increase upon match
           visit[j] = true;
         }
       }

       if(new_count > counter)
       {
         counter = new_count;
         max_index = i;
       }
     }
   }

console.log(arr[max_index] + " occurs " + counter + " times");
}

console.log("Most Frequent Item:");

  most_frequent([3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 9, 3]);
  most_frequent([7, 2, 'ax', '9', 9, 'ax', 'ax']);


/* ---------------------------
*** #8 Remove Duplicate Values ***

Write a JavaScript program to find and remove duplicate values in a JavaScript array.

Test:
remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
[3, 'a', 2, 4, 9]
 --------------------------- */

function remove_duplicates(num) {
  var x,
      len=num.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
  
  console.log("Duplicates removed from array");
}

console.log("Remove Duplicate Values:");

  console.log(remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
   console.log(remove_duplicates([4, 4, 4, 5, 's', 8, 's']));


/* ---------------------------
*** #9 Dash between Even Numbers ***

Write a JavaScript program which accepts a number as input and inserts dashes (-) between two consecutive even numbers.

Test:
dash_in_even(012345684);

Output:
"012-456-8-4"
 --------------------------- */

function dash_in_even(num) {
var str = num.toString();
var result = [str[0]];
  
for(var x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
  console.log("even numbers separated by dashes");
}

console.log("Dash between Even Numbers:");

  dash_in_even(100);
   dash_in_even(1356);
   dash_in_even(246824);
   dash_in_even(1324567824);


/* ---------------------------
*** #10 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()
 --------------------------- */

function guessing_game(guess)  // no display
 {

   // Get a random integer from 1 to 10 inclusive
   console.log("matched or unmatched?");
   var match, num;

   //for(var i = 0; i <= 10000; i++)
   //{
     num = Math.random() * 100;  // Math.random() return a random number between 0 and 1
     num = Math.ceil(num);  // used floor thus getting 1 among 10000 samples
     num = (num % 10) + 1; // to generate number between 1 and 10
     console.log("Random number : " + num);
   //}

   
    if(guess == num){
      return("Well Played! Your guess was correct.\n");
    } else{
      return("Incorrect Guess!");
    }
  

}

  console.log("Guessing Game:");

    var guess = prompt('Guess the number between 1 and 10 inclusive');
    console.log("Your guessed: "+ guess);
   guessing_game(guess);
