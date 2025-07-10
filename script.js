//Lista de caos possíveis
const efeitos = [
  "Você terá uma percepção nova sobre alguém que já julgou ter compreendido.",
  "Uma lembrança antiga virá com um sabor diferente — você verá o que não via antes.",
  "A ausência de alguém será mais barulhenta do que nunca.",
  "Você ouvirá uma frase comum... mas hoje ela vai te atravessar diferente.",
  "Um gesto pequeno de alguém próximo vai revelar uma verdade que você ignorava.",
  "Uma saudade que você tinha esquecido vai reaparecer sutilmente.",
  "Algo que você acreditava superado vai te visitar em silêncio.",
  "Você enxergará uma intenção não dita em alguém muito próximo.",
  "O silêncio de hoje vai revelar mais do que palavras de ontem.",
  "Você se pegará sentindo raiva de alguém que jurava já ter perdoado.",
  "Um olhar de hoje vai te lembrar de um segredo antigo.",
  "A forma como alguém te toca (ou não te toca) hoje vai fazer sentido demais.",
  "Você vai perceber uma repetição de padrão que vem há anos.",
  "Vai perceber que alguém só te ama como sabe — e talvez não baste.",
  "Um pensamento involuntário vai escancarar uma ferida que parecia fechada.",
  "Você vai rir de algo que costumava te doer.",
  "Alguém vai te fazer uma pergunta simples, e você não saberá responder.",
  "A verdade vai surgir como quem não quer nada — no meio de uma conversa banal.",
  "Um cheiro vai te fazer lembrar de quem você quase virou.",
  "Hoje, o jeito que você olha o mundo será mais nítido do que nunca.",
  "Você vai sentir falta de uma versão sua que nem lembrava mais.",
  "Alguém vai se afastar sem aviso, e vai fazer mais sentido do que deveria.",
  "Vai perceber que não é sobre o que fizeram com você... mas sobre o que você fez com isso.",
  "Uma parte sua vai pedir espaço, e você talvez precise ouvir.",
  "Hoje você vai se ver nos olhos de alguém — e talvez não goste.",
  "Vai entender que o cuidado que esperava era o que precisava dar a si mesma.",
  "Uma antiga mágoa vai se dissolver — ou se transformar em outra coisa.",
  "Alguém vai dizer algo que parece pouco, mas que vai te tirar o chão.",
  "Você vai entender porque certas pessoas não voltam.",
  "Vai descobrir que seu medo era só o seu desejo com outra roupa.",
  "Um detalhe repetido vai te fazer repensar uma história inteira.",
  "Vai perceber que fala de alguém mais do que gostaria.",
  "Você vai sentir como se o dia estivesse te observando.",
  "Uma palavra vai ecoar mais tempo do que deveria.",
  "Um rosto esquecido vai aparecer nos seus pensamentos por acidente... ou não.",
  "Você vai ter vontade de pedir desculpas — mesmo sem saber a quem.",
  "Hoje, a lembrança de uma escolha vai doer diferente.",
  "Você vai notar que esperava por algo que não vai acontecer.",
  "Uma música vai te dizer algo que ninguém conseguiu.",
  "Você vai se enxergar em alguém que sempre rejeitou.",
  "Vai perceber que aquela piada que você conta sempre... é um disfarce.",
  "Alguém que você não nota vai te tocar profundamente.",
  "Você vai descobrir que mudou — e que nem percebeu.",
  "Hoje, o caos será gentil com você. E isso também vai assustar.",
  "Você vai desejar voltar no tempo, mas apenas por 5 segundos.",
  "Vai entender que não precisava ter sido tão forte.",
  "Alguém vai se calar — e o silêncio vai ser mais duro que qualquer fala.",
  "Você vai se despedir de algo que não sabia que ainda carregava.",
  "Uma intuição vai te guiar... e você vai confiar. Pela primeira vez.",
  "Vai perceber que não tem mais medo do que te assustava ontem.",
];

function plantarSemente() {
  const acao = document.getElementById("acao").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (!acao) {
    resultadoDiv.innerHTML = "Descreva um ato mágico para plantar a semente.";
  } else {
    const efeito = efeitos[Math.floor(Math.random() * efeitos.length)];
    resultadoDiv.innerHTML = `<strong>Consequência mágica:</strong> ${efeito}`; //resposta do caos sai aqui
  }
  resultadoDiv.style.display = "block";
}

// Função das estrelinhas
document.addEventListener("mousemove", (e) => {
  createStar(e.clientX, e.clientY);
});
function createStar(x, y) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Tamanho aleatório das estrelas
  const size = Math.random() * 4 + 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Posição das estrelinhas
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Cor das estrelinhas em tons de roxo e branco
  const colors = ["#ffffff", "#e6e6fa", "#d8bfd8", "#b19cd9"];
  star.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  // Dá o efeito principal das estrelas (não segue apenas o cursor)
  const directionX = (Math.random() - 0.5) * 100;
  const directionY = (Math.random() - 0.5) * 100;
  star.style.setProperty("--x", `${directionX}px`);
  star.style.setProperty("--y", `${directionY}px`);

  document.body.appendChild(star);

  // Remove a estrela pra não ficar pra sempre
  setTimeout(() => {
    star.remove();
  }, 1500);
}
