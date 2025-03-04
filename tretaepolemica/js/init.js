const players = [];
let currentPlayerIndex = 0;
let pointsToEndGame = 1;
const categories = {
    "Pessoa, Lugar ou Animal": ['Médico', 'Professor', 'Bombeiro', 'Policial', 'Enfermeiro', 'Jogador', 'Dentista', 'Mecânico', 'Pedreiro', 'Cozinheiro', 'Motorista', 'Carteiro', 'Cantor', 'Dançarino', 'Astronauta', 'Pintor', 'Fotógrafo', 'Jardinheiro', 'Padeiro', 'Cabeleireiro', 'Faxineiro', 'Piloto', 'Vendedor', 'Estilista', 'Engenheiro', 'Programador', 'Psicólogo', 'Tradutor', 'Recepcionista', 'Gari', 'Taxista', 'Cachorro', 'Gato', 'Cavalo', 'Pato', 'Vaca', 'Ovelha', 'Galinha', 'Coelho', 'Porco', 'Elefante', 'Leão', 'Tigre', 'Urso', 'Macaco', 'Águia', 'Golfinho', 'Peixe', 'Pinguim', 'Zebra', 'Girafa', 'Jacaré', 'Camelo', 'Canguru', 'Lobo', 'Raposa', 'Lhama', 'Rato', 'Hamster', 'Morcego', 'Beija-flor', 'Pica-pau', 'Caranguejo', 'Sapo', 'Aranha', 'Cavalo-marinho', 'Praia', 'Floresta', 'Montanha', 'Deserto', 'Zoológico', 'Parque', 'Cinema', 'Museu', 'Shopping', 'Restaurante', 'Escola', 'Hospital', 'Aeroporto', 'Estádio', 'Igreja', 'Biblioteca', 'Mercado', 'Praça', 'Lago', 'Rio', 'Cachoeira', 'Jardim', 'Igreja', 'Estacionamento'],
    "Objeto": ['Chave', 'Telefone', 'Guarda-chuva', 'Óculos', 'Bola', 'Cadeira', 'Mesa', 'Relógio', 'Livro', 'Caneta', 'Lápis', 'Borracha', 'Tesoura', 'Colher', 'Garfo', 'Faca', 'Copo', 'Prato', 'Panela', 'Chaveiro', 'Espelho', 'Caderno', 'Mochila', 'Bolsa', 'Sapato', 'Boné', 'Chapéu', 'Meia', 'Cinto', 'Roupas', 'Camisa', 'Calça', 'Jaqueta', 'Luva', 'Lenço', 'Toalha', 'Almofada', 'Cobertor', 'Travesseiro', 'Pente', 'Escova de cabelo', 'Sabonete', 'Shampoo', 'Escova de dentes', 'Pasta de dente', 'Secador de cabelo', 'Aspirador de pó', 'Ventilador', 'Ar-condicionado', 'Frigideira', 'Micro-ondas', 'Fogão', 'Geladeira', 'Liquidificador', 'Batedeira', 'Cafeteira', 'Torradeira', 'Geladeira', 'Ferro de passar', 'Fogão', 'Luminária', 'Candeeiro', 'Abajur', 'Rádio', 'Televisão', 'Computador', 'Celular', 'Carregador', 'Fone de ouvido', 'Caixa de som', 'Garrafa', 'Almofada', 'Lixeira', 'Martelo', 'Serra', 'Pregos', 'Parafuso', 'Fita', 'Supercola', 'Linha', 'Agulha', 'Botão', 'Alfinete', 'Grampo', 'Saca-rolhas', 'Abridor de garrafa', 'Máquina fotográfica', 'Binóculos', 'Lanterna', 'Palito'],
    "Ação": ['Comer', 'Dormir', 'Correr', 'Nadar', 'Pular', 'Andar', 'Falar ao telefone', 'Escrever', 'Ler', 'Pintar', 'Cortar cabelo', 'Jogar futebol', 'Dançar', 'Tocar guitarra', 'Tocar piano', 'Lavar as mãos', 'Escovar os dentes', 'Tomar banho', 'Cantar', 'Dirigir', 'Voar', 'Lavar roupa', 'Limpar a casa', 'Dar comida ao cachorro', 'Brincar de esconde-esconde', 'Jogar basquete', 'Lutar', 'Andar de bicicleta', 'Passar roupa', 'Fazer café', 'Fazer uma torta', 'Trocar de roupa', 'Pintar uma parede', 'Cozinhar', 'Jogar vôlei', 'Empurrar um carrinho de bebê', 'Amarrar o sapato', 'Descer uma ladeira', 'Subir uma escada', 'Saltar de paraquedas', 'Pegar fogo', 'Rezar', 'Beijar', 'Abraçar', 'Fazer yoga', 'Patinar no gelo', 'Brincar de corda', 'Andar de skate', 'Fazer um passeio', 'Tirar uma foto', 'Chorar', 'Rir', 'Dar um presente', 'Receber um presente', 'Pedir ajuda', 'Levantar pesos', 'Fumar', 'Atirar', 'Ficar com raiva', 'Surpreender alguém', 'Tocar violão', 'Tocar bateria', 'Pegar uma carona', 'Apagar uma vela', 'Dar uma cambalhota', 'Subir uma árvore', 'Lavar o carro', 'Colocar uma coroa', 'Cortar a grama', 'Pintar as unhas', 'Lutar boxe', 'Tocar trompete', 'Fazer mágica', 'Pular corda', 'Rastejar', 'Empurrar um carrinho de supermercado', 'Praticar artes marciais', 'Arrumar a cama', 'Cortar legumes', 'Trocar a fralda', 'Jogo de futebol americano', 'Balançar um bebê', 'Colocar maquiagem', 'Passear com um cachorro', 'Tomar sorvete', 'Fazer exercícios', 'Dar um trote', 'Ir ao médico', 'Fingir estar bebendo', 'Fazer um pedido de casamento'],
    "Filme, Livro, Jogo, Esporte ou Artista": ['O Rei Leão', 'Jurassic Park', 'Star Wars', 'Vingadores', 'Titanic', 'O Mágico de Oz', 'E.T. – O Extraterrestre', 'Harry Potter', 'Batman', 'Homem-Aranha', 'O Senhor dos Anéis', 'A Bela e a Fera', 'Frozen', 'A Noviça Rebelde', 'Procurando Nemo', 'Mulan', 'Piratas do Caribe', 'A Pequena Sereia', 'Moana', 'A Fantástica Fábrica de Chocolate', 'Kung Fu Panda', 'O Exterminador do Futuro', 'O Homem de Ferro', 'Matrix', 'Pantera Negra', 'Rei Arthur', 'Enrolados', 'Shrek', 'Alice no País das Maravilhas', 'Dom Casmurro', 'O Pequeno Príncipe', 'O Hobbit', 'Senhor dos Anéis', 'Moby Dick', 'O Alquimista', 'O Código Da Vinci', 'A Menina que Roubava Livros', 'Orgulho e Preconceito', 'Drácula', 'As Crônicas de Nárnia', 'O Diário de Anne Frank', 'Xadrez', 'Banco Imobiliário', 'Paciência', 'Jogo da Velha', 'Damas', 'Jenga', 'Detetive', 'Pictionary', 'Twister', 'Uno', 'Dominó', 'Pac-Man', 'Super Mario', 'Minecraft', 'Futebol', 'Basquete', 'Vôlei', 'Tênis', 'Natação', 'Corrida', 'Ginástica', 'Boxe', 'Ciclismo', 'Futebol Americano', 'Skate', 'Surf', 'Esqui', 'Golfe', 'Hipismo', 'Handebol', 'Atletismo', 'Patinação no gelo', 'Beisebol', 'Michael Jackson', 'Madonna', 'Elvis Presley', 'Beyoncé', 'Freddie Mercury', 'Shakira', 'Pablo Picasso', 'Lady Gaga', 'Bob Marley', 'Marilyn Monroe', 'Justin Bieber', 'Adele', 'David Bowie', 'Madonna', 'Cher', 'Will Smith'],
    "Difícil": ['Filosofia', 'Paradoxo', 'Eletromagnetismo', 'Abissal', 'Biocompatível', 'Quimera', 'Onomatopéia', 'Psicológico', 'Multidisciplinar', 'Teletransporte', 'Esquizofrenia', 'Subconsciente', 'Alienígena', 'Metamorfose', 'Parafuso', 'Contemplativo', 'Confusão', 'Metafísica', 'Arquétipo', 'Distração', 'Suficiência', 'Flutuante', 'Epifania', 'Cibernético', 'Equilíbrio', 'Subterrâneo', 'Eletricidade', 'Fagulha', 'Sinestesia', 'Transcendência', 'Microcosmo', 'Telescópio', 'Naufrágio', 'Curiosidade', 'Desconstrução', 'Ambiguidade', 'Comutação', 'Parafina', 'Simultâneo', 'Caleidoscópio', 'Insubordinado', 'Oxidação', 'Inexorável', 'Distopia', 'Cibernético', 'Enigma', 'Metáfora', 'Navegação', 'Submissão', 'Definição', 'Reflexão', 'Genética', 'Subconsciente', 'Imperceptível', 'Renovação', 'Decadência', 'Dispersão', 'Oportunidade', 'Desentendimento', 'Tangível', 'Descoberta', 'Alquimia', 'Pós-modernismo', 'Desmembramento', 'Perspectiva', 'Modificação', 'Sensacionalismo', 'Caráter', 'Sincronia', 'Cálculo', 'Apreensão', 'Mnemônica', 'Equivocação', 'Criação', 'Precariedade', 'Ilusão', 'Expansão', 'Desespero', 'Abissal', 'Transcendental', 'Contumaz', 'Altruísmo', 'Metamorfose', 'Sincretismo', 'Neurótico', 'Dispersão', 'Geração', 'Simetria', 'Contradição', 'Consequência']
};
let currentWord = '';
let currentCategory = '';
let roundPoints = {};

function addPlayer() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName !== "") {
        players.push(playerName);
        roundPoints[playerName] = 0;
        document.getElementById('playerName').value = ''; // Clear input
        updatePodium();
    }
}

function startGame() {
    if (players.length < 2) {
        alert("É necessário pelo menos 2 jogadores para iniciar o jogo!");
        return;
    }

    pointsToEndGame = parseInt(document.getElementById('pointsTarget').value);

    document.querySelector('.player-names').style.display = 'none';
    document.querySelector('.points-target').style.display = 'none';
    document.getElementById('startGameButton').style.display = 'none';

    document.querySelector('.game-section').style.display = 'block';

    players.forEach(player => {
        roundPoints[player] = 0;
    });

    updatePodium();
    showCurrentPlayer();
}


function showRandomWord() {
    const randomCategory = Object.keys(categories)[Math.floor(Math.random() * Object.keys(categories).length)];
    const randomWord = categories[randomCategory][Math.floor(Math.random() * categories[randomCategory].length)];
    currentWord = randomWord;
    currentCategory = randomCategory;

    document.getElementById('wordDisplay').innerText = `Sua palavra da categoria ${currentCategory} é: ${currentWord}!`;
    document.getElementById('showWordButton').style.display = 'none';
    showPointButtons();
}

function showPointButtons() {
    const pointButtonsHTML = `
        <button class="green-button" onclick="markPoint(true)">Certo</button>
        <button class="red-button" onclick="markPoint(false)">Errado</button>
    `;
    document.getElementById('pointButtons').innerHTML = pointButtonsHTML;
}

function markPoint(isPoint) {
    const currentPlayer = players[currentPlayerIndex];
    if (isPoint) {
        roundPoints[currentPlayer]++;
    }

    document.getElementById('pointButtons').innerHTML = '';
    document.getElementById('nextPlayerButton').style.display = 'block';

    updatePodium();

    if (roundPoints[currentPlayer] >= pointsToEndGame) {
        endGame();
    }
}

function nextPlayer() {
    currentPlayerIndex++;
    
    if (currentPlayerIndex < players.length) {
        document.getElementById('nextPlayerButton').style.display = 'none';
        document.getElementById('showWordButton').style.display = 'block';
        document.getElementById('wordDisplay').innerText = '';
        showCurrentPlayer();
    } else {
        currentPlayerIndex = 0;
        
        document.getElementById('nextPlayerButton').style.display = 'none';
        document.getElementById('showWordButton').style.display = 'block';
        document.getElementById('wordDisplay').innerText = '';
        showCurrentPlayer();
    }
}

function showCurrentPlayer() {
    const currentPlayer = players[currentPlayerIndex];
    document.getElementById('currentPlayer').innerText = `É a vez de ${currentPlayer}!`;
}

function updatePodium() {
    const sortedPlayers = Object.keys(roundPoints).sort((a, b) => roundPoints[b] - roundPoints[a]);

    let podiumHTML = '';
    sortedPlayers.forEach(player => {
        podiumHTML += `<tr><td>${player}</td><td>${roundPoints[player]}</td></tr>`;
    });

    document.querySelector('#podiumTable tbody').innerHTML = podiumHTML;
}

function endGame() {
    let winner = '';
    let maxPoints = 0;
    for (let player in roundPoints) {
        if (roundPoints[player] > maxPoints) {
            maxPoints = roundPoints[player];
            winner = player;
        }
    }
    document.getElementById('nextPlayerButton').style.display = 'none';
    document.getElementById('showWordButton').style.display = 'none';
    document.getElementById('wordDisplay').style.display = 'none';
    document.getElementById('currentPlayer').style.display = 'none';
    document.getElementById('refresh').style.display = 'block';
    alert(`Fim de jogo! ${winner} ganhou com ${maxPoints} pontos!`);
}

function changeValue(amount) {
    var input = document.getElementById('pointsTarget');
    var currentValue = parseInt(input.value);
    input.value = currentValue + amount;
}