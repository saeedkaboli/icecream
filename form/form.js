var El={
    name:document.getElementById("name"),
    family:document.getElementById("family"),
    number:document.getElementById("number"),
    gender:document.getElementById("gender"),
    age:document.getElementById("Age"),
    email:document.getElementById("email"),
    btn:document.getElementById("Btn")
};
var val={
    n:El.name.value,
    f:El.family.value,
    a:El.age.value,
    e:El.email.value,
    g:El.gender.value
};
function button(){
  if(El.name.value=="" || El.family.value==''){
      alert("E1")
  }
  else{
    var answer=  alert("عملیات با موفقیت به پایان رسید");
    if(answer==true){
        console.log(El.name.value+El.family.value+El.number.value);
    }
  }
  
}

El.btn.addEventListener("click",button);

