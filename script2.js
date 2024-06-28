class usuario{
    constructor(nombre, foto){
        this.nombre = nombre;
        this.foto = foto;
    }
}


BD_USUARIOS = [
    new usuario( 'jinshi', 'jinshi.jpg' ),
    new usuario( 'nana', 'nana.jpg' ),
    new usuario( 'naruto', 'naruto.webp' ),
    new usuario( 'tanjiro', 'tanjiro.webp' ),
    new usuario( 'riko', 'riko.webp' ),
];


function searchNames(){
    const filter = document.getElementById('nombre').value.toLowerCase();
    const containerNames = document.getElementById('container');
    const containerFotos = document.getElementById('fotos');

    containerFotos.innerHTML = '';
    containerNames.innerHTML = '';

    if (filter.trim() === '') {
        return; 
      }
BD_USUARIOS.forEach( usuario => {
 
    if(usuario.nombre.toLowerCase().includes(filter)){

        const name = document.createElement('p');
        name.textContent = usuario.nombre;

        const img = document.createElement('div');
        img.className = 'foto';
        img.style.backgroundImage = `url(${usuario.foto})`;

    
        containerNames.appendChild(name);
        containerFotos.appendChild(img);
    }
});
}

const filterInput   = document.getElementById('nombre');
filterInput.addEventListener('input', searchNames);