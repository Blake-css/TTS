// //Get reference to the list element
// var list = $('#userList');

// //Make a GET request for the items to render
// // $("#button1")
// // $.get('http://jsonplaceholder.typicode.com/users', function(user){
// // 	//Iterate over the response, adding elements to DOM
// // 	users.forEach(function(user){
// // 		var li = $('<li>');
// // 		li.text(user.name);
// //         list.append(li);
// //         console.log(li)
// // 	})
// })
//console.log("connected")
$(document).on("click", "#button1", () => {
    
    $.ajax({
    url: `http://jsonplaceholder.typicode.com/users`,
         method: "GET",
         }).then((put) => {
             for(var i=0; i<put.length; i++){
                 console.log(put[i])
             }             
             });

             }        })
             $(document).on("click", "#button2", () => {
    
                $.ajax({
                url: `http://jsonplaceholder.typicode.com/posts`,
                     method: "GET",
                     ){
                        post.forEach(post => {
                            var dump99 = document.querySelector('.dump99');
                            var header1 = document.createElement('h4');
                            var post = document.createTextNode(post.title);
                            dump99.appendChild(header1);
                            header.appendChild(post1);    
                     
})
// #2
$(document).on("click", "#button2", () => {
    $.ajax({
    url: `http://jsonplaceholder.typicode.com/posts/10`,
    method: "GET",
    }).then((posts) => {
            // console.log(posts);
            $(".dump99").empty();
            var dump99 = document.querySelector('.dump99');
            var header1 = document.createElement('h1');
            var post10_title = document.createTextNode(post.title);
            var post10_body  = document.createTextNode(post.body);
            dump99.appendChild(header1);
            header.appendChild(post10_body);    
            dump99.appendChild(post10_body);
    })    
// get comments from post with id of 12

$("#button3").on('click', () => {

$.ajax({
        url: "http://jsonplaceholder.typicode.com/comments?postId=12",
        Method: "GET",
}).then(response => {
    console.log(response)
})
$(".dump99").empty();

//.4

$("#button4").on('click', () => {

    $.ajax({
            url: "http://jsonplaceholder.typicode.com/post?Id=2",
            Method: "GET",
    }).then(response => {
        console.log(response)
    })
    $(".dump99").empty();

    //.5 POST

    $("button5").on('click', () => {

        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/post',
            method: "POST",
            data: {userId:12, title:"Da Greatest", body: "Kyle is"}
        }).then(reponse => {
            console.log(reponse.id);
        })
    }))

    //.6

    $("button6").on('click', () => {

        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/post/12',
            method: "PUT",
            data: {userId:12, title:"Blake", body: " is the greatest"}
        }).then(reponse => {
            console.log(reponse);
        })

        //.7

        $("button7").on('click', () => {

            $.ajax({
                url: 'http://jsonplaceholder.typicode.com/post/12',
                method: "PUT",
                data: {title:"Blake",}
            }).then(reponse => {
                console.log(reponse);
            })
         
         
//.8

$("button8").on('click', () => {

    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/post/12',
        method: "DELETE",
    }).then(reponse => {
        console.log(reponse,"success");
    })
    
//10.
$(doucuments).on('click', '#button9', () => {

    $.ajax({
        url:'http://jsonplaceholder.typicode.com/post/',
        method: 'GET',
    }).then(response => {
        forEach(var i=0; i < response.length; i++){

        }
        var infoLink = ('<button type='button' class='link' data-link="http://jsonplaceholder.typicode.com/postId='  + response[i].id +'/comments">Click here></>')
        var div= $("<div>");
        var header= $("<h2>").text(response[i].title);
        var p= $("<p>").text(respons
            e[i].body);
        $(div).append(header,p,infoLink);
        $(".dump99").append(div);
    })
}
