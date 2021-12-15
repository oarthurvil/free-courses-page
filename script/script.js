//////////////////////
/// ELEMENTOS DOM ///
////////////////////
const btnMenuMobile = document.querySelector('#botao-menu-mobile');
const menuMobileOptions = document.querySelector('#menu-mobile');


////////////////
/// FUNÇÕES ///
//////////////
const mostraMenuMobile = () =>{    
    if(menuMobileOptions.style.display == 'none'){
        menuMobileOptions.style.display = 'initial';
    } else {
        menuMobileOptions.style.display = 'none';
    };
}





////////////////
/// EVENTOS ///
//////////////
btnMenuMobile.addEventListener('click', mostraMenuMobile);