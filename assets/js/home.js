$(document).ready(function(){
    //state global variable saying if the divs are shown or hidden
    var state = "hidden";
    $("#info").hide();

    $("#showHomeDivs").click(function(){

        if(state === "hidden"){
            $("#info").show("slow");

            state = "shown"
        } else {
            $("#info").hide("slow");

            state = "hidden"
        }

    });
});

