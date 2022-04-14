function createFooterComponent(el){
    const componentElFooter =  document.createElement("div");
    componentElFooter.innerHTML = `
    <footer class="footer">
    <div class="footer__container-one">
        <h2 class="footer__container-title">AXEL</h2>
    </div>
    <div class="footer__container-two">
        <!-- LOS ICONOS DE LAS REDES SOCIALES PESAN MUCHO. CAMBIAR! -->
        <div class="footer__container-social-media">
            <a href="https://www.instagram.com/axeljsu/" target="_blank">
                <label for="icon-ig" class="footer__labels">Instagram</label>
                <img id="icon-ig" class="footer__icon" src="./images/icon-instagram.png">
            </a>
        </div>
        <div class="footer__container-social-media">
            <a href="https://github.com/lechuza2013" target="_blank">
                <label for="icon-git" class="footer__labels">Github</label>
                <img id="icon-git" class="footer__icon" src="./images/icon-github.png">
            </a>
        </div>
        <div class="footer__container-social-media">
            <a href="https://twitter.com/Axeloide9" target="_blank">
                <label for="icon-twitter" class="footer__labels">Twitter</label>
                <img id="icon-twitter" class="footer__icon" src="./images/icon-twitter.png">
            </a>
        </div>
    </div>
</footer>`;
    el.appendChild(componentElFooter);
}
