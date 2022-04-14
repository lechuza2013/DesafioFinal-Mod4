function createFormComponent(el) {
const componentElForm = document.createElement("div");
componentElForm.innerHTML = `
<form class="my-form">
            <div class="form__container">
                <h2 class="form__container-title">Escribeme</h2>
            </div>
            <div class="form__container-inputs">
                <label class="form__labels" for="name">NOMBRE</label>
                <input class="form__inputs" type="text" placeholder="example: axel..." name="name">

                <label class="form__labels" for="email">EMAIL</label>
                <input class="form__inputs" type="email" placeholder="example: axel@gmail.com..." name="email">   

                <label class="form__labels" for="message" class="form__labels">Mensaje</label>
                <textarea class="form__input-textarea" name="message" id="" cols="30" rows="10" placeholder="example: te quiero mucho..."></textarea>

                <button class="form__button">Enviar</button>
            </div>
        </form>
        `;
        el.appendChild(componentElForm);
        
    const myFormEl = document.querySelector(".my-form");
    myFormEl.addEventListener("submit", function(event){
        event.preventDefault(); // Anula algunas funciones predeterminadas del Form
        const formData = new FormData(event.target);
        const objeto = Object.fromEntries(formData.entries());
        console.log(objeto);

        const mensaje = {
            to: "julian_s_99@live.com",
            message: "Nombre: "+objeto.name+", Email: "+objeto.email+", Mensaje: "+objeto.message +".",
        }
        fetch("https://apx-api.vercel.app/api/utils/dwf",{
            method: "POST",
            body: JSON.stringify(mensaje),
            headers: {
                "content-type": "application/json",
            }
        });
    });
}
