let roll = document.querySelector('.dice');
let newG = document.querySelector('.new');
let hold = document.querySelector('.hold');
let cont = document.querySelector(".container");
let score = document.querySelectorAll(".score");
let scr = document.querySelectorAll(".scr");
let player = document.querySelectorAll(".player");
let cursordot = document.querySelector(".cursor-dot");
let cursorout = document.querySelector(".cursor-outline");
let i = 0;


window.addEventListener("mousemove",function(e){
    const posX = e.clientX;
    const posY = e.clientY;
    cursordot.style.left = `${posX}px`; 
    cursordot.style.top = `${posY}px`; 
    cursorout.style.left = `${posX}px`; 
    cursorout.style.top = `${posY}px`; 
})
roll.addEventListener("click",function(e){
    let dice = Math.floor(Math.random()*6)+1;
    if(score[i].textContent < 100){
        let img = document.createElement("img");
        img.src = `images/dice-${dice}.png`;
        img.style = `position:absolute; width:100px; height:100px; left:50%; top:50%; transform:translate(-50%,-50%);`;
        cont.appendChild(img);
        if(dice == 1 && !(score[i].textContent >= 100)){
            scr[i].textContent = 0;
            hold.click();
        }else if(dice !== 1 && !(score[i].textContent >= 100)){
            scr[i].textContent = +scr[i].textContent+dice;
        }
    }
})

hold.addEventListener("click",function(){
    if(score[i].textContent < 100){
        score[i].textContent =  +score[i].textContent + +scr[i].textContent;
        scr[i].textContent = 0;
    }
    if(score[i].textContent >= 100){
        player[i].classList.add('win');
    }else if(player[0].classList.contains("turn")){
        player[0].classList.toggle("turn");
        i++;
        player[1].classList.toggle("turn");
    }else{
        player[0].classList.toggle("turn");
        i--;
        player[1].classList.toggle("turn");
    }

})


newG.onclick = function(){
    i = 0;
    score.forEach(sc =>sc.textContent = 0);
    scr.forEach(sc => sc.textContent = 0);
    player.forEach(pl => {
        pl.classList.remove("turn");
        pl.classList.remove("win");
    });
    player[i].classList.add("turn");
    let img = document.querySelectorAll("img");
    img.forEach(im =>{
        im.remove();
    })
}
