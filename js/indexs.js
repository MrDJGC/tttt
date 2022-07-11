const yesbtn=document.querySelector("#yesbtn");

yesbtn.addEventListener("click" ,function () {
    alert("Siuuuuuu")
});

const notbtn=document.querySelector("#notbtn");

notbtn.addEventListener("mouseover", function(){
    const randomx=parseInt(Math.random()*100);
    const randomy=parseInt(Math.random()*100);
    notbtn.style.setProperty("top",randomy+"%");
    notbtn.style.setProperty("left",randomx+"%");
    notbtn.style.setProperty("transform",`translate(-${randomx}%,-${randomy}%)`);

    notbtn.addEventListener("click" ,function () {
        alert("Toy muy tristes T_T")
    });
})