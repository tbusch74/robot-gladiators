var playerInfo = {
name: window.prompt("What is your robot's name?"),
health: 100,
attack: 10,
money: 10,
reset: function(){
    this.health = 100;
    this.attack = 10;
    this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Tumble",
        attack: randomNumber(10,14)
    }
];


var fight = function(enemy) {
    window.alert("Welcome to Robot Gladiators Round " + (i+1));

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?")

    if (promptFight === "fight" || promptFight === "FIGHT") {
        while (playerInfo.health > 0 && enemy.health > 0){
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - playerInfo.attack);
        // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaing");
            if (enemy.health <= 0) {
                window.alert (enemy.name + " has died!");
                break;
            }
            else {
                window.alert (enemy.name + " is still alive and has " + enemy.health + " health left.");
            }
            // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");
            if (playerInfo.health <= 0) {
                window.alert (playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert (playerInfo.name + " is still alive and has " + playerInfo.health + " health left.")
            }
        }
    }else if (promptFight === "skip" || promptFight === "SKIP"){
        var confrimSkip = window.confirm("Are you sure you would like to skip the fight?");
        if (confrimSkip) {
            window.alert(playerInfo.name + " has decided to skip the fight!");
            playerInfo.money = Math.max(0, playerInfo.money - 2);
            console.log("playerMoney", playerInfo.money);
        }else {
            fight();
        }
    }else {
        window.alert("Please choose a valid option");
        fight();
    }
};

var endGame = function(){
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "REFILL": // new case
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE": // new case
        case "upgrade":
            playerInfo.upgradeAttack
            break;
        case "LEAVE": // new case
        case "leave":
          window.alert("Leaving the store.");
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          shop();
          break;
      }
}

var startGame = function(){
playerInfo.reset();
    for(i=0; i< enemyInfo.length; i++){
        var pickedEnemyObj = enemyInfo[i];
        if (i < enemyInfo.length - 1 && playerInfo.health > 0){
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
            if (storeConfirm){
            shop();
            }
        }
        pickedEnemyObj.health = randomNumber(40,60);
        if(playerInfo.health > 0){
            fight(pickedEnemyObj);
        }else{;
            break;
        }
    }endGame();
}
startGame();