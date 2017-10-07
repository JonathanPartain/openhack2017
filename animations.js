/**
 * Created by Vin on 07/10/2017.
 * except fuck no it wasnt this is mostly codepen referenced stuff
 *
 *
 */

var ids = 0;
var lastClicked=[0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
    //Toggle class on click
    $('li.point.zero').click(function(){

        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


            //update id points
            ids = ids - lastClicked[parseInt(parseInt(this.id) / 10)];
            lastClicked[parseInt(parseInt(this.id) / 10)] = parseInt(this.id) % 10;
            ids = ids + (parseInt(this.id) % 10);
            $('li.point.zero').removeClass('enabled'); //Class will be removed on all elements.
            $(this).toggleClass('enabled'); //Class will be toggled

            $('li.point.zero.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

            document.getElementById('points').innerHTML = (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });

    $('li.point.one').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.one').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.one.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.two').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.two').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.two.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.three').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.three').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.three.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.four').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.four').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.four.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.five').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.five').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.five.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.six').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.six').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.six.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.seven').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.seven').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.seven.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.eight').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.eight').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.eight.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements

        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });
    $('li.point.nine').click(function(){
        if(document.getElementById('points').innerHTML >= (parseInt(this.id)%10)-lastClicked[parseInt(parseInt(this.id)/10)]) {
            document.getElementById('alert-row').innerHTML="";


        //update id points
        ids = ids - lastClicked[parseInt(parseInt(this.id)/10)];
        lastClicked[parseInt(parseInt(this.id)/10)] = parseInt(this.id) % 10;
        ids = ids+(parseInt(this.id) % 10);
        $('li.point.nine').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled

        $('li.point.nine.enabled').prevAll('.point').toggleClass('enabled'); //Toggle class on previous child elements
        document.getElementById('points').innerHTML= (30 - ids);
        }
        else{
            document.getElementById('alert-row').innerHTML="<div class=\"alert alert-danger\" role=\"alert\"> <strong>Oh snap!</strong> Seems you're all out of points - try relocating some. </div>";
        }
    });

});