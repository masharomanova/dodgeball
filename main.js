'use strict;'
// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const arrOfPeople = [{
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]


let listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, age, skillSet, placeBorn, team) {
    // your code here
      this.id = id;
      this.name = name;
      this.age = age;
      this.skillSet = skillSet;
      this.placeBorn = placeBorn;
      this.team = null
  }
  assignToTeam(team) {
      this.team = team;
      //this.team.blueTeam.push(this.name)
  }
}

class Team {
  constructor(name, mascot, color) {
// your code here
this.name = name;
this.mascot = mascot;
this.color = color;
  }
}

const redSide = new Team("Red Team", "Bears", "Red")
const blueSide = new Team("Blue Team", "Cougars", "Blue")

const signUpList = () => {
// your code here
// when list people button is clicked, list of people from array show up
let listPeople = document.getElementById("people");
arrOfPeople.map(person => {   //will be used to render person from list to player
const li = document.createElement("li");
const button = document.createElement("button");
button.innerHTML = "Make Player";
button.addEventListener("click", function(){
    makePlayer(person.id);
    listPeople.removeChild(li);
})
li.appendChild(button);
li.appendChild(document.createTextNode(person.name));
listPeople.append(li);
}) 
}

const makePlayer = (id, element) => {
// your code here
let players = document.getElementById("players");
const findPlayer = arrOfPeople.find(function(player){
    return player.id == id;
})
const playerPosition = arrOfPeople.indexOf(findPlayer);
const newPlayer = new Player(findPlayer.id, findPlayer.name, findPlayer.age, findPlayer.skillSet, findPlayer.placeBorn)
console.log(newPlayer);
listOfPlayers.push(newPlayer);
arrOfPeople.splice(playerPosition, 1);
const li = document.createElement("li");
const buttonRed = document.createElement("button");
buttonRed.innerHTML = "Red Team";
buttonRed.addEventListener("click", function(){
    addToRed(newPlayer.id);
    players.removeChild(li);
})
const buttonBlue = document.createElement("button");
buttonBlue.innerHTML = "Blue Team";
buttonBlue.addEventListener("click", function(){
    addToBlue(newPlayer.id);
    players.removeChild(li);
})
li.appendChild(buttonRed);
li.appendChild(buttonBlue);
li.appendChild(document.createTextNode(newPlayer.name));
players.append(li);
}

const addToRed = (id) => {
let redTeammates = document.getElementById("red");
redTeammates.style.background = "red";
redTeammates.style.color = "white";

const makeRed = listOfPlayers.find(function(picking){
    return picking.id == id;
})
const redPosition = listOfPlayers.indexOf(makeRed);
// const newRed = new redSide(makeRed.name, "Bears", "Red")
// console.log(newRed);
redTeam.push(newRed);
listOfPlayers.splice(redPosition, 1);
const li = document.createElement('li');
li.appendChild(document.createTextNode(newRed.name, newRed.mascot));
redTeammates.appendChild(li);
}

const addToBlue = (id) => {
let blueTeammates = document.getElementById("blue");
blueTeammates.style.background = "blue";
blueTeammates.style.color = "white";

const makeBlue = listOfPlayers.find(function(picking){
    return picking.id == id;
}) 
const bluePosition = listOfPlayers.indexOf(makeBlue);
const newBlue = new Team(makeBlue.name, "Cougars", "Blue")
blueTeam.push(newBlue);
listOfPlayers.splice(bluePosition, 1);
const li = document.createElement('li');
li.appendChild(document.createTextNode(newBlue.name, newBlue.mascot));
blueTeammates.appendChild(li);
}