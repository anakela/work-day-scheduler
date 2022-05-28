// Fill the "currentDay" p tag with the local time zone's date.
$("#currentDay").text(new Date().toLocaleDateString());

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

// When the save button is clicked, store the data in localstorage.
$(".saveBtn").on("click", function (storeEvent) {
    console.log(storeEvent);
    let keyName = $(this).siblings(".description").attr("id");
    let textValue = $(this).siblings(".description").val();
    localStorage.setItem(keyName, textValue);

    // localStorage.content = $(".description").text();

    // if ($(".description").text !== '') {
    //     $(".description").text(localStorage.content);
    // }
    if (keyName === $("#hour" + i)) {
        localStorage.getItem(keyName, textValue);
        $(".description").appendChild();
    }

});


