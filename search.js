// script.js
class usuario {

  constructor(nombre, foto){
    this.nombre = nombre
    this.foto = foto
  }

}

var datos = true;
/* Systema de pusheo multiple */
const usuariosList = [
 {nombre: 'jinshi', foto: 'jinshi.jpg', datos: 'Soy jinshi'},
 {nombre: 'nana', foto: 'nana.jpg', datos: 'Soy nana'},
 {nombre: 'naruto', foto: 'naruto.webp' , datos: 'Soy naruto'},
 {nombre: 'tanjiro', foto: 'tanjiro.webp', datos: 'Soy tanjiro'},
 {nombre: 'riko', foto: 'riko.webp', datos: 'Soy riko'},
];

 

/* Systema de filtrado */
function mostrarNombres() {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const containerFotos = document.getElementById('fotos');
  containerFotos.innerHTML = '';
  const filtro = document.getElementById('nombre').value.toLowerCase();

  if (filtro.trim() === '') {
    return; 
  }

  usuariosList.forEach(usuario => {
    
    if (usuario.nombre.toLowerCase().includes(filtro)) {
      const bodycard = document.createElement('div');
      bodycard.className = 'bodycard';

      const name = document.createElement('p');
      name.className = 'name';
      name.textContent = usuario.nombre;

      const img = document.createElement('div');
      img.className = 'foto';
      img.style.backgroundImage = `url(${usuario.foto})`;

      bodycard.appendChild(img)
      bodycard.appendChild(name)

      containerFotos.appendChild(bodycard);
   
      
  
    }
  }
  

  );
}
  



const input = document.getElementById('nombre');
input.addEventListener('input', mostrarNombres);
