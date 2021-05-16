let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelector('#buttons-container button');
let messagemContainer = document.querySelector('#message');
let messagemText = document.querySelector('#message p');
let secondePlayer;

//Contador

let player1 = 0;
let player2 = 0;


// Adcionando o evento de click
for (let index = 0; index < boxes.length; index++) {

    boxes[index].addEventListener("click", function() {

        let el = checkEl(player1, player2);

        //verifica se tem X ou O

        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);
    
            // Computar jogadas
    
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            // checa quem venceu

            checkWinConditione();

        }

    });
    
}


// quem vai jogar
function checkEl(player1, player2) {
    if(player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }
    return el;

}

// ve quem ganhou!
function checkWinConditione() {
    
    let b1 = document.getElementById('block1');
    let b2 = document.getElementById('block2');
    let b3 = document.getElementById('block3');
    let b4 = document.getElementById('block4');
    let b5 = document.getElementById('block5');
    let b6 = document.getElementById('block6');
    let b7 = document.getElementById('block7');
    let b8 = document.getElementById('block8');
    let b9 = document.getElementById('block9');

    // horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length) {
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length) {
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    // vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length) {
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            // o win
            declareWiner('x');
        }

    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length) {
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            // x win
            declareWiner('x');

        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            // o win
            declareWiner('o');
        }

    }

    // deu velha

    let cont = 0;

    for (let index = 0; index < boxes.length; index++) {
        
        if(boxes[index].childNodes[0] != undefined) {
            cont++;
        }
        
    }

    if(cont == 9) {
        declareWiner('Deu velha')
    }

}

// limpa o jogo, declara o vencedor e atualiza o placar

function declareWiner(winner) {
    
    let scoreboadX = document.querySelector('#scoreboard-1');
    let scoreboadO = document.querySelector('#scoreboard-2');
    let msg = '';

    if(winner == 'x') {
        scoreboadX.textContent = parseInt(scoreboadX.textContent) + 1;
        msg = 'O jogado X venceu!';
    } else if(winner == 'o') {
        scoreboadO.textContent = parseInt(scoreboadO.textContent) + 1;
        msg = 'O jogado O venceu!';
    } else {
        msg = 'Deu Velha!';
    }

    // Exibe MSG
    messagemText.innerHTML = msg;
    messagemContainer.classList.remove('hide');

    // esconde msg
    setTimeout(function(){
        messagemContainer.classList.add('hide');
    }, 3000);

    // zerar as jogadas
    player1 = 0;
    player2 = 0;

    // remover x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let index = 0; index < boxesToRemove.length; index++) {
        
        setTimeout(function(){
            boxesToRemove[index].parentNode.removeChild(boxesToRemove[index]);
        },3000)
        
        
    }


}

