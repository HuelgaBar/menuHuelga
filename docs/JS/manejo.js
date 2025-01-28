window.addEventListener("DOMContentLoaded", (e) => {
 
  document.addEventListener("click", (e) => {
   let $seccion = document.querySelectorAll(`.${e.target.classList[0]}1`);
    $seccion.forEach((el) => {
      if(el != e.target.nextSibling)
      el.classList.remove("activa");
    });
 
    // console.log(e.target.nextSibling);
    e.target.nextSibling.classList.toggle("activa");
    
    ;
  });
});
