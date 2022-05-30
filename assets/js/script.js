// Fill the "currentDay" p tag with the local time zone's date.
const date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

$("#currentDay").text(new Date().toLocaleDateString("us-EN", options));

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
    
    let key = $(this).siblings(".description").attr("id");
    let value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);

    $(".description").each(function (displayEvent) {
        localStorage.getItem(value);
        $(".description").appendChild(value);

        console.log(displayEvent);
    });

    // let descVal = localStorage.getItem($(".description").val);

    // for (let i = 0; i < $(".description").val; i++) {
    //     document.getElementById($("#hour" + i)) = $(".description").val;
        
    // }
    // document.getElementById

    // localStorage.getItem(value) = $(".description").text();

    // localStorage.content = $(".description").text();

    // if ($(".description").text !== '') {
    //     $(".description").text(localStorage.content);
    // }
    // if (keyName === $("#hour" + i)) {
    //     localStorage.getItem(keyName, textValue);
    //     $(".description").appendChild();
    // }
    console.log(storeEvent);
});


