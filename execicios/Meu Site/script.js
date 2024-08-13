function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

function initMap() {
    // Inicialize o mapa do Google Maps
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.550520, lng: -46.633308},
        zoom: 15
    });
}

function openWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=5514996962892', '_blank');
}

document.querySelector('.hamburguer').addEventListener('click', toggleMenu);


let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 5) {
        contador = 1;
    }

}, 5000);
    function initMap() {
        // Coordenadas do endereço
        var endereco = {lat: -22.9035, lng: -43.2096}; // Exemplo de coordenadas (Rio de Janeiro)

        // Opções do mapa
        var mapOptions = {
            zoom: 15, // Zoom inicial
            center: endereco // Centro do mapa nas coordenadas do endereço
        };

        // Criar mapa
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Marcador do endereço
        var marker = new google.maps.Marker({
            position: endereco,
            map: map,
            title: 'Localização da Perfil Construtora' // Título do marcador ao passar o mouse
        });
    }
