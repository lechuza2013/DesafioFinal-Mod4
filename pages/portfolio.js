function agregarData(results){
    console.log(results, "Soy agregarData");
    const contenedor = document.querySelector(".insert-project");
    const template = document.querySelector(".template-item-results");
    for (const r of results.items) {   
    // Titulo del proyecto
    const tituloEl = template.content.querySelector(".template-title");
    tituloEl.textContent = r.fields.titulo;

    // Descripción del proyecto
    const descriptionEl = template.content.querySelector(".template-description");
    descriptionEl.textContent = r.fields.description;
     
    //Url direccionada al clickear la imágen
    const linkEl = template.content.querySelector(".template-url");
    linkEl.href = r.fields.url;

    // Imagen del proyecto
    const imagenEl = template.content.querySelector(".template-img");
    const imgId = r.fields.imagen.sys.id;
    const img = getImg(imgId, results);
    const imgUrl = img.fields.file.url;
    imagenEl.src = "https:"+imgUrl;

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
    }
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
    
    // Footer
    const containerFooter = document.querySelector(".contenedor-insert-footer");
    createFooterComponent(containerFooter);
    
    fetch("https://preview.contentful.com/spaces/hzt4dv7mpeq7/environments/master/entries?access_token=mxsSx-pGGFB-QG_Hvtpd7TQkkLqNbzdTiEM2py4udDE&&content_type=portafolio")
        .then((res)=>{
            return(res.json());
        })
        .then((data)=>{
            agregarData(data);
        });
    }
    main();