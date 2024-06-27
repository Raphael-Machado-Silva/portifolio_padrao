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