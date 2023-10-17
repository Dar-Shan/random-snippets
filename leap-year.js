if (year % 4 === 0) {
    if (year % 100 !== 0){
       return("Leap year.");
     } else if (rok % 100 === 0 && rok % 400 === 0) {
       return("Leap year.");
     } else {
       return("Not leap year.");
     }
 } else {
    return("Not leap year.");  
 }