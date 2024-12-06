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

function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    // Adiciona ou remove a classe 'open' corretamente
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "assets/img/close_white_36dp%20(1).svg";
    }
}

// Adiciona um evento para redimensionamento de tela para sincronizar o estado
window.addEventListener('resize', () => {
    const menuMobile = document.querySelector('.mobile-menu');
    if (window.innerWidth > 935) {
        menuMobile.classList.remove('open'); // Remove 'open' em telas maiores
        menuMobile.style.display = 'none';  // Garante que fica oculto
    }
});

// HABILIDADES FUNÇÕES
document.querySelectorAll('.skill-header').forEach(header => {
    header.addEventListener('click', () => {
        const skillList = header.nextElementSibling;
        const isVisible = skillList.classList.contains('open');

        // Alterna a visibilidade
        if (isVisible) {
            skillList.classList.remove('open');
            header.querySelector('span').innerHTML = '&#9660;'; // Seta para baixo
        } else {
            skillList.classList.add('open');
            header.querySelector('span').innerHTML = '&#9650;'; // Seta para cima
        }
    });
});

// Função para mostrar e esconder a barra de progresso ao entrar e sair da viewport
function toggleProgressBar(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}

// Configuração do observer para a barra de progresso
const progressObserver = new IntersectionObserver(toggleProgressBar, {
    threshold: 0.5 // Ajuste para controlar a sensibilidade da visibilidade
});

// Seleciona todas as barras de progresso e as observa
document.querySelectorAll('.line').forEach(line => {
    progressObserver.observe(line);
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function onScroll() {
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        if (isElementInViewport(line)) {
            line.classList.add('visible');
        } else {
            line.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll); // Trigger on load in case the element is already in view
