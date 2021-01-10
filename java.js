// variable icecream
var color={
    green:document.getElementById("green"),
    red:document.getElementById("red"),
    orange:document.getElementById("orange"),
    brown:document.getElementById("brown"),
    body:document.querySelector("body"),
    Not:document.getElementById("Not")
}
var slide={
    circle:document.getElementById("circle"),
    ice:document.getElementById("ice"),
    Vip:document.getElementById("Vip"),
    cream:document.getElementById("Cream"),
    back:document.getElementById("Back")
}
//--------------------------------------------------------
//------------------------Enven green
color.green.addEventListener("click",function(){
slide.circle.style.background="chartreuse";
color.body.style.background="lightgreen";
slide.ice.innerHTML="بستنی طالبی";
slide.cream.src="img/green.png";

})
//------------------------Enven red
color.red.addEventListener("click",function(){
    slide.circle.style.background="crimson";
    color.body.style.background="rgb(250, 120, 120)";
    slide.ice.innerHTML="بستنی توت فرنگی"
    slide.cream.src="img/red.png"
    }) 
    //------------------------Enven brown
color.brown.addEventListener("click",function(){
    slide.circle.style.background="#774c2d";
    color.body.style.background="#9c7457";
    slide.ice.innerHTML="بستنی شکلاتی";
    slide.cream.src="img/brown.png"
    })
       //------------------------Enven orange
color.orange.addEventListener("click",function(){
    slide.circle.style.background=" coral";
    color.body.style.background="rgb(240, 160, 131)";
    slide.ice.innerHTML="بستنی پرتقالی";
    slide.cream.src="img/orange.png";
    })
    //---------------------------------------------------------------

    // ----------------Envent-Log----------
    // slide.Vip.addEventListener("click",function(){
    //     color.Not.style.display="inline-block";
    //     color.Not.style.transform.scale="1";
    // })
    function vip(){
        color.Not.style.opacity=1;
         color.Not.style.transition="2s";
        color.Not.style.display="flex";
       
    }
    function bk(){
        color.Not.style.opacity=0;
        color.Not.style.transition="2s";
        color.Not.style.display="none";
        
    }

