let btnResultado = document.querySelector('.btnResultado');
let resultado = document.querySelector('#resultadoP');

function quiz() {
    let resposta1 = document.querySelector('.tipoPaisagem').value;
    let resposta2 = document.querySelector('.tipoClima').value;
    let resposta3 = document.querySelector('.tipoExperiencia').value;

    if (resposta1 === "Praias" && resposta2 === "Quente" && resposta3 === "Relaxar") {
        resultado.innerHTML = 'Oceania';
    }
    else if (resposta1 === "Cidades" && resposta2 === "Ameno" || resposta3 === "Modernidade") {
        resultado.innerHTML = 'América';

    }
    else if (resposta1 === "Desertos" && resposta2 === "Quente" && resposta3 === "Aventura") {
        resultado.innerHTML = 'África';

    }
    else if (resposta1 === "Montanhas" && resposta2 === "Frio" || resposta3 === "Modernidade") {
        resultado.innerHTML = 'Ásia';

    }
    else if (resposta1 === "Montanhas" && resposta2 === "Frio" && resposta3 === "Cultura") {
        resultado.innerHTML = 'Europa';

    } else {
        resultado.innerHTML = 'Hmm… não temos um continente exato para você. Que tal explorar o mundo sem fronteiras e descobrir seu destino surpresa?';
    }


}



btnResultado.addEventListener('click', () => {
    resultado.style.color ='#022642';
    quiz();
});


