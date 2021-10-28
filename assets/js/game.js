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

var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("welcome to robot gladiators! round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        if (playerHealth > 0 && i < enemyNames.length - 1) {
            shop();
        }
    }
    else {
        window.alert("you have lost your robot battle");
        break;
    }
}
endGame();
};

var endGame = function(){
    window.alert("the game has ended. let's see how you did");
    if (playerHealth > 0) {
        window.alert("good job, you survived the game. your score is " + playerMoney);
    }
    else {
        window.alert("you lost in your robot battle");
    }
    var playAgainConfirm = window.confirm("would you like to play again")
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("thanks for playing RBG. come back again soon " + playerName);
    }
};
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'refill', 'upgrade', or 'leave' to make a choice"
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney > 7) {
            window.alert("refilling players health by 20 for 7 dollars");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {"you don't have enough money"}
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney > 7) {
            window.alert("upgrade player's attack by 6 for 7 dollars");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {"you don't have enough money"}
            break;
        case "LEAVE":
        case "leave":
            window.alert("leaving the store");
            break;
        default:
            window.alert("you did not pick a valid option. try again");
            shop();
            break;
    }
};
startGame();