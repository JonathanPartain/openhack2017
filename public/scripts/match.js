/**
 * Created by julian.bock on 2017-10-08.
 */

function fetchUserDetails() {
    const root = firebase.database().ref(userPath);

    root.once("value", function() {}, function (){}, this).
    then(function (value) {
        var obj = value.val();
        window.activeUser.Name =        obj.Name;
        window.activeUser.Description = obj.Description;
        window.activeUser.isCompany =   obj.isCompany;
        window.activeUser.Environment = obj.Environment;
        window.activeUser.SoftSkills =  obj.SoftSkills;
        window.activeUser.TechSkills =  obj.TechSkills;
    });
}

function fetchVacantPositions() {
    const root = firebase.database().ref('position/');
    root.once("value", function() {}, function (){}, this).
    then(function (value) {
            var pos_tree = value.val();

            Object.keys(pos_tree).forEach(function (companyId) {
                Object.keys(pos_tree[companyId]).forEach(function (posId) {

                    var single_pos = new Map();
                    single_pos.set("cid", companyId);
                    single_pos.set("pos", posId);
                    single_pos.set("title", pos_tree[companyId][posId]['Title']);
                    single_pos.set("soft", pos_tree[companyId][posId]['SoftSkills']);
                    single_pos.set("tech", pos_tree[companyId][posId]['TechSkills']);
                    score(single_pos);
                })
            });
    });
}

function compare(keyset, myvalues, theirvalues) {
    if (myvalues == undefined || theirvalues == undefined) return 0;
    var sum = 0;
    for (var i = 0; i < keyset.length; i++) {
        var a = parseInt(myvalues[keyset[i]]);
        var b = parseInt(theirvalues[keyset[i]]);
        if (!isNaN(a) && !isNaN(b) && a <= b) {
            sum += a;
        }
    } return sum;
}

function score(currentObject) {
    const root = firebase.database().ref("users/"+currentObject.get("cid")+"/");
    root.once("value", function(){}, function (){}, this).
    then(function (value) {
        var currentScore = 0;

        currentObject.set("env", value.val()['Environment']);
        currentScore += compare(userEnvironmentKeys, window.activeUser.Environment, currentObject.get("env"));
        currentScore += compare(userSoftSkillKeys, window.activeUser.SoftSkills, currentObject.get("soft"));
        currentScore += compare(userTechSkillKeys, window.activeUser.TechSkills, currentObject.get("tech"));

        var currentMax = 0;
        for (var i = 0; i < 10; i++) {
            var a = parseInt(window.activeUser.Environment[userEnvironmentKeys[i]]);
            var b = parseInt(window.activeUser.SoftSkills[userSoftSkillKeys[i]]);
            var c = parseInt(window.activeUser.TechSkills[userTechSkillKeys[i]]);
            if (!isNaN(a)) currentMax += a;
            if (!isNaN(b)) currentMax += b;
            if (!isNaN(c)) currentMax += c;
        }
        var currentPercentage = currentScore / (currentMax / 100);

        window.document.getElementById("matches").innerHTML +=
            "<div style='width: 800px; margin: auto 0 0 auto;'>" +
            "<p>'"+currentObject.get("title")+"' at '"+value.val()['Name']+"' matches your profile with approx. "+currentPercentage.toFixed(2)+"% !</p>" +
            "</div>";
    });
}