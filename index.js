function scuberGreetingForFeet(length){
  if (length <= 400){
    console.log("This one is on me!");
    return "This one is on me!";
  }
  else if (length > 400 && length < 2000){
    console.log("That will be twenty bucks.");
    return "That will be twenty bucks.";
  }
  else if (length > 2000 && length < 2500){
    console.log("I will gladly take your thirty bucks.");
    return "I will gladly take your thirty bucks.";
  }
  else if (length > 2500){
    console.log("No can do.");
    return "No can do.";
  }
}

function ternaryCheckCity(string){
  if (string === "NYC"){
    return "Ok, sounds good.";
  }
  else{
    return "No go.";
  }
}


function switchOnCharmFromTip(tip){
  /*switch (tip){
    case 'generous':
      console.log("Thank you so much.");
      break;
    case 'not as generous':
      console.log("Thank you.");
      break;
    default:
      console.log("Bye.");
  } */

  if (tip === 'generous'){
    return "Thank you so much.";
  }
  else if (tip === "not as generous"){
    return "Thank you.";
  }
  else{
    return "Bye.";
  }
}