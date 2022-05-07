
// Define array
workingHoursArray =[
    {label: “9am”, key: 9},
    {label: “10am”, key: 10},
    {label: “11am”, key: 11},
    {label: “12pm”, key: 12},
    {label: “1pm”, key: 13},
    {label: “2pm”, key: 14},
    {label: “3pm”, key: 15},
    {label: “4pm”, key: 16},
    {label: “5pm”, key: 17}
]
const renderTimeblock = () => {
  var containerDiv = $("#time - block - container");
  var timerblockLabelDiv = $("<div>");

  timerblockLabelDiv.attr("class", "timeblock");

  var timerblockLabel = $("<label>");

  timerblockLabel.attr("class", "timerblockLabel");

  timerblockLabelDiv.append(timerblockLabel);
  containerDiv.append(timerblockLabelDiv);
  console.log("hi");
};

$(window).on("load", renderTimeblock);
