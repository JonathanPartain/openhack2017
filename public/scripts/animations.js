/**
 * Created by Vin on 07/10/2017.
 * except fuck no it wasnt this is mostly codepen referenced stuff
 *
 *
 */

var ids = 0;
var lastClicked = [];

var iterate = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

$(document).ready(function(){

    var func = function($number) {
        $('li.point.'+$number).click(function() {
            while (lastClicked.length < 10) lastClicked.push(0);
            if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-window.lastClicked[parseInt(parseInt(this.id)/10)]) {
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

                // Firebase related things/ updating the current users database:
                var db = firebase.database().ref(userEnvironmentPath);
                db.child(userEnvironmentKeys[parseInt(parseInt(this.id) / 10)]).set(parseInt(this.id) % 10, function(){});

            } else {
                document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
            }



        });
    };

    for(var i = 0; i < iterate.length; i++) {
        func(iterate[i]);
    }

});

var nr= 0;
var photos = ["https://i.imgur.com/syweC01.png",
              "https://i.imgur.com/Ed7xq7I.png",
              "https://i.imgur.com/lKixWPA.png",
              "https://i.imgur.com/0U4WY3W.png",
              "https://i.imgur.com/2wY000O.png",
              "https://i.imgur.com/8lvDvPE.png"];



