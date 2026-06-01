## QuestWar - Um jogo educativo

![Tela do jogo](assets/screenshot.png)

## Sobre o projeto
**QuestWar** é um jogo inspirado em jogos de dominação como War e Risk, porém em vez de jogar os dados para dominar um país
é necessario reponder uma pergunta, que pode ser sobre qualquer tema, porém o enfoque principal é utilizar perguntas com finalidade
educacional.

O objetivo do projeto é utilizar a gameficação para o aprendizado através de um jogo com dinamicas interessantes para que as pessoas 
possam ter uma forma diferente de aprendizado.

## Como jogar
Ao começar cada jogador começa com 3 países, ao começar a partida o primeiro jogador (jogador vermelho) deve clicar em um dos seus paises, 
depois de clicar em um dos seus países aparecerá os países vizinhos
![Tela do jogo](assets/screenshot_paisesvizinhos.png)

Depois de apercer os países vizinhos e o jogador clicar em um país vizinho deve aparecer uma tela de pergunta para o jogador responder.
![Tela do jogo](assets/screenshot_perguntas.png)


Ao responder corretamente, o jogador ganha o país vizinho e se ele não responder corretamente não ganha o país vizinho, e de qualquer forma, 
após isso a vez passa para o outro jogador.
![Tela do jogo](assets/screenshot_jogador2.png)
## Estrutura do projeto
```
questwar_projeto/
│
├── index.html          # Entrada principal do jogo
├── game.html           # Página do jogo
├── mapa.svg            # Mapa do jogo em svg
├── fundo.svg           # Background do mapa em svg
├── fundo.svg           # Background do mapa em svg
├── package.json        # Configuração do Node.js
│
├── styles/
│   ├── global.css       # Estilo no geral
│   ├── home.css         # Estilo da entrada principal do jogo
│   ├── hud.css          # Estilo do hud do jogo
│   └── mapa.css         # Estilo do mapa
│ 
├── entidades/
│   ├── fronteiras.js    # fronteiras do jogo entre os paises
│   ├── jogadores.js     # jogadores
│   ├── paises.js        # paises do mapa
│   └── perguntas.js     # perguntas que são mostradas ao jogador
│
├── interface/
│   ├── barra_de_feedback.js      # barra que demontra feedback ao jogador
│   ├── evento_aparecer_paises.js # aparece o nome do país ao passar o mouse
│   ├── placar.js                 # atualiza o placar
│   └── timer.js                  # timer do jogo
│
├── mecanicas/
│   ├── controlar_turno.js      # controla os turnos dos jogadores
|   ├── controlar_turno_mecanicas/
|        ├── atualizar_jogador_ativos.js        # Atualiza a vez do jogador ativo 
│        ├── atualiza_lista_jogadores.js        # Atualiza a lista de países dos jogadores
│        ├── conquistar_territorio.js           # Conquista o território pro jogador
|        ├── limpa_vizinhos_marcados.js         # Limpa os países vizinhos
|        ├── mostra_pergunta.js                 # Mostra a pergunta
│        ├── remover_e_adicionar_territorio.js  # Remove e adiona países conquistados
│        └── troca_jogador.js                   # Troca vez dos jogadores 
|   |
│   ├── embaralhar_paises.js    # embaralha países iniciais
│   ├── estado_de_jogo.js       # atualiza o estado do jogo
│   └── mostrar_vizinhos.js     # mostra os países vizinhos 
│
├── assets/
    ├── personagem_vermelho.png      # Personagem pixelado do jogador vermelho
    └── personagem_azul.png          # Personagem pixelado do jogador azul
```

Nosso projeto foi bem extenso e por isso utilizamos muito a modularização e alguns principios da arquitetura de software.
Utilizamos a Separação de Responsabilidades (Separation of Concerns) separando o projeto em areas com funções diferentes
como entidades, mecanicas, interface e styles. A pasta entidades sendo os países, jogadores como objetos centrais do sistema.
A pasta mecanica contando com as principais mecanicas do jogo. A pasta interface responsável pelo que aparece na tela do jogador.
E, também, a pasta styles que guarda separadamente os arquivos css de cada parte do jogo. 
## Como rodar
### Localmente
```bash
# Clone o repositório
git clone https://github.com/SimonS2003/game.git

#Depois acesse
cd game

# Depois rode
npm install
npm start
# Acesse: http://localhost:3000
```

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura do jogo |
| CSS3 | Estilização |
| JavaScript (ES5+) | Mecanicas do jogo |

---



Referências 
Separação de Responsábilidades (Separation of Concerns):
https://pt.stackoverflow.com/questions/417198/o-que-é-separação-de-interesses-soc-separation-of-concerns#:~:text=A%20Separação%20de%20Responsabilidades%20é,sejam%20responsáveis%20por%20responsabilidades%20distintas.

