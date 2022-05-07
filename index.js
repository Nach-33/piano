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
    console.log(e.target.getAttribute('class'))
    if(Array.from(e.target.getAttribute('class')=='mp3')) song=`./sounds/${e.target.getAttribute('id')}.wav`
    else song=`./sounds/${e.target.getAttribute('id')}.wav`
    document.getElementById("yas").src=song;
})
document.addEventListener('keydown',e=>{
    // console.log(e)
    if(arrM.indexOf(e.key)!=-1){
        song=`./sounds/Mkey${arrM.indexOf(e.key)+1}.wav`
        if(arrM.indexOf(e.key)>6) song=`./sounds/Mkey${arrM.indexOf(e.key)+1}.mp3`
        console.log(song)
    }
    if(arrm.indexOf(e.key)!=-1){
        song=`./sounds/m_key${arrm.indexOf(e.key)+1}.wav`
        if(arrm.indexOf(e.key)>4) song=`./sounds/m_key${arrm.indexOf(e.key)+1}.mp3`
        console.log(song)
    }
    document.getElementById("yas").src=song;
})