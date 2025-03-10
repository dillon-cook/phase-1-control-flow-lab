function scuberGreetingForFeet(distance){
    // Write your code here!
    // check if the distance is less than 400
    if(distance < 400){
      return 'This is on me!';
    };
    //check if the distance is less than 2000
    else if(distance > 400 && distance < 2000){
      return 'That will be twenty bucks.';
    }
    //check if the distace is more than 2000
    else if(distance > 2000 && distance <= 2500){
      return 'I will gladly take your thirty bucks.';
    }
    //check if the distance is more than 2500
    else if(distance > 2500){
      return 'No can do';
    } 
  }
function ternaryCheckCity(city){
  // check if the city is NYC
  return city === "NYC" ? "OK" : "No Go";
}

function switchOnCharmFromTip(tip){
  //checking for tips
switch(tips){
  case "generous":
    return 'Thank you so much.';
    break;
  case 'not as generous':
    return 'Thank you.';
    break;
  case 'thanks for everything':
    return 'Bye.';
    break;

}
}