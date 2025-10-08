document.addEventListener("DOMContentLoaded", () => {
  const halloweenContainer = document.querySelector(".halloween-elements");
  const mainContent = document.querySelector(".menu");

  const elements = [
    {
      type: "bat",
      count: 5,
      src: "https://huelgabar.github.io/menuHuelga/imagenes/bat.svg",
    },
    {
      type: "spider",
      count: 5,
      src: "https://huelgabar.github.io/menuHuelga/imagenes/spider.svg",
    },
    {
      type: "web",
      count: 3,
      src: "https://huelgabar.github.io/menuHuelga/imagenes/pumpkin.svg",
    },
  ];

  const spawnInterval = 1000;
  const despawnTime = 10000;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createElement(type, src) {
    const element = document.createElement("div");
    element.classList.add("halloween-element", type);
    element.style.backgroundImage = `url('${src}')`;

    // --- CÓDIGO NUEVO PARA EL MOVIMIENTO ALEATORIO DEL 5% vmin ---
    const vminValue = Math.min(window.innerWidth, window.innerHeight); // Obtener el valor de vmin
    const maxOffset = vminValue * 0.05; // 5% de vmin

    // Asignar offsets aleatorios para la animación 'float'
    element.style.setProperty(
      "--float-x-offset",
      `${getRandomArbitrary(-maxOffset, maxOffset)}px`
    );
    element.style.setProperty(
      "--float-y-offset",
      `${getRandomArbitrary(-maxOffset, maxOffset)}px`
    );
    element.style.setProperty(
      "--float-rotate",
      `${getRandomArbitrary(-5, 5)}deg`
    ); // Rotación ligera

    // --- FIN CÓDIGO NUEVO ---

    const viewportHeight = window.innerHeight;
    const mainContentTop = mainContent.offsetTop;
    const mainContentHeight = mainContent.offsetHeight;

    let topPosition;
    const isTop = Math.random() < 0.5;

    if (isTop) {
      topPosition = getRandomArbitrary(-50, viewportHeight * 0.25);
    } else {
      topPosition = getRandomArbitrary(
        viewportHeight * 0.75,
        viewportHeight - 50
      );
    }

    element.style.top = `${topPosition}px`;
    element.style.left = `${getRandomArbitrary(0, 100)}vw`;
    element.style.transform = `scale(${getRandomArbitrary(0.8, 1.2)})`;

    halloweenContainer.appendChild(element);

    setTimeout(() => {
      element.classList.add("visible");
    }, 50);

    setTimeout(() => {
      element.classList.remove("visible");
      setTimeout(() => {
        element.remove();
      }, 500);
    }, despawnTime);
  }

  function spawnRandomElement() {
    const randomElementGroup =
      elements[Math.floor(Math.random() * elements.length)];
    createElement(randomElementGroup.type, randomElementGroup.src);
    setTimeout(
      spawnRandomElement,
      getRandomArbitrary(spawnInterval * 0.8, spawnInterval * 1.5)
    );
  }

  spawnRandomElement();
});
