var times=document.querySelectorAll('nav p>span')[1];
var bars=document.querySelectorAll('nav p>span')[0];
var lists=document.querySelectorAll('nav ul')[0];

times.onclick=function(){
    bars.style.display="block";
    times.style.display="none";
    lists.style.right="-50vw";
}
bars.onclick=function(){
    bars.style.display="none";
    times.style.display="block";
    lists.style.right="0";
}