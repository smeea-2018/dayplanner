const timeBlocks = $("#time-blocks");
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

//Store Value in LS
const getFromLocalStorage = (schedule, defaultValue) => {
  //get value from local storage
  const valueFromLs = JSON.parse(localStorage.getItem(schedule));
  console.log(valueFromLs);
  if (valueFromLs) {
    return valueFromLs;
  } else {
    return defaultValue;
  }
};

const storeInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const saveToLS = (event) => {
  const target = $(event.target);
  if (target.is("button")) {
    console.log("click");
    const key = target.attr("data-hour");
    console.log(key);
    // get object want to save
    const value = $(`textarea[data-value=${key}]`).val(); /*.trim()*/
    console.log(value);

    const schedule = getFromLocalStorage("toDoList", {});

    schedule[key] = value;
    console.log(schedule[key]);
    storeInLocalStorage("toDoList", schedule);
  }
};
const getClassName = (workingHoursArray) => {
  const currentTime = moment().hour();
  if (workingHoursArray < currentTime) {
    return "past";
  }
  if (workingHoursArray == currentTime) {
    return "present";
  }

  if (workingHoursArray > currentTime) {
    return "future";
  }
};
const getEventForTimeBlock = (workingHoursArray) => {
  const schedule = getFromLocalStorage("toDoList", {});

  return schedule[workingHoursArray] || "";
};

const renderTimeBlocks = () => {
  const renderTimeblock = (workingHoursArray) => {
    //create time blocks

    const timeBlock = `<div class="row p-2 my-2 ${getClassName(
      workingHoursArray.key
    )}">
  <div class ="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${
    workingHoursArray.timeLabel
  }></div>
      <textarea  id ="text-value"
          class="col-md-9 col-sm-12 border border-dark" data-value=${
            workingHoursArray.key
          } 
         
        > ${getEventForTimeBlock(workingHoursArray.key)}</textarea>
        <div
          class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center"
        >
          <button type="button" data-hour=${
            workingHoursArray.key
          } class="btn btn-success">Save</button>
        </div>`;

    //append to parentdiv

    timeBlocks.append(timeBlock);
  };
  //loop through the array to create time blocks
  workingHoursArray.forEach(renderTimeblock);
};

const displayDate = (dateToday) => {
  $("#currentDay").empty().append(dateToday);
};

const getDate = () => {
  //get date from moment
  const dateToday = moment().format("dddd MMMM Do YYYY");
  //function called to display date
  displayDate(dateToday);
};

const renderDayPlanner = () => {
  // function to get date is called

  getDate();

  //function to render timeblocks is called
  renderTimeBlocks();
};

timeBlocks.click(saveToLS);

$(window).on("load", renderDayPlanner);
