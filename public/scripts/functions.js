var list = [
    'How cool is Jonathan?',
    'How good is he at coming up with questions?',
    'How much variation is there in these questions?',
    'This is not even a question, what?',
    'Oh wait, it was.. Well, my bad I guess',
    'This is all totally useful, I promise! (not)',
    'Keep filling in sentences until I reach a good number',
    'If youre tired of javascript, try another language',
    'Bla bla lorem ipsum batman robin',
    'Monkey banana blues machine',
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
            if (m === 0) {
                li2.setAttribute("class", "enabled point"+n);
            } else {
                li2.setAttribute("class", "point"+n);
            }

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
    "1": 0,
    "0": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
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


});
