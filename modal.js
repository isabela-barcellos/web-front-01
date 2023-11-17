const button = document.querySelector("button");
const poupup= document.querySelector(".poupup-wraper");

const openClick = function(){
    poupup.classList.add("d-block");
}

const eventModal = function(event){
    const clickOfElement= event.target.classList[0];
    const clasListNameArray = ["poupup-close", "poupup-link","poupup-wraper"];
    // console.log(clasListNameArray.includes(clickOfElement))
   
   const isClassList = clasListNameArray.includes(clickOfElement);
   
    if (clasListNameArray.includes(clickOfElement)){
        poupup.classList.remove("d-block");
    }

}
button.addEventListener("click",openClick);
poupup.addEventListener("click",eventModal);
