// IIFE = Module patron

(()=>{
  'use strict'

  let deck = [],
      playersPoints = []; // [player1, player2, playerN = CPU]

  const types = ['C','D','H','S'],
        capitals = ['A','J','Q','K'];
  
  //Refs HTML
  const btnNew = document.querySelector('#btnNew'),
        btnCall = document.querySelector('#btnCall'),
        btnStop = document.querySelector('#btnStop');

  const scoreList = document.querySelectorAll('small'),
        divPlayersCarts = document.querySelectorAll('.divCarts');


  // Initialized Game
  const initializedGame = ( numPlayers = 2 ) => {
    deck = createDeck();
    for( let i = 0; i < numPlayers; i++ ){
      playersPoints.push(0);
    };
  };

  //Function to create Deck
  const createDeck = () => {
    deck=[];
    for( let i = 2; i <= 10; i++ ){
      for (let type of types){
        deck.push( i + type )
      }
    }
    for( let cap of capitals){
      for (let type of types){
        deck.push( cap + type)
      }
    }
    return _.shuffle(deck);
  };

  // Function to call card
  const callACart = ( ) => {
    if (deck.length === 0) throw 'Deck empty';
    return deck.pop();
  };

  // Function to get card value
  const cartValue = ( cart ) => {
    const value = cart.substring(0, cart.length - 1)
    return (!isNaN(value)) ? value * 1 : (value === 'A') ? 11 : 10
  };

  // Player 2 logic (CPU)
  // turn: 0 = Player1, 1=player2, ..., playerN = CPU
  const accumulatePoints = ( cart, turn ) => {
    playersPoints[turn] = playersPoints[turn] + cartValue( cart );
    scoreList[turn].innerText = playersPoints[turn];
    return playersPoints[turn];
  };

  const createCart = ( cart, turn ) => {
    const imgCart = document.createElement('img');
    imgCart.src = `./assets/carts/${cart}.png`; 
    imgCart.classList.add('cart')
    divPlayersCarts[turn].append(imgCart);
  };

  const cpuTurn = ( minScore ) => {

    let scoreCPU = 0;

    do {
      const cart = callACart();
      scoreCPU = accumulatePoints(cart, playersPoints.length - 1)
      createCart( cart, playersPoints.length - 1 );
      
      if(minScore > 21){
        break
      };

    } while( (scoreCPU < minScore) && (minScore <= 21 ) );

    setTimeout( ()=>{
      if(scoreCPU === minScore){
        alert(`Both player have the same Score ${minScore}`)
      }else if (minScore > 21 ){
        alert(`CPU win!`)
      } else if( scoreCPU > 21){
        alert(`Congratulations you win!`)
      } else {
        alert('CPU win!')
      }
    }, 500)

  }

  // Events
  btnCall.addEventListener('click', ()=>{

    const cart = callACart();
    const scorePlayer1 =  accumulatePoints( cart, 0);
    createCart( cart, 0);
  

    //Handle points to lose, win 
    if( scorePlayer1 > 21){
      btnCall.disabled = true;
      btnStop.disabled = true;
      cpuTurn(scorePlayer1);

    } else if( scorePlayer1 === 21) {
      btnCall.disabled = true;
      btnStop.disabled = true;

    }
  });

  btnStop.addEventListener('click', ()=>{

    btnCall.disabled = true;
    btnStop.disabled = true;
    cpuTurn(scorePlayer1)
  })

  btnNew.addEventListener('click', ()=>{

    console.clear();
    initializedGame();
    // deck = [];
    // deck = createDeck();
    // scorePlayer1 = 0;
    // scoreCPU = 0;

    // scoreList[0].innerText = 0;
    // scoreList[1].innerText = 0;

    // containerCartsP1.innerHTML = '';
    // containerCartsP2.innerHTML = '';

    // btnCall.disabled = false;
    // btnStop.disabled = false;
  })

})()