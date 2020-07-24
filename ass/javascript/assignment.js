//VERY EASY
//  Q1.
function convertMinutestoSeconds(minutes) 
    {
      return Math.floor(minutes * 60);
    }
    var minutesToSeconds = convertMinutestoSeconds(2); 
    console.log(convertMinutestoSeconds(2));

//Q2.
var x = 2;
if (x % 2 == 0)
{
  alert('even');          // alert used to specify particular message in a form of box .
}
else
{
  alert('odd')
}
    
//EASY
//Q1.
function char_count(str, letter)  //function
{
 var Count = 0;
 for (var position = 0; position < str.length; position++) //condition
 {
    if (str.charAt(position) == letter) 
      {                                    //count increases to check
      Count += 1;
      }
  }
  return Count;
}

console.log(char_count('Google Scholar', 'o'));

//Q2.
function sumAll(arr) {
  
  var sum = 0;
  
  for(var i=0; i<arr.length; i++){
    
   sum += Math.max(arr[i]) + Math.min(arr[i]);     
  }
  
  
  return sum;
}

sumAll([1, 4]);


//MEDIUM
//Q1.
function reverseStringWords (sentence) {
  return sentence.split(' ').map(function(word, index) {
    if ((index+1)%3==0) return word.split('').reverse().join('');
    else return word;
  }).join(' ');
}

console.log(reverseStringWords("london is so awesome."));

//Q3.
var arr = [7,7,2,3,3,2,4,4,5,5];

    function similar(array){

        var newArray = [];
        newArray.push(array[0]);
        for(var i = 0; i < array.length -1; i++) {
            if(array[i] != array[i + 1]) {
                newArray.push(array[i + 1]);
            }
        }
        console.log(newArray);
    }
    similar(arr);

 //HARD
 //Q1.

 console.log(typeof 12);