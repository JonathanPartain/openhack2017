/**
 * Created by Vin on 07/10/2017.
 */
 var myChart=null;

$(document).ready(function(){
    var ctx = $("#myChart");
    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["Learning", "Challenge", "Recognition", "Professional Growth", "Teamwork", "Familiarity",
                "Security/Benefits", "Diversity", "Sustainability", "Free Coffee"],
            datasets: [{
                data: lastClicked,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255,99,132,1)'],
                borderWidth: 1
            },{
                data: [0,0,0,0,0,0,0,0,0,0],
                options:{
                    legend: {
                        display: false,
                    }
                }
            }]
    }
        ,
        options: {
        }
    });
});
