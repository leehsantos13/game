export function mostrarPergunta(
  pergunta,
  alternativas,
  respostaCorreta,
  aoResponder
) {

  const overlay =
    document.createElement("div");

  overlay.style.position =
    "fixed";

  overlay.style.inset =
    "0";

  overlay.style.background =
    "rgba(0,0,0,0.7)";

  overlay.style.display =
    "flex";

  overlay.style.justifyContent =
    "center";

  overlay.style.alignItems =
    "center";

  overlay.style.zIndex =
    "99999";

  // JANELA
  const janela =
    document.createElement("div");

  janela.style.background =
    "white";

  janela.style.padding =
    "30px";

  janela.style.borderRadius =
    "15px";

  janela.style.display =
    "flex";

  janela.style.flexDirection =
    "column";

  janela.style.gap =
    "20px";

  // TÍTULO
  const titulo =
    document.createElement("h2");

  titulo.textContent =
    pergunta;

  titulo.style.textAlign =
    "center";

  janela.appendChild(
    titulo
  );

  // GRID DOS BOTÕES
  const overlayBotoes =
    document.createElement("div");

  overlayBotoes.style.display =
    "grid";

  overlayBotoes.style.gridTemplateColumns =
    "1fr 1fr";

  overlayBotoes.style.gap =
    "10px";

    overlayBotoes.style.justifyItems =
    "center";

    overlayBotoes.style.display =
  "grid";

overlayBotoes.style.gridTemplateColumns =
  "repeat(2, 180px)";

overlayBotoes.style.gridAutoRows =
  "180px";

overlayBotoes.style.gap =
  "10px";

overlayBotoes.style.justifyContent =
  "center";

  alternativas.forEach(
    alternativa => {

      const botao =
        document.createElement(
          "button"
        );

      botao.textContent =
        alternativa;

        botao.style.width =
        "180px";
      
      botao.style.height =
        "180px";
      
      botao.style.fontSize =
        "18px";
      
      botao.style.borderRadius =
        "15px";

      botao

      botao.style.width =
  "180px";

botao.style.height =
  "180px";

botao.style.display =
  "flex";

botao.style.justifyContent =
  "center";

botao.style.alignItems =
  "center";

botao.style.textAlign =
  "center";

botao.style.padding =
  "10px";

      botao.addEventListener(
        "click",
        () => {

          const acertou =
            alternativa ===
            respostaCorreta;

          document.body.removeChild(
            overlay
          );

          aoResponder(
            acertou
          );

        }
      );

      overlayBotoes.appendChild(
        botao
      );

    }
  );

  janela.appendChild(
    overlayBotoes
  );

  overlay.appendChild(
    janela
  );

  document.body.appendChild(
    overlay
  );

}