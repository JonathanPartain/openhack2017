/**
 * Created by Vin on 07/10/2017.
 * except fuck no it wasnt this is mostly codepen referenced stuff
 *
 *
 */

var ids = 0;
// var lastClicked=[0,0,0,0,0,0,0,0,0,0];


var iterate = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

$(document).ready(function(){

    var func = function($number) {
        $('li.point.'+$number).click(function() {
            if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
                document.getElementById('alert-row').innerHTML="";

                //update id points
                ids = ids - lastClicked[parseInt(parseInt(this.id) / 10)];
                lastClicked[parseInt(parseInt(this.id) / 10)] = parseInt(this.id) % 10;
                ids = ids + (parseInt(this.id) % 10);
                $('li.point.'+$number).removeClass('enabled'); //Class will be removed on all elements.
                $(this).toggleClass('enabled'); //Class will be toggled

                $('li.point.'+$number+'.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

                document.getElementById('points').innerHTML = (30 - ids);
                myChart.update();

            } else {
                document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
            }



        });
    };

    for(var i = 0; i < iterate.length; i++) {
        func(iterate[i]);
    }

});
