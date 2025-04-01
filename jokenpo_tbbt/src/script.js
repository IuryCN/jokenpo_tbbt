function jogar() {
  let idade = Number(prompt("📢 Qual é a sua idade?"));
  if (idade < 18) {
    alert("⛔ Desculpe, você não pode jogar conosco!");
    return;
  }

  alert("✅ Você pode jogar conosco!");

  let nomeJogador = prompt("😏 Qual é o seu nome?");
  let escolhaOponente = Number(
    prompt(
      "💪 Quem você desafiará?: \n1 - Sheldon\n2 - Penny\n3 - Leonard\n4 - Rajesh\n5 - Amy\n6 - Bernadette\n7 - Howard"
    )
  );

  let oponentes = {
    1: "Sheldon",
    2: "Penny",
    3: "Leonard",
    4: "Rajesh",
    5: "Amy",
    6: "Bernadette",
    7: "Howard"
  };

  let nomeOponente = oponentes[escolhaOponente] || "❓ Oponente Desconhecido";

  let escolhaJogador = Number(
    prompt(
      "🤔 Qual opção você escolhe: \n🪨 1 - Pedra\n🗒️ 2 - Papel\n✂️ 3 - Tesoura\n🦎 4 - Lagarto\n🖖 5 - Spock"
    )
  );
  let escolhaComputador = Math.floor(Math.random() * 5) + 1;

  let opcoes = {
    1: "🪨 Pedra",
    2: "🗒️ Papel",
    3: "✂️ Tesoura",
    4: "🦎 Lagarto",
    5: "🖖 Spock"
  };

  alert("🤖 " + nomeOponente + " escolheu: " + opcoes[escolhaComputador]);

  if (escolhaJogador === escolhaComputador) {
    alert("⚖️ Empate!");
  } else if (escolhaJogador === 1 && escolhaComputador === 3) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🪨 Pedra esmaga ✂️ Tesoura!");
  } else if (escolhaJogador === 1 && escolhaComputador === 4) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🪨 Pedra esmaga 🦎 Lagarto!");
  } else if (escolhaJogador === 2 && escolhaComputador === 1) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🗒️ Papel cobre 🪨 Pedra!");
  } else if (escolhaJogador === 2 && escolhaComputador === 5) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🗒️ Papel refuta 🖖 Spock!");
  } else if (escolhaJogador === 3 && escolhaComputador === 2) {
    alert("🏆 Parabéns, " + nomeJogador + "! ✂️ Tesoura corta 🗒️ Papel!");
  } else if (escolhaJogador === 3 && escolhaComputador === 4) {
    alert("🏆 Parabéns, " + nomeJogador + "! ✂️ Tesoura decapita 🦎 Lagarto!");
  } else if (escolhaJogador === 4 && escolhaComputador === 2) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🦎 Lagarto come 🗒️ Papel!");
  } else if (escolhaJogador === 4 && escolhaComputador === 5) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🦎 Lagarto envenena 🖖 Spock!");
  } else if (escolhaJogador === 5 && escolhaComputador === 1) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🖖 Spock vaporiza 🪨 Pedra!");
  } else if (escolhaJogador === 5 && escolhaComputador === 3) {
    alert("🏆 Parabéns, " + nomeJogador + "! 🖖 Spock esmaga ✂️ Tesoura!");
  } else {
    alert(
      "😢 Que pena, " +
        nomeJogador +
        "! " +
        nomeOponente +
        " ganhou! " +
        "Não fique triste, tente novamente!"
    );
  }
}
