// lead is equal to the p tag with the class "lead" in HTML.
let lead = document.querySelector("#currentDay");

// Fill the ""
lead.textContent = new Date().toLocaleDateString();

// Use for loop to go through the hour divs and compare to current local time to change the colors.
// for (let i = 0; i < ; i++) {
//     const element = array[i];
    
// }

$(".hour").each(function () {
    console.log($(this).text());
    // Compare this to local time.
    
    // Then change colors.
});