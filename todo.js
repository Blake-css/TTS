// // function ajaxCall() {
// //     var ajaxRequest = new XMLHttpRequest();

// //     ajaxRequest.onreadystatechange = function() {
// //         if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
// //            if (ajaxRequest.status == 200) {
// //                var myDiv = document.querySelector('.main');
// //                var newDiv = document.createElement('div');
// //                newDiv.innerHTML = ajaxRequest.responseText;
// //                myDiv.appendChild(newDiv);
// //            }
// //            else if (ajaxRequest.status == 400) {
// //               console.log('There was an error 400');
// //            }
// //            else {
// //               console.log('something else other than 200 was returned');
// //            }
// //         }
// //     };

// //     ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
// //     ajaxRequest.send();
// // }

// // (function(document){
// //   var myBtn = document.getElementById('myButton');
// //   myBtn.addEventListener('click', ajaxCall);
// // })(document);

// Log in
// XHR
 

// JavaScript has built in support for creating HTTP requests using the XML HTTP Request object (XHR) also known as AJAX.

// Requests are just like those your browser makes when navigating
// URL - location of the resource
// Header - Metadata about the request (e.g. type, expected response, cookies...)
// Body- Payload (e.g. post data)
// Response is text. API responses are usually JSON.
// Imagine navigating to a webpage, but instead of getting HTML, you get JSON text.
// Native API is low level, so libraries like jQuery are used.
// ​

// Using raw XHR is pretty verbose, however, let's take a look:

// function ajaxCall() {
//     var ajaxRequest = new XMLHttpRequest();

//     ajaxRequest.onreadystatechange = function() {
//         if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//            if (ajaxRequest.status == 200) {
//                var myDiv = document.querySelector('.main');
//                var newDiv = document.createElement('div');
//                newDiv.innerHTML = ajaxRequest.responseText;
//                myDiv.appendChild(newDiv);
//            }
//            else if (ajaxRequest.status == 400) {
//               console.log('There was an error 400');
//            }
//            else {
//               console.log('something else other than 200 was returned');
//            }
//         }
//     };

//     ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
//     ajaxRequest.send();
// }

// (function(document){
//   var myBtn = document.getElementById('myButton');
//   myBtn.addEventListener('click', ajaxCall);
// })(document);
// Corresponding HTML:

// <body>
//   <h2>A Simple ToDo Application</h2>
//    <div class="main">
//      <ul>
//        <li><button type="button" id="myButton">Sync</button>
//            <button type="button" id="deleteList">Clear List</button>
//        </li>
//      </ul>

//      <ul class="listOne"></ul>
//   </div>
//   <script src="main.js" charset="utf-8"></script>
//   </body>
// jQuery AJAX
// By comparison, jQuery's AJAX methods are very simple. Let's look at an example 'GET' request.

// $.get('http://jsonplaceholder.typicode.com/todos', function(todos){
// 	console.log(todos);
// });
// Notice the familiar callback pattern.

// REST API Principles
// REST is a pattern for organizing API's, with a few simple rules

// Uses HTTP request types as VERBS
// Uses URL's to represent unique resources (NOUNS)
 

// Corresponding HTML: <body> <h2>A Simple ToDo Application</h2> <div class="main"> <ul> <li><button type="button" id="myButton">Sync</button> <button type="button" id="deleteList">Clear List</button> </li> </ul> <ul class="listOne"></ul> </div> <script src="main.js" charset="utf-8"></script> </body>

// Private
// AJAX, REST, & Promises
// Today we'll get into some of the more advanced topics related to front-end web development and Asynch.

//  2 years ago
// Tech Talent South
// Tech Talent South is a coding bootcamp for Adults who want to learn how to develop web applications.

// http://techtalentsouth.com techtalentsouth
// More from Tech Talent South
// Let's Learn JavaScript
//  Tech Talent South 671  
// iot intensive
//  Tech Talent South 322  
// Copy of Demo: HTML
//  Tech Talent South 416  
// Demo: HTML
//  Tech Talent South 355
// Help & Support • Terms • Privacy • © 2019 Slides, Inc.

// $(document).on("click", "#button", () => {
//     $.ajax({
//         url: "https://ghibliapi.herokuapp.com/films",
//         method: "GET",
//         }).then((response) => {
//             console.log(response)
//         })
// })


document.getElementById("kyle1").addEventListener("click", () => {
    $.get("https://ghibliapi.herokuapp.com/films", (movies  => {
        console.log(movies);
    })).then((rest)=>{
        console.log()
    })
})