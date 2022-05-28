// Fill the "currentDay" p tag with the local time zone's date.
$("#currentDay").text(new Date().toLocaleDateString());

// Use for loop to go through the hour divs and compare to current local time to change the colors.
// for (let i = 0; i < ; i++) {
//     const element = array[i];

// }

$(".description").each(function () {
    const today = new Date();
    const todaysHours = today.getHours();

    for (let i = 8; i <= 17; i++) {
        // const element = array[i];
        if (i < todaysHours) {
            $("#hour" +i).addClass(".present");
        } else if (i > todaysHours) {
            $("#hour" + i).addClass(".future");
        } else {
            $("#hour").addClass(".past");
        }
    }
});

// $(".hour").each(function () {
//     console.log($(this).text());
//     console.log($("#currentDay").val);

//     const today = new Date();
//     const todaysHours = today.getHours();
//     const todaysMinutes = today.getMinutes();

//     console.log(todaysHours);
//     console.log(todaysMinutes);

//     console.log($(this).text.val);

//     // Compare this to local time.
//     if ($(this).text.val === todaysHours.val) {
//         // Change class to .present. 
//         $(".description").addClass(".present");
//     } // else if ($(this).text === ) {
//     //     // Change class to .past.
//     //     $(".description").addClass(".past");
//     // } else {
//     //     // Change class to .future.
//     //     $(".description").addClass(".future");
//     // }
// });

$(".saveBtn").on("click", function (storeEvent) {
    console.log(storeEvent);
    let keyName = $(this).siblings(".description").attr("id");
    let textValue = $(this).siblings(".description").val();
    localStorage.setItem(keyName, textValue);

    // localStorage.content = $(".description").text();

    // if ($(".description").text !== '') {
    //     $(".description").text(localStorage.content);
    // }
    localStorage.getItem();


});


