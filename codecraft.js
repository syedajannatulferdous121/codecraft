// Game class
class Game {
  constructor() {
    this.players = [];
    this.levels = [];
    this.currentLevel = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  addLevel(level) {
    this.levels.push(level);
  }

  start() {
    this.currentLevel = 0;
    this.levels[this.currentLevel].start();
  }

  nextLevel() {
    if (this.currentLevel < this.levels.length - 1) {
      this.currentLevel++;
      this.levels[this.currentLevel].start();
    } else {
      console.log("Congratulations! You have completed all levels.");
      this.end();
    }
  }

  end() {
    console.log("Game Over");
  }
}

// Player class
class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.level = 1;
    this.achievements = [];
    this.powerUps = [];
    this.codeHistory = [];
    this.currentChallengeAttempts = 0;
  }

  updateScore(points) {
    this.score += points;
  }

  levelUp() {
    this.level++;
    console.log(`Congratulations ${this.name}! You have reached level ${this.level}.`);
  }

  earnAchievement(achievement) {
    this.achievements.push(achievement);
    console.log(`Achievement unlocked: ${achievement}`);
  }

  usePowerUp(powerUp) {
    if (this.powerUps.includes(powerUp)) {
      console.log(`Player ${this.name} used the ${powerUp} power-up.`);
      // Implement logic for power-up effects
    } else {
      console.log(`Player ${this.name} does not have the ${powerUp} power-up.`);
    }
  }

  addCodeToHistory(code) {
    this.codeHistory.push(code);
  }

  attemptChallenge() {
    this.currentChallengeAttempts++;
  }

  provideInput(input) {
    // Implement logic to process user input
    console.log(`Player ${this.name} entered: ${input}`);
    // Additional logic based on user input
  }
}

// Level class
class Level {
  constructor(number, challenge) {
    this.number = number;
    this.challenge = challenge;
  }

  start() {
    console.log(`Starting Level ${this.number}`);
    console.log(`Challenge: ${this.challenge}`);
  }

  end() {
    console.log(`Level ${this.number} completed!`);
  }
}

// Create game instance
const game = new Game();

// Create players
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

// Add players to the game
game.addPlayer(player1);
game.addPlayer(player2);

// Create levels
const level1 = new Level(1, "Write a function to calculate the sum of two numbers.");
const level2 = new Level(2, "Write a function to reverse a string.");

// Add levels to the game
game.addLevel(level1);
game.addLevel(level2);

// Start the game
game.start();

// Simulate player progress and achievements
player1.updateScore(10);
player1.levelUp();
player1.earnAchievement("First Level Complete");

// Move to the next level
game.nextLevel();

// Simulate more player progress and achievements
player2.updateScore(20);
player2.levelUp();
player2.earnAchievement("Second Level Complete");

// Move to the next level
game.nextLevel();

// Simulate power-up usage
player1.usePowerUp("Double Points"); // Player 1 does not have the "Double Points" power-up
player2.usePowerUp("Extra Life"); // Player 2 uses the "Extra Life" power-up

// Simulate code history
player1.addCodeToHistory("function sum(a, b) { return a + b; }");
player2.addCodeToHistory("function reverseString(str) { return str.split('').reverse().join(''); }");

// Simulate challenge attempts
player1.attemptChallenge();
player1.attemptChallenge();
player2.attemptChallenge();

// Simulate user input
player1.provideInput("5");
player2.provideInput("Hello");

// Additional Features

// Simulate multiplayer interaction
player1.provideInput("Player 2, can you help me with this challenge?");
player2.provideInput("Sure, what do you need help with?");

// Simulate time-based challenges
class TimeChallenge extends Level {
  constructor(number, challenge, timeLimit) {
    super(number, challenge);
    this.timeLimit = timeLimit;
  }

  start() {
    super.start();
    console.log(`You have ${this.timeLimit} seconds to complete the challenge.`);
    // Start timer logic
  }

  end() {
    super.end();
    // Stop timer logic
  }
}

const level3 = new TimeChallenge(3, "Write a function to check if a number is prime.", 30);
game.addLevel(level3);
game.nextLevel();
