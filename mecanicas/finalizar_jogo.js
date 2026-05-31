import { zerarTimer } from "../interface/timer.js";
import { limparVizinhosMarcados } from "./controlar_turno_mecanicas/limpar_vizinhos_marcados.js";

export function verificarFimDeJogo(estado, jogador) {
  const limite = estado.limitePaisesParaVencer;

  if (jogador.paises.length >= limite) {
    finalizarJogo(estado, jogador);
    return true;
  }

  return false;
}

function finalizarJogo(estado, jogadorVencedor) {
  estado.jogoIniciado = false;
  estado.territorioSelecionado = null;
  estado.vizinhosValidos = [];

  limparVizinhosMarcados(estado);

  const display = document.getElementById("tempo");
  zerarTimer(display);

  if (estado.statusJogo) {
    estado.statusJogo.textContent = `${jogadorVencedor.nome} venceu o jogo!`;
  }

  const telaVencedor = document.getElementById("telaVencedor");
  const mensagemVencedor = document.getElementById("mensagemVencedor");
  const detalheVencedor = document.getElementById("detalheVencedor");
  document.body.appendChild(telaVencedor);

  if (!telaVencedor || !mensagemVencedor || !detalheVencedor) {
    alert(`${jogadorVencedor.nome} venceu o jogo!`);
    window.location.href = "index.html";
    return;
  }

  mensagemVencedor.textContent = `${jogadorVencedor.nome} venceu!`;
  detalheVencedor.textContent = `Conquistou ${jogadorVencedor.paises.length} países.`;

  telaVencedor.classList.remove("vencedor-vermelho");
  telaVencedor.classList.remove("vencedor-azul");

  if (jogadorVencedor.cor === "red") {
    telaVencedor.classList.add("vencedor-vermelho");
  } else {
    telaVencedor.classList.add("vencedor-azul");
  }

  telaVencedor.classList.add("mostrar-vitoria");

  telaVencedor.onclick = () => {
    window.location.href = "index.html";
  };
}