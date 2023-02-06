document.getElementById("infoContactoBoton").addEventListener("click", function(){
var x=document.getElementById("infoContacto");
if (x.style.display=="none"){
    x.style.display="block";
   
}
else{
    x.style.display="none";
    
}
});

document.getElementById("infoExpLaboralBoton").addEventListener("click", function (){
    var x=document.getElementById("infoExpLaboral");
    if (x.style.display=="none"){
        x.style.display="block";
        this.innerHTML = "↓";
    }
    else{
        x.style.display="none";
        this.innerHTML = "→";
    }
    });

document.getElementById("infoEducacionBoton").addEventListener("click", function (){
    var x=document.getElementById("infoEducacion");
    if (x.style.display=="none"){
        x.style.display="block";
        this.innerHTML = "↓";
    }
    else{
        x.style.display="none";
        this.innerHTML = "→";
    }
    });

document.getElementById("infoCursosBoton").addEventListener("click", function (){
    var x=document.getElementById("infoCursos");
    if (x.style.display=="none"){
        x.style.display="block";
        this.innerHTML = "↓";
    }
    else{
        x.style.display="none";
        this.innerHTML = "→";
        }
    });


document.getElementById("infoLenguajesBoton").addEventListener("click", function (){
    var x=document.getElementById("infoLenguajes");
    if (x.style.display=="none"){
        x.style.display="block";
        this.innerHTML = "↓";
    }
    else{
        x.style.display="none";
        this.innerHTML = "→";
        }
    });

document.getElementById("infoDigitalSkillsBoton").addEventListener("click", function(){
var x=document.getElementById("infoDigitalSkills");
if (x.style.display=="none"){
    x.style.display="block";
    this.innerHTML = "↓";
}
else{
    x.style.display="none";
    this.innerHTML = "→";
}
});

document.getElementById("infoSkillsBoton").addEventListener("click", function(){
    var x=document.getElementById("infoSkills");
    if (x.style.display=="none"){
        x.style.display="block";
        this.innerHTML = "↓";
    }
    else{
        x.style.display="none";
        this.innerHTML = "→";
    }
    });




