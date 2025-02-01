
window.addEventListener("DOMContentLoaded", (e) => {
  document.addEventListener("click", (e) => {
    // e.preventDefault();

    if (e.target.classList.contains("cerrar")) {
      // console.log("cerrar")
      document.querySelector(".popup").classList.add("invisible");
    }
    if (e.target.classList.contains("hh")) {
      document.querySelectorAll(".seccion1").forEach((el) => {
        el.classList.remove("activa");
      });
      // console.log("abrir");
      document.querySelector(".popup").classList.remove("invisible");
      window.scrollTo(0, 0);
    }
    let $seccion = document.querySelectorAll(`.${e.target.classList[0]}1`);
    // console.log($seccion)
    $seccion.forEach((el) => {
      // const initY = el.clientY-ventana.offsetTop
      // ventana.styleTop = el.clientY - initY+"px"
      if (el != e.target.parentNode.nextSibling) {
        function remover() {
          el.classList.remove("activa");
        }
        requestAnimationFrame(remover);
      }
    });

    // console.log(e.target.nextSibling);
    function alternar() {
      // console.log(e.target.parentNode.nextSibling)
      e.target.parentNode.nextSibling.classList.toggle("activa");
    }
    requestAnimationFrame(alternar);
    // console.log("activa")

  
  });
});