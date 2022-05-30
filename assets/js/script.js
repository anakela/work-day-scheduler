// Fill the "currentDay" p tag with the local time zone's date with a running clock.
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do, YYYY, h:mm a'));
}, 1000);


// Set a for loop to review each textarea with class "description" and change colors accordingly.
$(".description").each(function () {
    const today = new Date();
    const todaysHours = today.getHours();
    console.log(todaysHours);

    for (let i = 8; i <= 17; i++) {
        // const element = array[i];
        if (i < todaysHours) {
            $("#hour" + i).addClass("past");
        } else if (i === todaysHours) {
            $("#hour" + i).addClass("present");
        } else {
            $("#hour" + i).addClass("future");
        }
    }
});

// Display scheduled events on page load.
displayEvent();

// When the save button is clicked, store the data in localstorage.
$(".saveBtn").on("click", function () {

    // Set the key and value for input.
    let keyName = $(this).siblings(".description").attr("id");
    console.log(keyName);
    let valueName = $(this).siblings(".description").val();

    // Call the storeEvent function with fresh user input.
    storeEvent(keyName, valueName);
});

// Store events in local storage.
function storeEvent(keyName, valueName) {
    let eventDesc = JSON.parse(localStorage.getItem("eventDesc"));

    if (eventDesc === null) {
        eventDesc = {};
    }

    eventDesc[keyName] = valueName;
    localStorage.setItem("eventDesc", JSON.stringify(eventDesc));
    displayEvent();
};

// Display events on the work day scheduler.
function displayEvent() {
    let eventDesc = JSON.parse(localStorage.getItem("eventDesc"));

    if (eventDesc === null) {
        return;
    }

    let textArea = $(".description");

    for (let i = 0; i < textArea.length; i++) {
        let hour = $(textArea[i]).attr("id");

        if (eventDesc[hour]) {
            $(textArea[i]).val(eventDesc[hour]);
        };
    };
};