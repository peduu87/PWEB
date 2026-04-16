const gameEmojis = ['👊', '🖐️', '✌️'];

function getPlayerChoice(event) {
    return gameEmojis[parseInt(event.target.id) - 1];
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * gameEmojis.length);
    return gameEmojis[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    document.getElementById('player-choice').textContent = playerChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    document.getElementById('player-choice').parentElement.style.backgroundColor = '';
    document.getElementById('computer-choice').parentElement.style.backgroundColor = '';


    if (playerChoice == computerChoice) {
        console.log('Empate!');
        document.getElementById('computer-choice').style.backgroundColor = 'white';
        document.getElementById('player-choice').style.backgroundColor = 'white';
    }
    else if (
        (playerChoice === '👊' && computerChoice === '✌️') ||
        (playerChoice === '🖐️' && computerChoice === '👊') ||
        (playerChoice === '✌️' && computerChoice === '🖐️')
    ) {
        document.getElementById('player-choice').style.backgroundColor = 'wheat';
        document.getElementById('computer-choice').style.backgroundColor = 'white';
    } else {
        document.getElementById('computer-choice').style.backgroundColor = 'wheat';
        document.getElementById('player-choice').style.backgroundColor = 'white';
    }
}