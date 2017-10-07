var slist = [
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

var hlist = [
    'Coding',
    'Architecture',
    'Mathematics',
    'Writing',
    'Graphic Design',
    'Databases',
    'Web Design',
    'Accounting',
    'Hardware',
    'Legal'
];

function listQuestions(type) {
    let list = (type == 'soft' ? slist : hlist);

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

        document.getElementById((type == 'soft' ? 'ans' : 'hans')+n).appendChild(ans);
    }

    f.appendChild(ul);
    document.getElementById((type == 'soft' ? 'softskillsform' : 'hardskillsform')).appendChild(f);
}

var sanswers = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
}

var hanswers = {
    "0": 0,
    "1": 0,
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

        $('div#softskills * li.point'+$num).click(function(){
    		$('div#softskills * li.point'+$num).removeClass('enabled'); //Class will be removed on all elements.
    		$(this).toggleClass('enabled'); //Class will be toggled
    		$('div#softskills * li.point'+$num+'.enabled').prevAll('.point'+$num).toggleClass('enabled'); //Toggle class on previous child elements
            sanswers[$num] = $(this).attr("id").slice(-1);

            // Firebase related things/ updating the current users database:
            var db = firebase.database().ref(userSoftSkillPath);
            db.child(userSoftSkillKeys[$num]).set($(this).attr("id").slice(-1), function(){});
    	});

        $('div#hardskills * li.point'+$num).click(function(){
            $('div#hardskills * li.point'+$num).removeClass('enabled'); //Class will be removed on all elements.
            $(this).toggleClass('enabled'); //Class will be toggled
            $('div#hardskills * li.point'+$num+'.enabled').prevAll('.point'+$num).toggleClass('enabled'); //Toggle class on previous child elements
            hanswers[$num] = $(this).attr("id").slice(-1);

            // Firebase related things/ updating the current users database:
            var db = firebase.database().ref(userHardSkillPath);
            db.child(userHardSkillKeys[$num]).set($(this).attr("id").slice(-1), function(){});
        });
    }

    for (var loop = 0; loop < 10; loop++) {
        func(loop.toString());
    }
});
