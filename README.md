# Homework 5: 

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

> Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

> The starter code uses the Moment.js (Links to an external site.) library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality since [Moment.js](https://courses.bootcampspot.com/courses/1693/assignments/26729?module_item_id=537732#:~:text=Create%20a%20simple,project%20status%20page.) is considered a "legacy" project. Learn more about some alternative solutions in the [Moment.js project status page](https://courses.bootcampspot.com/courses/1693/assignments/26729?module_item_id=537732#:~:text=Create%20a%20simple,project%20status%20page.).

> #### IMPORTANT
> Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

> Before you start, clone the [starter code](https://github.com/coding-boot-camp/super-disco).

### User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
``` 

### Screenshot

![](./assets/images/work-day-scheduler.png)
![](./assets/images/work-day-scheduler-2.png)

### Links

- Solution URL: [https://github.com/anakela/work-day-scheduler](https://github.com/anakela/work-day-scheduler)
- Live Site URL: [https://anakela.github.io/work-day-scheduler/](https://anakela.github.io/work-day-scheduler/)

## My Process

### Built With

- Semantic HTML5 Markup
- CSS
- JavaScript
- jQuery
- Moment.js
- Bootstrap
- Font Awesome

### What I Learned

During this assignment, I learned how to loop through the various `description` textareas in order to save content in them using the `saveBtn` button.

```
// When the save button is clicked, store the data in localstorage.
$(".saveBtn").on("click", function () {

    // Set the key and value for input.
    let keyName = $(this).siblings(".description").attr("id");
    console.log(keyName);
    let valueName = $(this).siblings(".description").val();

    // Call the storeEvent function with fresh user input.
    storeEvent(keyName, valueName);
});
```

I also get more experience storing items to `localStorage`, then pulling them from `localStorage` for display.

```
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
```


### Continued Development

I struggled in this particular exercise with pulling data that was stored in `localStorage` and displaying them on the page.  I'd like to do more of this in the future to solidify my understanding of this and similar processes.

### Useful Resources

- [Stack Overflow: Live Clock Moment.js](https://stackoverflow.com/questions/66648322/live-clock-moment-js)
- [Stack Overflow: Use Font Awesome Icon As Favicon](https://stackoverflow.com/questions/18156240/use-font-awesome-icon-as-favicon)
- [Stack Overflow: How can I use localstorage to display the values on my web page using JavaScript?](https://stackoverflow.com/questions/69108119/how-can-i-use-localstorage-to-display-the-values-on-my-web-page-using-javascript)
- [Stack Overflow: Setting and getting localStorage with jQuery](https://stackoverflow.com/questions/40791207/setting-and-getting-localstorage-with-jquery)
- [Stack Overflow: How to get the exact local time of client?](https://stackoverflow.com/questions/10659523/how-to-get-the-exact-local-time-of-client)
- [Stack Overflow: How to compare time in javascript?](https://stackoverflow.com/questions/19004950/how-to-compare-time-in-javascript)
- [Stack Overflow: How can I change an element's class with JavaScript?](https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript)
- [MDN Web Docs: Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
- [MDN Web Docs: Date.prototype.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [MDN Web Docs: Date.prototype.getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
- [MDN Web Docs: Date.prototype.toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [MDN Web Docs: Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [Font Awesome Icon Downloader](https://gauger.io/fonticon/)
- [jQuery: .text()](https://api.jquery.com/text/)
- [jQuery: Category: Selectors](https://api.jquery.com/category/selectors/)
- [jQuery: .each()](https://api.jquery.com/each/)
- [jQuery: .replaceWith()](https://api.jquery.com/replacewith/)
- [jQuery: .removeClass()](https://api.jquery.com/removeclass/)
- [jQuery: .on()](https://api.jquery.com/on/)
- [Font Awesome](https://fontawesome.com/)
- [Use toLocaleDateString to Format JavaScript Dates](https://medium.com/swlh/use-tolocaledatestring-to-format-javascript-dates-2959108ea020)
- [W3Schools: JavaScript Date Formats](https://www.w3schools.com/js/js_date_formats.asp)
- [W3Schools: Window localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [W3Schools: JavaScript Date getMinutes()](https://www.w3schools.com/jsref/jsref_getminutes.asp)
- [W3Schools: Javascript Date getHours()](https://www.w3schools.com/jsref/jsref_gethours.asp)
- [W3Schools: jQuery Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)
- [“local storage getitem and setitem jquery” Code Answer’s](https://www.codegrepper.com/code-examples/javascript/local+storage+getitem+and+setitem+jquery)
- [JavaScript Convert String to Number](https://stackabuse.com/javascript-convert-string-to-number/)
- [Tutorial Republic: jQuery Add and Remove CSS Classes](https://www.tutorialrepublic.com/jquery-tutorial/jquery-add-and-remove-css-classes.php)

## Author

- LinkedIn - [@anakela](https://www.linkedin.com/in/anakela/)
- GitHub - [@anakela](https://github.com/anakela)

## Acknowledgments

- Fellow Bootcampers:
  - Nifer Kilakila
  - Ivy Chang
  - Nolan Spence
  - Michael Barrett
  - Kevin Muehlbauer
- Bobbi Tarkany (Tutor)
- AskBCS Slack Channel
