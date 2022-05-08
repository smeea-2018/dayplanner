// Define global object
const workingHoursArray = [
  { timeLabel: "9am", key: 9 },
  { timeLabel: "10am", key: 10 },
  { timeLabel: "11am", key: 11 },
  { timeLabel: "12pm", key: 12 },
  { timeLabel: "1pm", key: 13 },
  { timeLabel: "2pm", key: 14 },
  { timeLabel: "3pm", key: 15 },
  { timeLabel: "4pm", key: 16 },
  { timeLabel: "5pm", key: 17 },
];

const getFromLocalStorage = () => {
  //get value from local storage
  JSON.parse(localStorage.getItem("schedule"));
};

const storeInLS = (schedule) => {
  //if no value exists in local storage
  if (!toDoList) {
    //set to do list as null
    localStorage.setItem("toDoList", JSON.stringify([]));
  } else {
    //get value from ls
    getFromLocalStorage();

    //append schedule value to array
    //
    //write in ls
    localStorage.setItem("toDoList", JSON.stringify(schedule));
  }
};

const renderTimeblock = (workingHoursArray) => {
  //get current hour
  const currentTime = moment().hour();
  console.log(currentTime);

  //target container div
  const containerDiv = $("row-p2");

  const timeBlock = `<div class="row p-2 my-2 ${getClassName(
    workingHoursArray.key
  )}">
  <div class ="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center>${
    workingHoursArray.timeLabel
  }"></div>
      <input type="text"
          class="col-md-9 col-sm-12 border border-dark" data-value=${
            workingHoursArray.key
          } 
         
        > ${getEventForTimeBlock(workingHoursArray.key)}</input>
        <div
          class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center"
        >
          <button type="button" data-hour=${
            workingDay.key
          }class="btn btn-success">Save</button>
        </div>`;

  //append to parentdiv
  containerDiv.append(timeBlock);
};
workingHoursArray.forEach(renderTimeblock);

const schedule = {
  timeLabel,
  textValue,
};

//compare data-value with current hour
/*if (timerblockLabel.data - value < currentTime) {
    console.log("past");
  }*/

// if(){}

// $function(){
//   $("#time-block-button-9"). click(function()
//   //get value from text area
//   var textareaValue = $("time-block-text-9").value();
//   localStorage.setItem("toDoList",textareaValue);
//   )
// };

containerDiv.click("storeInLS");
// };

const displayDate = (dateToday) => {
  $("#currentDay").empty().append(dateToday);
};

const getDate = () => {
  //get date from moment
  const dateToday = moment().format("MMM Do YY");
  //function called to display date
  displayDate(dateToday);
  console.log(dateToday);
};

const renderDayPlanner = () => {
  // function to get date is called
  getDate();

  //function to render timeblocks is called
  renderTimeblock();
};

$(window).on("load", renderDayPlanner);
