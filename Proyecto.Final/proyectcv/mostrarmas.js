
let hidetext_bton = document.getElementById('hidetext_bton');

let hidetext = document.getElementById ('hidetext');


hidetext_bton.addEventListener('click', toggleText);

function toggleText() {
    hidetext.classList.toggle('show');

    if(hidetext.classList.contains ('show')) {
      hidetext_bton.innerHTML = 'Mostrar menos';

}
    else {
        hidetext_bton.innerHTML = 'Mostrar mas';
    }
}
//hidetext_btn= esconder_boton
//hidetext= esconder//