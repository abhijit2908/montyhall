var doors = ['car','goat','goat'];

var user_choice = Math.floor(Math.random() * doors.length);

var switchValue = true;

var wins = 0;

var losses = 0;

 

 

function opernDummyDoor(doors, user_choice){

               

                console.log("Shuffled door values " + doors);

                console.log("User choice is " + user_choice);

 

                for (var i = 0; i < doors.length; i++) {

                               

                                if(doors[i] !== 'car' && i !== user_choice){

                                                console.log("Opened door is " + i + " value is " + doors[i]);

                                                return i;

                                }

                }

 

 

 

 

}

 

 

 

 

function shuffleDoor(doors){

 

 

                var j, x, i;

                for (i = doors.length - 1; i > 0; i--) {

                                j = Math.floor(Math.random() * (i + 1));

                                x = doors[i];

                                doors[i] = doors[j];

                                doors[j] = x;

                }

 

                return doors;

 

               

 

}

 

 

function startGame(){

for (var i = 0; i < 1000; i++) {

 

 

                shuffleDoor(doors);

                var openedDoor = opernDummyDoor(doors, user_choice);

                switchDoor(openedDoor, doors, user_choice, switchValue);

}

}

 

 

startGame();

 

function switchDoor(openedDoor, doors, user_choice, switchValue){

 

 

                console.log("doors array is " + doors);

                console.log("opened door is " + openedDoor + " with a value of " + doors[openedDoor]);

                console.log("user choice is " + user_choice);

 

                if(switchValue){

 

                                var temp = user_choice;

                                user_choice = doors.length - (user_choice + openedDoor);

 

                                console.log("user choice in switch " + user_choice);

 

 

                                if(doors[user_choice] === 'car'){

                                                wins++;

                                }

 

                                else

                                                losses++;

 

 

 

                                console.log("Wins are " + wins + " losses are " + losses);

 

                }

 

 

                else{

 

                                if(doors[user_choice] === 'car'){

                                                wins++;

                                }

 

                                else

                                                losses++;

 

 

                                console.log("Wins are " + wins + " losses are " + losses);

 

 

                }

 

 

 

}             

 