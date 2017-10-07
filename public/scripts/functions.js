var list = [
    'Communication',
    'Meeting New People',
    'Presenting',
    'Teamwork',
    'Quick Learner',
    'Stress Management',
    'Adaptability',
    'Critical thinking',
    'Creativity',
    'Decision Making',

];

function listQuestions() {


    let f = document.createElement("form");
    f.setAttribute("action", "someFunction()");


    let ul = document.createElement("list");


    for (let n = 0; n < list.length; n++) {
        // one answer for each question
        let ans = document.createElement("list");
        ans.setAttribute("class", "rating");

        // create li for the question
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(list[n]));
        ul.appendChild(li);
        // add li for the "stars"
        for (let m = 0; m < 6; m++) {
            let li2 = document.createElement("li");
            li2.innerHTML = m;
            li2.setAttribute("class", "point"+n);
            li2.setAttribute("id", n+"-"+m);
            ans.appendChild(li2);

        }


        document.getElementById('ans'+n).appendChild(ans);

    }

    f.appendChild(ul);


    document.getElementById('softskillsform').appendChild(f);



}

function getPoints() {
    // expand to put values where they should go!
    alert(answers["0"] + " " + answers["1"] + " " + answers["2"]);

}

ids = [];

var answers = {
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
}

// value of answer is str.slice(-1)

$(document).ready(function(){

    var func = function($num) {
        $('li.point'+$num).click(function(){
    		$('li.point'+$num).removeClass('enabled'); //Class will be removed on all elements.
    		$(this).toggleClass('enabled'); //Class will be toggled
    		$('li.point'+$num+'.enabled').prevAll('.point'+$num).toggleClass('enabled'); //Toggle class on previous child elements
            answers[$num] = $(this).attr("id").slice(-1);
    	});
    }


    for (var loop = 0; loop < 10; loop++) {
        func(loop.toString());
    }

	//Toggle class on click



    // $('li.point1').click(function(){
    //     $('li.point1').removeClass('enabled'); //Class will be removed on all elements.
    //     $(this).toggleClass('enabled'); //Class will be toggled
    //     $('li.point1.enabled').prevAll('.point1').toggleClass('enabled'); //Toggle class on previous child elements
    //     answers["1"] = $(this).attr("id").slice(-1);
    // });

    // $('li.point2').click(function(){
	// 	$('li.point2').removeClass('enabled'); //Class will be removed on all elements.
	// 	$(this).toggleClass('enabled'); //Class will be toggled
	// 	$('li.point2.enabled').prevAll('.point2').toggleClass('enabled'); //Toggle class on previous child elements
    //     answers["2"] = $(this).attr("id").slice(-1);
	// });
    // $('li.point3').click(function(){
    //     $('li.point3').removeClass('enabled'); //Class will be removed on all elements.
    //     $(this).toggleClass('enabled'); //Class will be toggled
    //     $('li.point3.enabled').prevAll('.point3').toggleClass('enabled'); //Toggle class on previous child elements
    //     answers["3"] = $(this).attr("id").slice(-1);
    // });
    // $('li.point4').click(function(){
    //     $('li.point4').removeClass('enabled'); //Class will be removed on all elements.
    //     $(this).toggleClass('enabled'); //Class will be toggled
    //     $('li.point4.enabled').prevAll('.point4').toggleClass('enabled'); //Toggle class on previous child elements
    //     answers["4"] = $(this).attr("id").slice(-1);
    // });

});
