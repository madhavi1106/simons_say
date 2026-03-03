let gamesequence=[];
let usersequence=[];
let btns=["grey","pink","rosy","cool"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelup(){
    usersequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);//<.> for class and ${randcolor} for treating ra0mdColor as variable
    gamesequence.push(randColor);
    gameFlash(randbtn);

}
function checkAns(idx){
  if(usersequence[idx]===gamesequence[idx]){
     if(usersequence.length===gamesequence.length){
        setTimeout(levelup,1000);
     }
  }else{
    h2.innerHTML=(`Game Over! Your score was <B>${level}</B></br>PRESS ANY  KEY TO RESTART`);
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"; 
    },150);
    reset();
  }
}
function btnpress(){
    let btn=this;//particular object
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    usersequence.push(userColor);
    checkAns(usersequence.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
  started=false;
  gamesequence=[];
  usersequence=[];
  level=0;
}
