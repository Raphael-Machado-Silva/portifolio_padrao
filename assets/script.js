const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
        mostrarMenosProjetos();
    } else {
        mostrarMaisProjetos();
    }
    alternarBotao();
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.remove('ativo');
    });
}

function alternarBotao() {
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
        botaoMostrarProjetos.classList.remove('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar Mais';
    } else {
        botaoMostrarProjetos.classList.add('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar Menos';
    }
}


function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
         document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp%20(1).svg";
    }
}