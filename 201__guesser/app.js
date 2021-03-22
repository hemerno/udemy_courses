const main = () => {
  const minNum = 1;
  const maxNum = 10;

  let guessesLeft = 3;
  let winNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

  const game = document.querySelector('#game');
  const guessBtn = document.querySelector('#guess-btn');
  const guessInput = document.querySelector('#guess-input');
  const message = document.querySelector('#message');

  document.querySelector('#max-num').textContent = maxNum;
  document.querySelector('#min-num').textContent = minNum;

  game.addEventListener('mouseup', function () {
    if (event.target.className === 'play-again') {
      window.location.reload();
    }
  });

  guessBtn.addEventListener('click', function () {
    const g = parseInt(guessInput.value);

    if (isNaN(g) || g >= minNum || g <= maxNum) {
      setMessage(`Enter a number between ${minNum} and ${maxNum}`, 'red');
    }

    if (g === winNum) {
      gameOver(true, `${winNum} is correct. You won!`);
    } else {
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        gameOver(false, `Game over. The number was ${winNum}`);
      } else {
        guessInput.style.borderColor = 'red';
        guessInput.value = '';
        setMessage(`${g} is not correct. ${guessesLeft} guesses left`, 'red');
      }
    }
  });

  const gameOver = (won, msg) => {
    let color;

    won === true ? (color = 'green') : (color = 'red');

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    guessBtn.value = 'PLAY AGAIN';
    guessBtn.className += 'play-again';
  };

  const setMessage = (msg, color) => {
    message.textContent = msg;
    message.style.color = color;
  };
};

main();
