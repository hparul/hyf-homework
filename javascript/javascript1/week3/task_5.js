let activities=[];
 

function addActivity(activity,duration){
    let date=new Date();
    activities.push({Date:date,activity:activity,duration:duration});
    console.log(activities);
}
addActivity("watsapp",1);
addActivity("facebook",2);
addActivity("youtube",3);
addActivity("wynkmusic",2);
addActivity("slack",1);


//function to show status for currentdate only
function showStatusForCurrentDay(){
    let activitiesForCurrentDay=[];
    let today=new Date();
    
    const totalActivitiesAdded=activities.length;
    for(let i=0;i<activities.length;i++) {
        if (today.getDate()=== activities[i].Date.getDate()) {
            activitiesForCurrentDay.push(activities[i]);
           
        }
        console.log(activitiesForCurrentDay);
    }
}
    showStatusForCurrentDay();

const usageLimit=200;
let totalDuration=0;

function showStatus(){
    if(activities===[]){
        console.log("you have to add activities before calling function");
    }
    else {
        const totalActivitiesAdded=activities.length;
        for(let i=0;i<activities.length;i++) {
            totalDuration+=activities[i].duration * 60;
        }
        if (totalDuration > usageLimit) {
            console.log('you have reached your limit,no more smartphoning for you');

        } else {
            console.log(`you have added ${totalActivitiesAdded} activities.They amount to ${totalDuration} min of duration `);    
        }
        
    }
}

showStatus();

