console.log("Made By: Thomas Murney, 2019");
var result = document.getElementById("showresult").innerHTML;  //Locates the part of the HTML which will display the results

var scorePlayer = 0; //Scores are set to 0
var scoreCpu = 0;


function selectWeapon(weapon){

  var choice = weapon; //takes the user selection and runs it through this function. 
  var comp_rand = Math.floor(Math.random() * 100); //Generates a random number within 100 to a whole number
  var comp_choice;

  if(comp_rand <= 20){    //If the random number is within the first fifth of 100
    comp_choice = "rock"  //The randomised choice
  } else if(comp_rand > 20 && comp_rand <=40) {
    comp_choice = "paper"
  } else if(comp_rand > 40 && comp_rand <=60) {
    comp_choice = "scissors"
  } else if(comp_rand > 60 && comp_rand <=80){
    comp_choice = "lizard"
  } else if(comp_rand > 80 && comp_rand <=100) {
    comp_choice = "spock"
  };

  matchup(choice.toLowerCase(), comp_choice.toLowerCase()); //Function to compare the player selection and the computer choice



}

function matchup(weapon1, weapon2){

  document.getElementById("pChoice").innerHTML = "<img class='iconChoice' src='res/" + weapon1 + ".png'/>"  //Displays image of weapon icons
  document.getElementById("cChoice").innerHTML = "<img class='iconChoice' src='res/" + weapon2 + ".png'/>"

  switch(weapon1){

    case "rock": if(weapon2 === "scissors" || weapon2 === "lizard"){  //Rock can beat either scissors or lizard, but not Spock or paper.
      document.getElementById("showresult").innerHTML = "Rock crushes " + weapon2 + "! You win this round!";
      scorePlayer++;  //Score for player goes up a value once
    } else if(weapon2 === "rock"){
      document.getElementById("showresult").innerHTML = "Both of you picked Rock, it's a draw!"; //In the event of a draw
    } else {
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++; //User loses the round, CPU score goes up one.

    };
    break;

    case "paper": if(weapon2 === "rock"){ //Paper can beat rock and spock, but not scissors or lizard
      document.getElementById("showresult").innerHTML = "Paper covers " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "spock"){
      document.getElementById("showresult").innerHTML = "Paper disproves " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "paper"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";
    }
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    };
    break;

    case "scissors": if(weapon2 === "paper"){ //scissors can beat paper and lizard but not rock or spock
      document.getElementById("showresult").innerHTML = "Scissors cuts " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "lizard"){
      document.getElementById("showresult").innerHTML = "Scissors decapitates " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "scissors"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    }; break;

    case "lizard": if(weapon2 === "spock"){ //Lizard can beat paper and spock, but not rock or scissors
      document.getElementById("showresult").innerHTML = "Lizard poisons " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "paper"){
      document.getElementById("showresult").innerHTML = "Lizard eats " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "lizard"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    }; break;

    case "spock": if(weapon2 === "scissors"){ //Spock can beat scissors and rock but not paper or lizard.
      document.getElementById("showresult").innerHTML = "Spock smashes " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "rock"){
      document.getElementById("showresult").innerHTML = "Spock vaporises " + weapon2 + "! You win this round!";
      scorePlayer++;
    } else if(weapon2 === "spock"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", highly illogical...but it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;
    }; break;
  }

  function resetScores(){ //Function for setting scores back to 0
    scorePlayer = 0;
    scoreCpu = 0;
  }


  if(scorePlayer === 10){ //Whoever reaches 10 first
    alert("You won " + scorePlayer + ":" + scoreCpu + " , well done!!!") //Displays winning message with the score
    resetScores();
  } else if(scoreCpu === 10){
    alert("You lost " + scoreCpu + ":" + scorePlayer + " , better luck next time :(") //Displays losing message with the score
    resetScores();
  }

  document.getElementById("sbPlayer").innerHTML = scorePlayer; //Sets a specific HTML tag to the player's score
  document.getElementById("sbCpu").innerHTML = scoreCpu; //Sets a specific HTML tag to the CPU's score

}
