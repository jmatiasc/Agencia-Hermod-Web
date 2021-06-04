

const  expandir = (nombreId) =>{
    const nombreJobs =nombreId+"cardJobs";
    const cardJobs = document.getElementById(nombreJobs);
    cardJobs.setAttribute('class',"logos-works active");
    
};
const contraer = (nombreId) =>{
    const nombreJobs =nombreId+"cardJobs";
    const cardJobs = document.getElementById(nombreJobs);
    console.log(cardJobs);
    cardJobs.setAttribute('class',"logos-works");
}


const mostrar = ( nombre, descripcion, imagenDes , trabajos ) =>{

    const imgMuestra = document.getElementById('imgMuestra');
    imgMuestra.setAttribute('src',imagenDes);

    const titulo = document.getElementById('titulo');
    titulo.innerHTML= nombre;
    console.log(titulo);

    const texto = document.getElementById('texto');
    texto.innerHTML=descripcion;

    const logosworks = document.getElementById('logos-works-muestra');
    
    logosworks.innerHTML="";

    array = ["fotografia.png","fotografia.png","fotografia.png"];
    array.forEach(element => {
        const imgNueva=`<img src="images/${element}" alt="">`;
        logosworks.insertAdjacentHTML('beforeend', imgNueva);
    
    });
    
}