function main(){
    // Header
    const containerHeader = document.querySelector(".contenedor__insert-header");
    createHeaderComponent(containerHeader);
    
    // Form
    const containerForm = document.querySelector(".contenedor__insert-form");
    createFormComponent(containerForm);

    // Footer
    const containerFooter = document.querySelector(".contenedor-insert-footer");
    createFooterComponent(containerFooter);
    
    const tituloEl = document.querySelector(".form__container-title");
    tituloEl.textContent = "Contacto";
}

main();