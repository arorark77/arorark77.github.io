// declare an abject variable to hold hrs of the day
let dayhrs = {
  "8 AM": "",
  "9 AM": "",
  "10 AM": "",
  "11 AM": "",
  "12 PM": "",
  "1 PM": "",
  "2 PM": "",
  "3 PM": "",
  "4 PM": "",
  "5 PM": "",
};

// prevent html to load before JS
$(document).ready(function(){
  // if no dayhrs object in localstorage
  if(!localStorage.getItem('dayhrs')) {    
    //update text area for each hr
    updateTasks(dayhrs);
  } else {
    //get text area items from local storage
    updateTasks(JSON.parse(localStorage.getItem('dayhrs')));
  }
})

// update current date and time in heading
$("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


let counter = 1;
for(const hrs in dayhrs) { 
  // for each hr in the dayhrs object 
  let textblock = "#text-entry" + counter;  
  $(textblock).text(dayhrs[hrs]);
  let hrId = "#time" + counter;  
  let presentHour = moment().hour();  
  let hrString = $(hrId).text();  
  let hrNumber = hourNumber(hrString);

  // change the color of hr based on past, present or future
   
  if(hrNumber < presentHour) {
    $(textblock).addClass("past-hour");
  } else if (hrNumber > presentHour) {
    $(textblock).addClass("future-hour");
  } else {
    $(textblock).addClass("present-hour");
  }
  counter ++;
}

// on save button click, save hr value and corresponding text

$("button").click(function() {
  value = $(this).siblings("textarea").val();
  
  hourString = $(this).siblings("div").text();  
  
  saveSchedule(hourString, value);
});

function hourNumber(hourString) {
  switch(hourString) {
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
  }
}

// load correct dataset

function loadCorrectDataset() {
  result = localStorage.getItem('dayhrs')  
  return (result ? result : dayhrs);
}

// Initialize local storage

function initializeLocalStorage() {
  localStorage.setItem('dayhrs', JSON.stringify(dayhrs));
};

// save to local storage

function saveToLocalStorage(dayObj) {
  localStorage.setItem('dayhrs', JSON.stringify(dayObj));
}

// function to save to local storage

function saveSchedule(hourString, val) {
  if(!localStorage.getItem('dayhrs')) {
    initializeLocalStorage();
  }

  let workHours = JSON.parse(localStorage.getItem('dayhrs'));
  workHours[hourString] = val

  saveToLocalStorage(workHours);
}

// Function to update text area

function updateTasks(dayObject) {
  $(".calendar-row").each(function(index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  })
}
