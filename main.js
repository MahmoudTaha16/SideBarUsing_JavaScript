let btnOpen=document.getElementById("open");
let btnClose=document.getElementById("close");
let slidbar=document.getElementById("slidbar");


btnClose.onclick=function(){

  slidbar.classList.add("hide");
  btnOpen.classList.remove("hide");
  this.classList.add("hide");
  this.style.marginLeft="170px";

}

btnOpen.onclick=function(){
  slidbar.classList.remove("hide");
  this.classList.add("hide");
  btnClose.classList.remove("hide");


}