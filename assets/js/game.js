// Game States
// Win - player robot has defated all enemy-robots
    // fight all enemy robots
    // defeat each enemy robot
// Lose - player robot's health is zero or less

// window.alert("Welcome to the Robot Gladiators!");


// var enemy.names = ["roborto", "amy the android", "wally the walrus"];
// var enemy.health = 50;
// var enemy.attack = 12;



var fight = function(enemy) {

while(enemy.health > 0 && playerInfo.health > 0) {
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose."); 
    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("are you sure you want to quit?");
    
        if (confirmSkip) {
            window.alert("no fight between " + playerInfo.name + " and " + enemy.name + " today");
            playerInfo.money = Math.max(0,playerInfo.money - 10);
            console.log(playerInfo.name + " has " + playerInfo.money + " money left.");
            break;
    }
    }
    // else if (promptFight === "FIGHT" || promptFight === "fight") {

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remained."
    );

    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died");
        playerInfo.money = playerInfo.money + 20;
        break;
    }
    else {
        // window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0,playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died!");
        break;
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
// console.log(playerName, playerHealth, playerAttack);
// console.log(enemy.name, enemy.health, enemy.attack);

}};

var startGame = function() {
    playerInfo.reset();
    playerInfo.reset();
    playerInfo.reset();
for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
        window.alert("welcome to robot gladiators! round " + (i + 1));
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40,60);
        fight(pickedEnemyObj);
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("good job, you survived the game. your score is " + playerInfo.money);
    }
    else {
        window.alert("you lost in your robot battle");
    }
    var playAgainConfirm = window.confirm("would you like to play again")
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("thanks for playing RBG. come back again soon " + playerInfo.name);
    }
};
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? please enter one: 'refill', 'upgrade', or 'leave' to make a choice"
    );
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill": 
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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
 var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var playerInfo = {
    name: window.prompt("what is your robot's name?"), 
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
        this.health += 20;
        this.money -= 7;
        }
        else {
            window.alert("you don't have enough money")
        }
    },
    upgradeAttack: function() {
        if (this.money > 7) {
        this.attack += 6;
        this.money -= 7    
        }
        else {
            window.alert("you don't have enough money")
        }
    }
};
var enemyInfo = [
    {
        name: "roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "amy the android",
        attack: randomNumber(10,14)
    },
    {
        name: "wally the walrus",
        attack: randomNumber(10,14)
    }
]

startGame();