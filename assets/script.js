// Seleciona o botão que controla a exibição dos projetos e as seções de projetos que não estão ativas
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

// Adiciona um event listener ao botão para alternar entre mostrar e esconder os projetos
botaoMostrarProjetos.addEventListener('click', () => {
    // Verifica se o botão já tem a classe 'mostrando' para saber se os projetos estão visíveis ou não
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
        mostrarMenosProjetos(); // Chama a função para esconder os projetos
    } else {
        mostrarMaisProjetos(); // Chama a função para mostrar os projetos
    }
    alternarBotao(); // Alterna o texto do botão de acordo com o estado atual
});

// Função para mostrar os projetos inativos
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo'); // Adiciona a classe 'ativo' aos projetos para torná-los visíveis
    });
}

// Função para esconder os projetos inativos
function mostrarMenosProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.remove('ativo'); // Remove a classe 'ativo' para esconder os projetos
    });
}

// Função para alternar o texto e a classe do botão
function alternarBotao() {
    if (botaoMostrarProjetos.classList.contains('mostrando')) {
        botaoMostrarProjetos.classList.remove('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar Mais'; // Altera o texto do botão quando está ocultando os projetos
    } else {
        botaoMostrarProjetos.classList.add('mostrando');
        botaoMostrarProjetos.textContent = 'Mostrar Menos'; // Altera o texto do botão quando está mostrando os projetos
    }
}

// Função para mostrar e esconder o menu mobile ao clicar no ícone de menu
function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    // Verifica se o menu já está aberto para alternar entre aberto e fechado
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // Fecha o menu
        icon.src = "assets/img/menu_white_36dp.svg"; // Altera o ícone para o menu
    } else {
        menuMobile.classList.add('open'); // Abre o menu
        icon.src = "assets/img/close_white_36dp%20(1).svg"; // Altera o ícone para fechar o menu
    }
}

// Adiciona um evento de redimensionamento da janela para manter o estado do menu em telas maiores
window.addEventListener('resize', () => {
    const menuMobile = document.querySelector('.mobile-menu');
    if (window.innerWidth > 935) {
        menuMobile.classList.remove('open'); // Fecha o menu em telas maiores
        menuMobile.style.display = 'none'; // Garante que o menu fica oculto
    }
});

// HABILIDADES FUNÇÕES
// Adiciona um event listener a cada cabeçalho de habilidade para alternar a visibilidade da lista de habilidades
document.querySelectorAll('.skill-header').forEach(header => {
    header.addEventListener('click', () => {
        const skillList = header.nextElementSibling; // Seleciona a lista de habilidades associada ao cabeçalho
        const isVisible = skillList.classList.contains('open'); // Verifica se a lista está visível

        // Alterna a visibilidade da lista de habilidades
        if (isVisible) {
            skillList.classList.remove('open'); // Esconde a lista
            header.querySelector('span').innerHTML = '&#9660;'; // Muda a seta para baixo
        } else {
            skillList.classList.add('open'); // Mostra a lista
            header.querySelector('span').innerHTML = '&#9650;'; // Muda a seta para cima
        }
    });
});

// Função para mostrar e esconder a barra de progresso ao entrar e sair da viewport
function toggleProgressBar(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe 'show' quando o elemento entra na viewport
        } else {
            entry.target.classList.remove('show'); // Remove a classe 'show' quando o elemento sai da viewport
        }
    });
}

// Cria um IntersectionObserver para observar as barras de progresso
const progressObserver = new IntersectionObserver(toggleProgressBar, {
    threshold: 0.5 // Define a sensibilidade para 50% do elemento visível
});

// Seleciona todas as barras de progresso e as observa
document.querySelectorAll('.line').forEach(line => {
    progressObserver.observe(line);
});

// Função para verificar se um elemento está visível na viewport (usada em outra parte do código)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Função para adicionar ou remover a classe 'visible' aos elementos que entram na viewport
function onScroll() {
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        if (isElementInViewport(line)) {
            line.classList.add('visible'); // Adiciona a classe 'visible' se o elemento estiver visível
        } else {
            line.classList.remove('visible'); // Remove a classe 'visible' se o elemento não estiver visível
        }
    });
}

// Adiciona eventos para verificar o estado dos elementos na tela ao rolar a página e carregar a página
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll); // Garante que a função é chamada também quando a página é carregada
