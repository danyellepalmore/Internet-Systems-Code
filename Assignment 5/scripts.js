/*
    Danyelle Palmore
    COMP 322
    10/31/2024
    This is the Javascript portion of my program uses jquery to simplify javascript 
    commands and use event handling and mouse functions to apply to program.
*/
$( document ).ready(function() {
    $("img").on({
        //changes opacity and shows icon name
        mouseenter: function(){
            $(this).css("opacity", "0.5");
            var iconName = $(this).data("name");
            $("#iconNameIn").text("In: " + iconName);
        },
        //changes opacity and shows icon name when mouse leaves
        mouseleave: function(){
            $(this).css("opacity", "1.0");
            var iconName = $(this).data("name");
            $("#iconNameOut").text("Out: " + iconName);
        },
        //click once to enlarge icon then again to untoggle enlarge class
        click: function(){
            $(this).toggleClass("enlarged");
            //$(this).css("transform", "scale(1.5)");
        }
    });
    //double click to open new tab and go to website
    $("#iconSpan img").dblclick(function() {
        // get the url from the data-url attribute
        var url = $(this).data("url");
        if (url){
        // open a new tab and redirect to url
        var newTab = window.open(url, "_blank");
        //means i am missing link
        } else{ alert("URL not defined")}
    });
    //get mouse coordinates on span
    $("#iconSpan").mousemove(function(event) {
        $("#iconMouseMove").text('Mouse X: '+ event.pageX +", Y: "+ event.pageY);
    });
});