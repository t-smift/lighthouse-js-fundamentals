const talkingCalendar = function(date) {
  let dateSplit =  date.split ("/"); 
  let day = dateSplit[2];
  let year = dateSplit[0];
  let month = dateSplit[1];
 
 
  if (day === "02" || day === "22") {
    suffix = +day + "nd" //using unary + operator to get rid of the leading zero 
  } else if (day === "01" || day === "21" || day === "31") {
    suffix = +day + "st";
  } else if (day === "03" || day === "23") {
    suffix = +day + "rd";
  } else {
    suffix = +day + "th";
  }
  
  switch (month) {
    case '01': month = 'January'; break;  
    case '02': month = 'February'; break;
    case '03': month = 'March'; break;
    case '04': month = 'April'; break;
    case '05': month = 'May'; break;
    case '06': month = 'June'; break;
    case '07': month = 'July'; break;
    case '08': month = 'August'; break;
    case '09': month = 'September'; break;
    case '10': month = 'October'; break;
    case '11': month = 'November'; break;
    case '12': month = 'December'; break;
}
  
let fullDate = month +" " + suffix +  ", " + year
return fullDate; 
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));