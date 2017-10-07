/**
 * Created by Vin on 07/10/2017.
 * except fuck no it wasnt this is mostly codepen referenced stuff
 *
 *
 */

var ids = 0;
var lastClicked = [];

function getPoints(object) {

    var arr = [];
    var boolean = true;
    console.log(object);

    db = firebase.database().ref(userSoftSkillPath);
    for (var i = 0; i < 10; i++) {
        const field = db.child(userSoftSkillKeys[i]);
        field.once("value", function (snapshot) {
            var value = parseInt(snapshot.val());
            if (isNaN(value)) {
                value = 0;
            }
            arr.push(value);

        }, function (error) {
        }, this).then(function() {
            // compare stuffs
            if (i == 0) {
                if(value < object.Adaptability) {
                    boolean = false;
                }
            }
            if (i == 1) {
                if(value < object.Communication) {
                    boolean = false;
                }
            }
            if (i == 2) {
                if(value < object.Creativity) {
                    boolean = false;
                }
            }
            if (i == 3) {
                if(value < object.CriticalThinking) {
                    boolean = false;
                }
            }
            if (i == 4) {
                if(value < object.DecisionMaking) {
                    boolean = false;
                }
            }
            if (i == 5) {
                if(value < object.MeetingPeople) {
                    boolean = false;
                }
            }
            if (i == 6) {
                if(value < object.Presenting) {
                    boolean = false;
                }
            }
            if (i == 7) {
                if(value < object.QuickLearner) {
                    boolean = false;
                }
            }
            if (i == 8) {
                if(value < object.StressManagement) {
                    boolean = false;
                }
            }
            if (i == 9) {
                if(value < object.Teamwork) {
                    boolean = false;
                }
            }

        });
    }
    alert(boolean);

    //compare(object, window.activeUser);

}
function compare(object,company, user) {
    var match = true;
    if (user[0] < company.communication) {
        return false;
    }
    if (user[1] < company.meetPeople) {
        return false;
    }
    if (user[2] < company.presenting) {
        return false;
    }
    if (user[3] < company.teamwork) {
        return false;
    }
    if (user[4] < company.quickLearner) {
        return false;
    }
    if (user[5] < company.stressManagement) {
        return false;
    }
    if (user[6] < company.adaptability) {
        return false;
    }
    if (user[7] < company.criticalThinking) {
        return false;
    }
    if (user[8] < company.creativity) {
        return false;
    }
    if (user[9] < company.decisionMaking) {
        return false;
    }
    return match;

}

/* Start of test matching algorithim */


// 40 points to deliver
var Company1 = {
    communication: 3,
    meetPeople: 3,
    presenting: 2,
    teamwork: 3,
    quickLearner: 3,
    stressManagement: 3,
    adaptability: 3,
    criticalThinking: 2,
    creativity: 3,
    decisionMaking: 3,
};

var User1 = {
    'Communication': 3,
    'Meeting New People': 3,
    'Presenting': 3,
    'Teamwork': 3,
    'Quick Learner': 3,
    'Stress Management': 3,
    'Adaptability': 3,
    'Critical thinking': 3,
    'Creativity': 3,
    'Decision Making': 3,

}

/* end of test */

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
