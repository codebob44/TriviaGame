



  // This code will run as soon as the page loads
// window.onload = function() {  
    $("#start").on("click", run);

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
// };   

//  Set our number counter to whatever we want.
var number = 30;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

var amountCorrect = 0;

// The Quiz Object-breaks everything...?
// var quiz = {




    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
       alert ("Time started");
       intervalId = setInterval(decrement, 1000);

    }

    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>Time Remaining: " + number + "</h2>");
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time is Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    // $("input[name=multipleChoice]:checked").val();
    // console.log(hell yes);

    function handleClick()
  {         
var amountCorrect = 0;          
for(var i = 1; i <= 4; i++) {
  var radios = document.getElementsByName('multipleChoice');
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;
    }
    
  }
 }                   
    
  }
  // console.log(amountCorrect);
  //   alert("Correct Responses: " + amountCorrect);
   handleClick();

    //  Execute the run function.
     // run();

   



   