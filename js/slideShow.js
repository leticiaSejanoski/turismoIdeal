let divGaleria1 = document.querySelector('.img1');
let divGaleria2 = document.querySelector('.img2');
let divGaleria3 = document.querySelector('.img3');

let imagens = [
    'img/imgGaleria1.jpg',
    'img/imgGaleria2.jpeg',
    'img/imgGaleria3.jpg',
    'img/imgGaleria4.jpg',
    'img/imgGaleria5.jpg',
    'img/imgGaleria6.jpg',
    'img/imgGaleria7.jpg',
    'img/imgGaleria8.jpg',
    'img/imgGaleria9.jpg'];

    let i = 0;
    
    setInterval(function() {
        divGaleria1.style.opacity = 0;
        divGaleria2.style.opacity = 0;
        divGaleria3.style.opacity = 0;

    //faz as imagens aparecerem suavemente
    setTimeout(function () {
        divGaleria1.src = imagens[i % imagens.length];
        divGaleria2.src = imagens[(i + 1) % imagens.length];
        divGaleria3.src = imagens[(i + 2) % imagens.length];

        divGaleria1.style.opacity = 1;
        divGaleria2.style.opacity = 1;
        divGaleria3.style.opacity = 1;
    }, 500);
        i+= 3;
    }, 3000);
