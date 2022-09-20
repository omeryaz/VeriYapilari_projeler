let userName = prompt("Adınız nedir?");
let textinfo = document.querySelector("#myName");
textinfo.innerHTML = userName





let everChanging;
everChanging = document.querySelector("#myClock");

let datesSeptember = ["Çarşamba","Perşembe","Cuma","Cumartesi","Pazar","Pazartesi","Salı"] 

function timeFunc(){

    let today = new Date();
    let day = today.getDate();
    let hour = today.getHours();    
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let weekday = datesSeptember[day%7];

    if(second<10){
        second = "0" + second;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(hour<10){
        hour = "0" + hour;
    }
    
    
    let time =  hour + ":" + minute + ":" + second + " " + weekday
    
        everChanging.innerHTML = time;
};

setInterval(timeFunc,1000);

