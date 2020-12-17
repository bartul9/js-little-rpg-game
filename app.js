//GUESS THE NUMBER GAME PRACTICE

// let max = parseInt(prompt("Whats your maximum number?"));
// while (!max) {
//   max = parseInt(prompt("Invalid number try again."));
// }

// let targetNum = Math.floor(Math.random() * max) + 1;

// let guess = parseInt(prompt("Whats your first guess?"));

// let trys = 1;

// while (guess !== targetNum) {
//   trys++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Go lower!"));
//   } else {
//     guess = parseInt(prompt("Go Higher."));
//   }
// }

// console.log(`Good job, it took you ${trys}`);

//MY TODO LIST PRACTICE

// const myList = ["Get some money", "Get girlfriend"];

// let question = prompt();

// while (question !== "quit") {
//   question = prompt("Hello, what do you want to do?");
//   if (question === "quit") break;
//   if (question === "list") {
//     for (let i = 0; i < myList.length; i++) {
//       console.log(i, myList[i]);
//     }
//   } else if (question === "delete") {
//     delThing = prompt("What number do you want to delete?");
//     myList.splice(delThing, 1);
//     console.log(`You deleted item number: ${delThing}`);
//   } else if (question === "new") {
//     let newThing = prompt("What do you want to add?");
//     myList.push(newThing);
//     console.log(`You added ${newThing}`);
//   }
// }

// FUNCTIONS PRACTICE

// const myList = ["Work", "Learn", "Watch", "Listen"];

// const newList = myList.map((t) => t.toUpperCase());

//RETURN LAST ELEMENT OF ARRAY, IF ITS EMPITY, RETURN NULL

// function lastElement(arr) {
//   if (arr.length > 0) {
//     return arr[arr.length - 1];
//   }
//   return null;
// }

//RETURN FIRST LETTER CAPITALIZED

// const myStr = "mike";

// function capitalize(str) {
//   let index = str.slice(0, 1).toUpperCase();
//   let index2 = str.slice(1, str.length);
//   return `${index + index2}`;
// }

//RETURN SUM OF ALL CHARACTERS IN THE ARRAY

// const numbers = [2, 3, 4, 6];

// function sumArray(arr) {
//   //Always have the sum on 0 if you are starting to count something
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   // Beware to put return outside of loop so you dont stop it
//   return sum;
// }

//DIE ROLL GAME

// let myFun = (func) => {
//   for (let i = 0; i < 10; i++) {
//     func();
//   }
// };

// let anyFun = () => {
//   const number = Math.floor(Math.random() * 6);
//   const number2 = Math.floor(Math.random() * 6);
//   if (number === 1 && number2 === 1) {
//     console.log("Snake Eyes");
//   }
//   console.log(number, number2);
// };

//MY OWN GAME, PRACTICE

let question = prompt("Welcome to my game. Type in 'game' to play.");
while (question !== "game") {
  question = prompt("Welcome to my game. Type in 'game' to play.");
}

if (question === "game") {
  while (question !== "quit") {
    prompt("Roll the die!");

    let myNum = Math.floor(Math.random() * 6);
    console.log(`You got the ${myNum}`);

    if (myNum >= 1 && myNum <= 3) {
      question = prompt("You go to the left doors");
    } else {
      question = prompt("You go to the right doors");
    }

    question = prompt("What do you want to do now? 'Red' or 'green' doors");

    //RED DOORS

    if (question === "red") {
      console.log(
        "You choosed the red doors, it wasnt very wise decision but it is what it is.You see three people in front of you, do you want to 'fight' or 'run'?"
      );
      //FIGHT OR RUN
      let choice = prompt("'fight' or 'run'");
      if (choice === "fight") {
        console.log(
          "You fought bravely but you lost. Your life is over, say goodbye"
        );
      } else if (choice === "run") {
        console.log(
          "You choose to run like a coward, shame on you. But, you are still alive indeed, do you want to keep 'running' or 'hide'?"
        );
        //RUN OR HIDE
        choice = prompt("'run' or 'hide'");
        if (choice === "run") {
          console.log(
            "You kept on running but they cought you in the end, YOU DIED"
          );
        } else if (choice === "hide") {
          console.log(
            "You played it smart. You have hidden behind the rock and waited for the night to fall. You go home happy, to your family"
          );
        }
      }
    } else if (question === "green") {
      console.log(
        "You choose green doors, in front of you stands room full of gold, what do you want to do with it? Take some or take all?"
      );
      question = prompt("'take' or 'leave'");
      if (question === "take") {
        console.log(
          "You took small chunk of gold and tryed to leave the room, but suddenly it collapsed on you, killing you on the spot"
        );
      } else if (question === "leave") {
        console.log(
          "You left the room without even looking at gold, you come home to your familly and go to sleep."
        );
      }
    }
  }
}
