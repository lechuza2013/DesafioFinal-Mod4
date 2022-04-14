function agregarData(results){
    console.log(results, "Soy agregarData");
    const contenedor = document.querySelector(".insert-service");
    const template = document.querySelector(".template-item-results");
    for (const r of results.items) {   
    // Titulo del Servicio
    const tituloEl = template.content.querySelector(".services__service-title");
    tituloEl.textContent = r.fields.title2;

    // Descripción del Servicio
    const descriptionEl = template.content.querySelector(".services__service-description");
    descriptionEl.textContent = r.fields.descriptionService;

    // Imagen del Servicio
    const imagenEl = template.content.querySelector(".services__service-photo");
    const imgId = r.fields.photoService.sys.id;
    const img = getImg(imgId, results);
    const imgUrl = img.fields.file.url;
    imagenEl.src = "https:"+imgUrl;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
    }
}
function agregarPresentacion(results){
    console.log(results);
    //Titulo de la presentación
    const tituloElPre = document.querySelector(".services__quien-soy-description-title");
    tituloElPre.textContent = results.items[0].fields.title;

    //Descripción de la presentación
    const descriptionElPre = document.querySelector(".services__quien-soy-description-p");
    descriptionElPre.textContent = results.items[0].fields.description;

    //Imagen de la presentación
    const imagenEl = document.querySelector(".services__quien-soy-photo");
    const imgId = results.items[0].fields.photo.sys.id;
    const img = getImg(imgId, results);
    const imgUrl = img.fields.file.url;
    imagenEl.src = "https:" + imgUrl;
}
function getImg(id, data){
    return data.includes.Asset.find((i)=>{
        return i.sys.id == id;
    })
}
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

    fetch("https://preview.contentful.com/spaces/hzt4dv7mpeq7/environments/master/entries?access_token=mxsSx-pGGFB-QG_Hvtpd7TQkkLqNbzdTiEM2py4udDE&&content_type=presentationservices")
        .then((res)=>{
            return(res.json());
        })
        .then((data)=>{
            agregarData(data);
        });
        fetch("https://preview.contentful.com/spaces/hzt4dv7mpeq7/environments/master/entries?access_token=mxsSx-pGGFB-QG_Hvtpd7TQkkLqNbzdTiEM2py4udDE&&content_type=presentation")
        .then((res)=>{
            return(res.json());
        })
        .then((data)=>{
            agregarPresentacion(data);
        });
}

main();