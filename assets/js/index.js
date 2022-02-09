(()=>{
  'use strict'
  let deck = [];
  const types = ['C','D','H','S'],
        capitals = ['A','J','Q','K'];
  let scorePlayer1 = 0;
  let scorePlayer2 = 0;

  //Refs HTML
  const btnNew = document.querySelector('#btnNew'),
        btnCall = document.querySelector('#btnCall'),
        btnStop = document.querySelector('#btnStop');
  const scoreList = document.querySelectorAll('small'),
        containerCartsP1 = document.querySelector('#playerOne'),
        containerCartsP2 = document.querySelector('#playerTwo');

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

  // Function to take a card
  const callACart = ( ) => {
    deck = createDeck();

    if (deck.length === 0) throw 'Deck empty';
    return deck.shift();
  };

  const cartValue = ( cart ) => {
    const value = cart.substring(0, cart.length - 1)
    return (!isNaN(value)) ? value * 1 : (value === 'A') ? 11 : 10
  };

  // Player 2 logic
  const player2Turn = ( minScore) => {
    
    do {
      const cart = callACart();
      scorePlayer2 = scorePlayer2 + cartValue(cart);

      // Show points
      scoreList[1].innerText = scorePlayer2;

      // Show carts in table troughs containerCartsP1
      const imgCart = document.createElement('img');
      imgCart.src = `./assets/carts/${cart}.png`; // dynamic src
      imgCart.classList.add('cart') // cart style class applied
      containerCartsP2.append(imgCart) // append the new cart into container carts Plater One

      if(minScore > 21){
        break
      };

    } while( (scorePlayer2 < minScore) && (minScore <= 21 ) );

    setTimeout( ()=>{
      if(scorePlayer2 === minScore){
        alert(`Both player have the same Score ${minScore}`)
      }else if (minScore > 21 ){
        alert(`CPU win!`)
      } else if( scorePlayer2 > 21){
        alert(`Congratulations you win!`)
      } else {
        alert('CPU win!')
      }
    }, 500)

  }

  // Events
  btnCall.addEventListener('click', ()=>{
    const cart = callACart();
    scorePlayer1 = scorePlayer1 + cartValue(cart);

    // Show points
    scoreList[0].innerText = scorePlayer1;

    // Show carts in table troughs containerCartsP1
    const imgCart = document.createElement('img');
    imgCart.src = `./assets/carts/${cart}.png`; // dynamic src
    imgCart.classList.add('cart') // cart style class applied
    containerCartsP1.append(imgCart) // append the new cart into container carts Plater One

    //Handle points to lose, win 
    if( scorePlayer1 > 21){
      btnCall.disabled = true;
      btnStop.disabled = true;
      player2Turn(scorePlayer1);

    } else if( scorePlayer1 === 21) {
      btnCall.disabled = true;
      btnStop.disabled = true;

    }
  });

  btnStop.addEventListener('click', ()=>{
    btnCall.disabled = true;
    btnStop.disabled = true;
    player2Turn(scorePlayer1)
  })

  btnNew.addEventListener('click', ()=>{
    deck = [];
    deck = createDeck();
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scoreList[0].innerText = 0;
    scoreList[1].innerText = 0;
    containerCartsP1.innerHTML = '';
    containerCartsP2.innerHTML = '';
    btnCall.disabled = false;
    btnStop.disabled = false;
  })

})()