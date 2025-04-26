function fundo_logo() {
    // controla a mudanca de cor do cabecalho 
    const cabecalho = document.getElementById('cabecalho');
    cabecalho.style.backgroundImage = "url('/Users/rafaelandre/Desktop/Faculdade/Html+css/imovel guide/predios.png')"; // Certifique-se de que a imagem está na mesma pasta que o HTML
    cabecalho.style.backgroundSize = '100%';
    cabecalho.style.backgroundPosition = 'right bottom    ';
    cabecalho.style.backgroundRepeat = 'no-repeat';
    cabecalho.style.backgroundColor = 'white';

// crontrola a mundaca de fundo com animacao
    const cabecalho2 = document.getElementById('boddy');
 
    cabecalho2.style.position = 'relative ' 
    cabecalho2.style.bottom = '0';
    cabecalho2.style.left = '0';
    cabecalho2.style.width = '100%';
    cabecalho2.style.height = '100%';
    cabecalho2.style.backgroundImage = "url('predios2.webp')";
    cabecalho2.style.backgroundSize = 'cover';
    cabecalho2.style.backgroundRepeat = 'no-repeat';
    cabecalho2.style.backgroundPosition = 'center top';
    cabecalho2.style.zIndex = '-1';
    cabecalho2.style.transition = 'background-position 2s ease-in-out';
    cabecalho2.style.backgroundRepeat = 'no-repeat';
    cabecalho2.style.backgroundColor = '#1c2752';
// mundanca de cor dos texto de menu
    const menu_texto = document.getElementsByClassName('menu_texts');
    for (let i = 0; i < menu_texto.length; i++) {
        menu_texto[i].style.color = 'black';
    }

//   reseta tudo o apos o hoover

    }

    function fundo_logo2(cor) {
            const cabecalho = document.getElementById('cabecalho');
            cabecalho.style.background = cor;
            cabecalho.style.backgroundImage = ''; 
            



            const cabecalho2 = document.getElementById('boddy');
            cabecalho2.style.backgroundColor = 'white';
            cabecalho2.style.backgroundImage = ''; 
            cabecalho2.style.position = ' ' ;
            cabecalho2.style.bottom = '';
            cabecalho2.style.left = '';
            cabecalho2.style.width = '';
            cabecalho2.style.height = '';
            cabecalho2.style.backgroundImage = "";
            cabecalho2.style.backgroundSize = '';
            cabecalho2.style.backgroundRepeat = '';
            cabecalho2.style.backgroundPosition = '';
            cabecalho2.style.zIndex = '';
            cabecalho2.style.transition = '';
           
            const menu_texto = document.getElementsByClassName('menu_texts');
            for (let i = 0; i < menu_texto.length; i++) {
                menu_texto[i].style.color = 'white';
            }

        }
