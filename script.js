// Selecionar os elementos
const giftIcon = document.getElementById('gift-icon');
const giftScreen = document.getElementById('gift-screen');
const crosswordContainer = document.getElementById('crossword-container');

// Adicionar evento de clique no presente
giftIcon.addEventListener('click', () => {
  // Ocultar a tela inicial
  giftScreen.style.opacity = '0';
  giftScreen.style.transition = 'opacity 1s';
  
  setTimeout(() => {
    giftScreen.style.display = 'none'; // Esconde completamente após a transição
    // Mostrar a cruzadinha com animação
    crosswordContainer.classList.remove('hidden');
    crosswordContainer.classList.add('show');
  }, 1000); // Aguarda a transição de 1 segundo antes de trocar
});

// Função para criar confetes
function createConfetti() {
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 100; i++) { // 100 confetes
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Definir posições e cores aleatórias
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDuration = `${Math.random() * 1 + 2}s`; // duração aleatória
      confetti.style.animationDelay = `${Math.random() * 0.5}s`; // atraso aleatório
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      
      container.appendChild(confetti);
    }
}

document.getElementById('check-btn').addEventListener('click', () => {
  const words = document.querySelectorAll('.word');
  let allCorrect = true;

  words.forEach((word) => {
    const answer = word.dataset.answer.toLowerCase();
    const inputs = word.querySelectorAll('input');
    let userAnswer = '';

    inputs.forEach((input) => {
      userAnswer += input.value.toLowerCase();
    });

    if (userAnswer === answer) {
      inputs.forEach((input) => (input.style.backgroundColor = '#d4edda')); // Verde para correto
    } else {
      inputs.forEach((input) => (input.style.backgroundColor = '#f8d7da')); // Vermelho para incorreto
      allCorrect = false;
    }
  });

  if (allCorrect) {
    createConfetti();  // Chama a função para criar confetes se tudo estiver correto
    alert('Parabéns! Seu presente tá no armário da sala de estudos');
  } else {
    alert('Quase isso! Da uma conferida');
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input, index) => {
      // Mover o foco automaticamente para o próximo campo
      input.addEventListener("input", () => {
        if (input.value !== "" && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      // Verificar a tecla pressionada para mover o foco para o campo anterior
      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && input.value === "" && index > 0) {
          // Limpa o campo anterior
          inputs[index - 1].value = "";
          // Retorna o foco para o campo anterior
          inputs[index - 1].focus();
        }
      });
    });
});
