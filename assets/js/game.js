var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators Round " + (i+1));

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?")

    if (promptFight === "fight" || promptFight === "FIGHT") {
        while (playerHealth > 0 && enemyHealth > 0){
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaing");
            if (enemyHealth <= 0) {
                window.alert (enemyName + " has died!");
                break;
            }
            else {
                window.alert (enemyName + " is still alive and has " + enemyHealth + " health left.");
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");
            if (playerHealth <= 0) {
                window.alert (playerName + " has died!");
                break;
            }
            else {
                window.alert (playerName + " is still alive and has " + playerHealth + " health left.")
            }
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        var confrimSkip = window.confirm("Are you sure you would like to skip the fight?");
        if (confrimSkip) {
            window.alert(playerName + " has decided to skip the fight!");
            playerMoney = playerMoney - 2
            console.log("playerMony", playerMoney)
        }else {
            fight();
        }
    }else {
        window.alert("Please choose a valid option");
        fight();
    }
};

var endGame = function(){
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
      var playAgainConfirm = window.confirm("Would you like to play again?");
      if (playAgainConfirm) {
          startGame();
      }
      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
}

var shop = function(){

}

var startGame = function(){
    playerHealth = 100
    playerAttack = 10
    playerMoney = 10
    for(i=0; i< enemyNames.length; i++){
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        if(playerHealth > 0){
            fight(pickedEnemyName);
        }else{;
            break;
        }
    }endGame();
}
startGame();