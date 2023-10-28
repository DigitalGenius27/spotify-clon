const topBar = document.querySelector('.topbar')

// cambiar capacidad con scroll

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        topBar.classList.add('transparent');
    }else{
        topBar.classList.remove('transparent');
    }
});

// neva variable para almacenar altura de topbar
let topbarHeight = topBar.offsetHeight;
// agregemos un paddingtop basado en la altura al main-content o el coneido principal
const mainContent = document.querySelector('.main-content')
mainContent.style.paddingTop = `${topbarHeight + 20}px`;

// boton play

const containerConcentracion = document.querySelector('.card-concentracion')
const containerSpotifyPlaylist = document.querySelector('.card-spotify-playlist')
// funcion que se va a repetir

const createButton = card => {
    // crear el boton
    const button = document.createElement('button');
    button.innerHTML = `<i class="fa-solid fa-play"></i>`;

    // agregar el boton al elemento hijo
    card.appendChild(button);

    // ocultar el boton inicialmente
    button.style.display = 'none';
    button.classList.add('btn-play');
    
    // agregamos un evento hover a este elemento
    //se necesita cunado el mouse entre y sale
    card.addEventListener('mouseover', () => {
        button.style.display = 'block';
    });
    card.addEventListener('mouseout', () => {
        button.style.display = 'none'
    });
};

// usaremos lafuncion en las dos filas contenedores
containerConcentracion.forEach(card => {
	createButton(card);
});

containerSpotifyPlaylist.forEach(card => {
	createButton(card);
});