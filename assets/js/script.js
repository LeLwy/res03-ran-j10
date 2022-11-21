let section = document.querySelectorAll("body > main > section");
let fakeBtn = document.querySelectorAll("body > main > section > .fakeBtn");

for (let i = 0; i < section.length; i++) {
    fakeBtn[i].addEventListener("click", function(){
        
        if((i+1) < section.length){
            section[i].classList.remove("active");
            section[i+1].classList.add("active");
        }else{
            section[i].classList.remove("active");
            section[0].classList.add("active");

        }
    })    
}