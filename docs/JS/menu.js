let datos = {};

const url = "https://huelgabar.github.io/menuHuelga/object-db.json";

const $container = document.querySelector(".container");

let $seccion = "",
  $info = "",
  $precio,
  $uno,
  clase = "A",
  art,
  hh = "",
  tit="",
  sticky="",
visible="",
  arthh = "";

  function llamarDb(url) {
    fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3.raw"
      },
    })
      .then((resp) => resp.json())
      .then((dato) => {
        console.log(dato);
        console.log(dato.key);
        // console.log(dato.record.menu);
        const data = dato; //orig = dato.record
        // console.log(data)
        // Empezando a armar la estructura de datos
        for (const key in data) {
          //   console.log(data[key])
          const seccionhh = document.createElement("section");
          seccionhh.classList.add("seccion1");
          seccionhh.classList.add("siempreActiva");
          let clase = key.replaceAll(" ", "_");
          //   console.log(clase)
          if (clase != "") {
            seccionhh.classList.add(`${clase}`);
          }
          const titulohh = document.createElement("h3");
          titulohh.classList.add("seccion");
          titulohh.innerHTML = `${key}`;

          const seccion = document.createElement("section");
          seccion.classList.add("seccion1");
          const access = document.createElement("a");
          access.href = `#${clase}`;
          const titulo = document.createElement("h3");
          titulo.classList.add("seccion");
          titulo.id = `${clase}`;
          titulo.innerHTML = `${key}`;
          access.appendChild(titulo);
          if (key != "id") {
            let clase2 = key.replaceAll(" ", "_");
            seccion.innerHTML = `<div class= 'pictures'><img src='./imagenes/${clase2}.jpg' alt='${key}'></div>`;
            for (const articulo in data[key]) {
              let $tipos = "";
              let $tiposhh = "";
              datos = data[key][articulo];
              // console.log(datos);

              $precio = "";
              //Armando el arreglo
              datos[2].forEach((element, i) => {
                let separarTipo = element[0].split("\n");
                // console.log(separarTipo)
                let tipo1 = separarTipo[0] ? separarTipo[0].trim() : "";
                let tipo2 = separarTipo[1] ? separarTipo[1].trim() : "";
                let precio1 = element[1] ? element[1].trim() : "";
                let precio2 = element[2] ? element[2].trim() : "";
                let precio3 = element[3] ? element[3].trim() : "";
                let precio4 = element[4] ? element[4].trim() : "";
                let mini = "";
                if (element[0].trim() === "" || element[0] === undefined) {
                  mini = "mini";
                }
                console.log("el 0 = ", element[0], element[0].length);

                $tipos += `<div>
              <span class="tipo">${tipo1}<p class= "mini">${tipo2}</p> </span>
              <span class="${mini} precio">${
                  Number(precio1) > 0 ? "$ " : ""
                }${precio1}</span>
              <span class="${mini} precio">${
                  Number(precio2) > 0 ? "$ " : ""
                }${precio2}</span>
              </div>
              `;

                // console.log(element);

                if (element[3] != "" && element[3] != "undefined") {
                  // console.log(element[2]);
                  $tiposhh += `<div>
              <span class="tipo">${tipo1}<p class= "mini">${tipo2}</p> </span>
              <span class="${mini} precio">${
                    Number(precio3) > 0 ? "$ " : ""
                  }${precio3}</span>
              <span class="${mini} precio">${
                    Number(precio4) > 0 ? "$ " : ""
                  }${precio4}</span>
              </div>`;
                }
              });
              tit = `${datos[0].replaceAll(" ", "_")}`;
              if (data[key].length === 1) {
                visible = "class=' articulo1 siempreActiva' ";
              } else {
                visible = "class=articulo1";
              }
              art = `<div><h4  class="articulo">${datos[0]}</h4></div><div ${visible}>
            <div class="descripcion">${datos[1]}</div>
            <div class="tipos">${$tipos}</div>
            </div>
            `;
              if ($tiposhh != "") {
                arthh = `
            <div class="hh1">
            <h4 class="hhart">${datos[0]}</h4>
            <div class="hhtipos">${$tiposhh}</div>
            </div>
            `;
                // <div class="descripcion">${datos[1]}</div>
                seccionhh.innerHTML += arthh;
                document.querySelector(".modal").appendChild(titulohh);
                document.querySelector(".modal").appendChild(seccionhh);
              }
              // console.log($tipos);
              // console.log(datos[0]);
              // console.log(datos[1]);
              // console.log(datos[2][0][0]);
              // console.log(datos[2][0][1]);
              seccion.innerHTML += art;

              document.querySelector(".menu").appendChild(access);
              document.querySelector(".menu").appendChild(seccion);
            }
          }
        }
        document.querySelector(".menu").innerHTML +=
          '<BUTTON  class="happy hh"><span class="hh">HAPPY HOUR</span><img class="click" src="./imagenes/click.svg" alt="click"></BUTTON> ';
      })
      .then(() => {
        window.scrollTo(0, 0);
      });
  }

llamarDb(url);