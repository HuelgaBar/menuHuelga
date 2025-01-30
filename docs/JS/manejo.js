
window.addEventListener("DOMContentLoaded", (e) => {
  // $activas = document.querySelectorAll(".seccion1")
 
  document.addEventListener("click", (e) => {
    // console.log(e.target)
    if(e.target.classList.contains("cerrar")){
      // console.log("cerrar")
      document.querySelector(".popup").classList.add("invisible");
    }
    if(e.target.classList.contains("hh")){
      document.querySelectorAll(".seccion1").forEach((el) => {
      el.classList.remove("activa");
    });
      console.log("abrir")
      document.querySelector(".popup").classList.remove("invisible")
      window.scrollTo(0,0)
    }
   let $seccion = document.querySelectorAll(`.${e.target.classList[0]}1`);
    $seccion.forEach((el) => {
      if(el != e.target.nextSibling)
      el.classList.remove("activa");
    });
 
    // console.log(e.target.nextSibling);
    e.target.nextSibling.classList.toggle("activa");
    
    
  });
});
