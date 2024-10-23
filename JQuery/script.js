$( document ).ready(function() {
    $("#redElement").click(function(){
    $(this).css('color', 'red');
    });
    
    $("#blueElement").click(function(){
      $(this).css('color', 'blue');
    });
    
    $("#greenElement").click(function(){
      $(this).css('color', 'green');
    });
    
    //disappears elements; does first
    $("p").on("click", function(){
      $(this).hide();
    });

    //does same as above



    //applies to all paragraph tags
    $("p").on({
        //adds grey highlight
        mouseenter: function(){
        $(this).css("background-color", "lightgray");
        },
        //turns light blue when mouse leaves
        mouseleave: function(){
        $(this).css("background-color", "lightblue");
        },
        //turns yellow on click
        click: function(){
        $(this).css("background-color", "yellow");
        }
    });
//doesnt work
    // $("button").click(function(){
    //     $("p").hide("slow", function(){ alert("The paragraph is now hidden");
    //     });
    // });

    $(document).ready(function(){
        $("p").on("click",function(){
            $("p").show();
        })
    })

    $(document).ready(function(){

    $("#btn1").click(function(){
    $("#test1").text("this is a new paragraph");
            })
    $("#btn2").click(function(){
    $("#test2").html("this is a new <span class='bd'>bold</span> paragraph. ");
            })
            //changes class name and attribute
    $("#btn3").click(function(){
    $("#span1").attr("class", "h2");
            }) 
    })
    $("#btn4").click(function(){ alert("Text: " + $("#test1").text());
    })
    $("#btn5").click(function(){ alert("Text: " + $("#test1").html());
    })
    $("#btn6").click(function(){
    alert($("#span1").attr("class"));
    })
    $("#btn7").click(function(){
        $("p").text(function(i, orig){
        $(this).text(orig + ", index: " + i);
        })
        })
        
        



        
});