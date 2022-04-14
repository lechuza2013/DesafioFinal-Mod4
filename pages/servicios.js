function agregarData(results){
    console.log(results, "Soy agregarData");
    const contenedor = document.querySelector(".insert-service");
    const template = document.querySelector(".template-item-results");
    
    for (const r of results.items) {   
            // Titulo del proyecto
            const tituloEl = template.content.querySelector(".template-title");
            tituloEl.textContent = r.fields.title;

            // Descripción del proyecto
            const descriptionEl = template.content.querySelector(".template-description");
            descriptionEl.textContent = r.fields.description;

            // Imagen del proyecto
            const imagenEl = template.content.querySelector(".template-img");
            const imgId = r.fields.photo.sys.id;
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

fetch("https://preview.contentful.com/spaces/hzt4dv7mpeq7/environments/master/entries?access_token=mxsSx-pGGFB-QG_Hvtpd7TQkkLqNbzdTiEM2py4udDE&&content_type=servicios")
    .then((res)=>{
        return(res.json());
    })
    .then((data)=>{
        agregarData(data);
    });
}
main();