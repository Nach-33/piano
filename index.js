let count=2;
function themeChange(){
    count+=1;
    if(count%2==0){
        document.getElementById("main1").style.background = "linear-gradient(rgba(110, 84, 84, 0.4),rgba(233, 62, 62, 0.4)), url(images/background2.jpg)";
        document.getElementById("main1").style["background-size"]="cover";
    }
    else{
        document.getElementById("main1").style.background = "linear-gradient(rgba(110, 84, 84, 0.4),rgba(140, 105, 234, 0.4)), url(images/background1.jpg)";
        document.getElementById("main1").style["background-size"]="cover";
    }
}
let arrM=['a','s','d','f','g','h','j','k','l',';']
let arrm=['w','e','t','y','u','o','p']
console.log(document.querySelector('.board').getAttribute('class'))
document.addEventListener('click',e=>{
    console.log(e.target.getAttribute('id'))
    console.log(Array.from(e.target.getAttribute('class'))[0])
    if(Array.from(e.target.getAttribute('class'))[0]==='d'){
        song=`./sounds/${e.target.getAttribute('id')}.mp3`
        document.getElementById("yas").src=song;
    }
    else{
        song=`./sounds/${e.target.getAttribute('id')}.wav`
        document.getElementById("yas").src=song;
    }
})

document.addEventListener('keydown',e=>{
    if(arrM.indexOf(e.key)!=-1){
        k=`Mkey${arrM.indexOf(e.key)+1}`
        song=`./sounds/${k}.wav`
        if(arrM.indexOf(e.key)>6) song=`./sounds/${k}.mp3`
        document.getElementById(k).style["height"]="98%";
        document.getElementById(k).style["background"]=" rgb(0,0,0)";
        document.getElementById(k).style["background"]=" linear-gradient(90deg, rgba(0,0,0,0.9447129193474265) 0%, rgba(255,255,240,1) 15%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 84%, rgba(0,0,0,1) 100%)";
        setTimeout(function() {
            document.getElementById(k).style["height"]="100%";
            document.getElementById(k).style["background"]=" ivory";
        }, 80);
        console.log(song)
    }
    if(arrm.indexOf(e.key)!=-1){
        k=`m_key${arrm.indexOf(e.key)+1}`
        song=`./sounds/${k}.wav`
        if(arrm.indexOf(e.key)>4) song=`./sounds/${k}.mp3`
        document.getElementById(k).style["height"]="102%";
        document.getElementById(k).style["background"]=" rgb(161,160,160)";
        document.getElementById(k).style["background"]=" linear-gradient(0deg, rgba(161,160,160,1) 3%, rgba(75,75,75,1) 29%, rgba(69,69,69,1) 43%, rgba(0,0,0,1) 100%)";
        setTimeout(function() {
            document.getElementById(k).style["height"]="100%";
            document.getElementById(k).style["background"]=" black";
            document.getElementById(k).style["background"]=" linear-gradient(90deg, rgba(0,0,0,0.9447129193474265) 0%, rgba(119,119,119,1) 5%, rgba(45,45,45,1) 10%, rgba(0,0,0,1) 51%, rgba(57,57,57,1) 90%, rgba(105,103,103,1) 95%, rgba(0,0,0,1) 100%)";

        }, 80);
        console.log(song)
    }
    document.getElementById("yas").src=song;
})