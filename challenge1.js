var heightMark = 100;
var ageMark = 30;
totalMark = (5 *  ageMark) + heightMark;

var heightJohn = 150;
var ageJohn = 30;
totalJohn = (5 * ageJohn) + heightJohn;

if (totalJohn > totalMark){
  console.log("John wins \n" + totalJohn);
} else if (totalJohn === totalMark){
    console.log("It's a draw");
} else {
    console.log("Mark wins");
}
