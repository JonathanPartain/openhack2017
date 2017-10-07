function listQuestions() {
    let list = [
        'How cool is Jonathan?',
        'How good is he at coming up with questions?',
        'How much variation is there in these questions?'
    ];

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
$(document).ready(function(){
	//Toggle class on click
	$('li.point0').click(function(){
		$('li.point0').removeClass('enabled'); //Class will be removed on all elements.
		$(this).toggleClass('enabled'); //Class will be toggled
		$('li.point0.enabled').prevAll('.point0').toggleClass('enabled'); //Toggle class on previous child elements
	});

    $('li.point1').click(function(){
        $('li.point1').removeClass('enabled'); //Class will be removed on all elements.
        $(this).toggleClass('enabled'); //Class will be toggled
        $('li.point1.enabled').prevAll('.point1').toggleClass('enabled'); //Toggle class on previous child elements
    });

    $('li.point2').click(function(){
		$('li.point2').removeClass('enabled'); //Class will be removed on all elements.
		$(this).toggleClass('enabled'); //Class will be toggled
		$('li.point2.enabled').prevAll('.point2').toggleClass('enabled'); //Toggle class on previous child elements
	});

});
