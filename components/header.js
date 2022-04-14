function createHeaderComponent(el){
    const componentEl = document.createElement("div");
        componentEl.innerHTML = `
        <header class="header">
        <a href="../index.html">
        <h2 class="header__title">AXEL</h2>
        <a>
        <nav class="header__nav">
            <a class="header__nav-links" href="./portfolio.html">Portfolio</a>
            <a class="header__nav-links" href="./servicios.html">Servicios</a>
            <a class="header__nav-links" href="./contacto.html">Contacto</a>
        </nav>
        <div class="header__menu">
            <div class="header__menu-raya"></div>
            <div class="header__menu-raya"></div>
            <div class="header__menu-raya"></div>
        </div>
    </header>
    <div class="header__window">

        <button class="header__window-button">X</button>

        <a class="header__window-links" href="./portfolio.html">Portfolio</a>
        <a class="header__window-links" href="./servicios.html">Servicios</a>
        <a class="header__window-links" href="./contacto.html">Contacto</a>
    </div>`;

   el.appendChild(componentEl);
   const botonAbreVentanaEl = document.querySelector(".header__menu");
    const botonCierraVentanaEl = document.querySelector(".header__window-button");
    const ventanaEl = document.querySelector(".header__window");

    botonAbreVentanaEl.addEventListener("click", ()=>{
        ventanaEl.style.display = "flex";
    });
    botonCierraVentanaEl.addEventListener("click", ()=>{
        ventanaEl.style.display = "none";
    });
}
