const img = document.querySelector("#main img");
const cursor = document.querySelector("#cursor");
const imgdiv = document.querySelector("#imgdiv")

imgdiv.addEventListener("mousemove", function(dets){
    const rotx = 55 - dets.x/11;
    const roty = Math.abs(rotx);

    console.log(rotx);
    img.style.transform = `rotateX(${roty}deg) rotateY(${-rotx}deg)`;
    // imgdiv.style.transform = `rotateX(${roty}deg) rotateY(${rotx}deg)`;

}) 

imgdiv.addEventListener("mouseleave", function(){
    setTimeout(function(){
        img.style.transform = `rotateX(0deg) rotateY(0deg)`;
        // imgdiv.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 500)
})

document.addEventListener("mousemove", function(details){
    cursor.style.left = `${details.x}px`;
    cursor.style.top = `${details.y}px`;
})

imgdiv.addEventListener("mouseover", function(){
    cursor.style.backgroundColor = "rgb(255, 0, 0)";
    cursor.style.mixBlendMode = "normal";
})

imgdiv.addEventListener("mouseleave", function(){
    cursor.style.backgroundColor = "whitesmoke";
    cursor.style.mixBlendMode = "difference";
})