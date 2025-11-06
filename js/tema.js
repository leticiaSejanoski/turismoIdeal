

const THEME_KEY = 'turismoIdealTema';

// =========================================================
// 1. FUNÇÃO DE ALTERNÂNCIA (Garante o Salvamento)
// =========================================================
function mudaTema(){
    if (document.body) {
        document.body.classList.toggle('claro');
        
        const isClaro = document.body.classList.contains('claro');
        
        // SALVA a preferência
        if (isClaro) {
            localStorage.setItem(THEME_KEY, 'claro');
        } else {
            localStorage.setItem(THEME_KEY, 'escuro');
        }
        console.log("Tema salvo como:", localStorage.getItem(THEME_KEY));
    }
}


// =========================================================
// 2. FUNÇÃO DE INICIALIZAÇÃO (Garante o Carregamento)
// =========================================================
function carregarTemaSalvo() {
    const temaSalvo = localStorage.getItem(THEME_KEY);

    if (document.body) {
        if (temaSalvo) {
            if (temaSalvo === 'claro') {
                document.body.classList.add('claro');
            } else {
                document.body.classList.remove('claro'); // Aplica o modo escuro
            }
        } else {
            // Se não houver tema salvo, define o padrão como "claro" (conforme seu HTML inicial)
            document.body.classList.add('claro');
            localStorage.setItem(THEME_KEY, 'claro');
        }
    }
}

// =========================================================
// 3. EXECUÇÃO GARANTIDA
// =========================================================
// Opção A: Executar assim que o script é lido (mais robusto)
carregarTemaSalvo();

/* Opção B: (Se a Opção A falhar, tente a Opção B)
document.addEventListener('DOMContentLoaded', carregarTemaSalvo);
*/
