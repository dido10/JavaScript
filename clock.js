let getName = function(){
    var name = "";

    do{
         name = prompt("Bir isim giriniz");    
    
        }while(name=="");
        document.getElementById("myName").innerText = name;
        let yansit = document.getElementById("myName")
        yansit.innerText= name;  
}
getName()
     
var clock=document.getElementById("myClock");
var hexcode=document.getElementsByClassName("Clock");
let days=["","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

let showTime= function(){
    let time=new Date();
    let hour=time.getHours().toString();
    let minute=time.getMinutes().toString();
    let second=time.getSeconds().toString();
    var day=days[time.getDay()];

    
    if(time.getHours()<10){
        hour='0'+hour;
    }
    if(time.getMinutes()<10){
        minute='0'+minute;
    }
    if(time.getSeconds()<10){
       
        second='0'+second;
    }
    console.log(second.length)
    let clockstr=hour+":"+minute+":"+second+"   "+day;
    let hexstr=hour+minute+second;
    clock.textContent=clockstr;
    hexcode.textContent=hexstr;

}

showTime();
setInterval(showTime,1000);