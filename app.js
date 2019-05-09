console.log("Made By: Thomas Murney, 2019");
var result = document.getElementById("showresult").innerHTML;

var scorePlayer = 0;
var scoreCpu = 0;


function selectWeapon(weapon){

  var choice = weapon;
  var comp_rand = Math.floor(Math.random() * 100); //Generates a random number within 100 to a whole number
  var comp_choice;

  if(comp_rand <= 20){
    comp_choice = "rock"
  } else if(comp_rand > 20 && comp_rand <=40) {
    comp_choice = "paper"
  } else if(comp_rand > 40 && comp_rand <=60) {
    comp_choice = "scissors"
  } else if(comp_rand > 60 && comp_rand <=80){
    comp_choice = "lizard"
  } else if(comp_rand > 80 && comp_rand <=100) {
    comp_choice = "spock"
  };

  matchup(choice.toLowerCase(), comp_choice.toLowerCase());



}

function matchup(weapon1, weapon2){

  document.getElementById("pChoice").innerHTML = "<img class='iconChoice' src='res/" + weapon1 + ".png'/>"
  document.getElementById("cChoice").innerHTML = "<img class='iconChoice' src='res/" + weapon2 + ".png'/>"

  switch(weapon1){

    case "rock": if(weapon2 === "scissors" || weapon2 === "lizard"){
      document.getElementById("showresult").innerHTML = "Rock crushes " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "rock"){
      document.getElementById("showresult").innerHTML = "Both of you picked Rock, it's a draw!";
    } else {
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    };
    break;

    case "paper": if(weapon2 === "rock"){
      document.getElementById("showresult").innerHTML = "Paper covers " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "spock"){
      document.getElementById("showresult").innerHTML = "Paper disproves " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "paper"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";
    }
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    };
    break;

    case "scissors": if(weapon2 === "paper"){
      document.getElementById("showresult").innerHTML = "Scissors cuts " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "lizard"){
      document.getElementById("showresult").innerHTML = "Scissors decapitates " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "scissors"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    }; break;

    case "lizard": if(weapon2 === "spock"){
      document.getElementById("showresult").innerHTML = "Lizard poisons " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "paper"){
      document.getElementById("showresult").innerHTML = "Lizard eats " + weapon2 + "!";
      scorePlayer++;
    } else if(weapon2 === "lizard"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;

    }; break;

    case "spock": if(weapon2 === "scissors"){
      document.getElementById("showresult").innerHTML = "Spock smashes " + weapon2 + "!";
      scorePlayer++;
      console.log(scoreCpu);
      console.log(scorePlayer);
    } else if(weapon2 === "rock"){
      document.getElementById("showresult").innerHTML = "Spock vaporises " + weapon2 + "!";
      scorePlayer++;
      console.log(scoreCpu);
      console.log(scorePlayer);
    } else if(weapon2 === "spock"){
      document.getElementById("showresult").innerHTML = "Both of you picked " + weapon2 + ", highly illogical...but it's a draw!";}
      else{
      document.getElementById("showresult").innerHTML = "Opponent picked " + weapon2 + " you lose...";
      scoreCpu++;
      console.log(scoreCpu);
      console.log(scorePlayer);
    }; break;
  }

  function resetScores(){
    scorePlayer = 0;
    scoreCpu = 0;
  }


  if(scorePlayer === 10){
    alert("You won " + scorePlayer + ":" + scoreCpu + " , well done!!!")
    resetScores();
  } else if(scoreCpu === 10){
    alert("You lost " + scoreCpu + ":" + scorePlayer + " , better luck next time :(")
    resetScores();
  }

  document.getElementById("sbPlayer").innerHTML = scorePlayer;
  document.getElementById("sbCpu").innerHTML = scoreCpu;

}
