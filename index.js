// function scuberGreetingForFeet(ride){
//   // Write your code here!
//   let ride;
//   if(ride<=400) {
//   console.log("This one is on me!");
//   }else if(ride>=400 ||ride<=2000){
//   console.log("That will be twenty bucks.");
//   }else if(ride >2000){
//   console.log("I will gladly take your thirty bucks.");
//   }else if(ride<2500){
//   console.log("No can do.");
//   }
//   return ride

// }
// ride(119)

// function ternaryCheckCity(){
//   // Write your code here!
//   console.log("")
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }

function scuberGreetingForFeet(ride) {
  // Check distance and return appropriate response
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 400 && ride <= 2000) {
    return "That will be twenty bucks.";
  } else if (ride > 2000 && ride <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// Testing the function
console.log(scuberGreetingForFeet(119)); // "This one is on me!"
console.log(scuberGreetingForFeet(1500)); // "That will be twenty bucks."
console.log(scuberGreetingForFeet(2200)); // "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(2700)); // "No can do."

function ternaryCheckCity(city) {
  // Use ternary operator to check city
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Testing the function
console.log(ternaryCheckCity("NYC")); // "Ok, sounds good."
console.log(ternaryCheckCity("Los Angeles")); // "No go."

function switchOnCharmFromTip(tip) {
  // Use switch statement to handle different tip amounts
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

// Testing the function
console.log(switchOnCharmFromTip("generous")); // "Thank you so much."
console.log(switchOnCharmFromTip("not as generous")); // "Thank you."
console.log(switchOnCharmFromTip("cheap")); // "Bye."

