// Fill the "currentDay" p tag with the local time zone's date.
$("#currentDay").text(new Date().toLocaleDateString());

// Use for loop to go through the hour divs and compare to current local time to change the colors.
// for (let i = 0; i < ; i++) {
//     const element = array[i];
    
// }

$(".hour").each(function () {
    console.log($(this).text());
    // Compare this to local time.
    if ($(this).text === ) {
        // Change class to .present. 
        // $(this).removeClass(".hour");
        $(".description").addClass(".present");
    } else if ($(this).text === ) {
        // Change class to .past.
        $(".description").addClass(".past");
    } else {
        // Change class to .future.
        $(".description").addClass(".future");
    }
});