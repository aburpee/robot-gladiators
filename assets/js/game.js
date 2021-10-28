// Game States
// Win - player robot has defated all enemy-robots
    // fight all enemy robots
    // defeat each enemy robot
// Lose - player robot's health is zero or less

// window.alert("Welcome to the Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["roborto", "amy the android", "wally the walrus"];
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {

// console.log(promptFight);
while(enemyHealth > 0 && playerHealth > 0) {
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose."); 
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("are you sure you want to quit?");
    
        if (confirmSkip) {
            window.alert("no fight between " + playerName + " and " + enemyName + " today");
            playerMoney = playerMoney - 10;
            console.log(playerName + " has " + playerMoney + " money left.");
            break;
    }
    }
    // else if (promptFight === "FIGHT" || promptFight === "fight") {


    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remained."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died");
        playerMoney = playerMoney + 20;
        break;
    }
    else {
        // window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
// console.log(playerName, playerHealth, playerAttack);
// console.log(enemyName, enemyHealth, enemyAttack);

}};


for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("welcome to robot gladiators! round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(enemyNames[i]);
    }
    else {
        window.alert("you have lost your robot battle");
        break;
    }

};