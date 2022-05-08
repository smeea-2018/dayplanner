// Define object
workingHoursArray = [
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

const storeInLS = () => {};

const renderTimeblock = () => {
  var currentTime = moment().hour();
  console.log(currentTime);

  var containerDiv = $("#time - block - container");
  console.log(containerDiv);

  var texArea = $("textarea-timeblock");

  console.log(texArea.value);

  /*var timerblockLabelDiv = $("<div>");

  timerblockLabelDiv.attr("class", "timeblock");

  var timerblockLabel = $("<label>");

  timerblockLabel.attr("class", "timerblockLabel");
  timerblockLabel.attr("data-value", 9);

  timerblockLabelDiv.append(timerblockLabel);
  containerDiv.append(timerblockLabelDiv);*/

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
};

getFromLocalStorage = () => {};

const displayDate = (dateToday) => {
  $("#dateDiv").append($("<h2/>").text("h"));
};

const getDate = () => {
  const dateToday = moment().format("MMM Do YY");
  displayDate(dateToday);
  console.log(dateToday);
};

const renderDayPlanner = () => {
  getDate();
  renderTimeblock();
};

$(window).on("load", renderDayPlanner);
