import * as prompt from 'prompt-sync';

class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}

  exibirStatus(): void {
    console.log("-----Status do Personagem-----");
    console.log("Nome: " + this.nome);
    console.log("Ataque: " + this.ataque);
    console.log("Defesa: " + this.defesa);
    console.log("Energia: " + this.energia);
    console.log("Vida: " + this.vida);
    console.log("-------------------------------");
  }
}

let tecladouser = prompt();
let opcion: number = 0;
let player: Personagem | undefined;

while (opcion != 5) {
  console.log("---------Personagem-----------");
  console.log("[1]. Criar Personagem         ");
  console.log("[2]. Treinar Ataque           ");
  console.log("[3]. Treinar Defesa           ");
  console.log("[4]. Status do Personagem     ");
  console.log("[5]. Sair                     ");
  console.log("------------------------------");

  opcion = +tecladouser("Escolha uma das opções: ");

  switch (opcion) {
    case 1:
      if (player) {
        console.log("Opção inválida. Personagem já criado.");
        break;
      }
      let nomePersonagem = tecladouser("Digite o nome do seu personagem: ");
      player = new Personagem(nomePersonagem, 100, 1000, 100, 80);
      player.exibirStatus();
      break;
    case 2:
      if (!player) {
        console.log("Opção inválida. Crie um personagem primeiro.");
        break;
      }
      console.log("[1] 100 flexões [3] Correr 1 KM");
      let comandoTreinoAtaque = tecladouser("Insira a sequência do comando anterior(exemplo: 2 4): ");
      switch (comandoTreinoAtaque) {
        case '1 3':
          // Treino de ataque
          player.ataque += 25;
          console.log("                                    ");
          console.log("-----Treino de ataque concluído-----");
          console.log("----------Ataque aumentou!----------");
          console.log("                                    ");
          player.exibirStatus();
          break;
        default:
          console.log("                                     ");
          console.log("-----Comando de treino inválido.-----");
          console.log("----------Ataque Diminuiu!-----------");
          console.log("                                     ");
          player.ataque -= 10;
          player.exibirStatus();
      }
      break;
    case 3:
      if (!player) {
        console.log("Opção inválida. Crie um personagem primeiro.");
        break;
      }
      console.log("[1] Treino de Bloqueio [4] treino de Base");
      let comandoTreinoDefesa = tecladouser("Insira a sequência do comando anterior(exemplo: 2 4): ");
      switch (comandoTreinoDefesa) {
        case '1 4':
          // Treino de Defesa
          player.defesa += 45;
          console.log("                                   ");
          console.log("-----Treino de Defesa concluído----");
          console.log("---------Defesa aumentou!----------");
          console.log("                                   ");
          player.exibirStatus();
          break;
        default:
          console.log("                                     ");
          console.log("-----Comando de treino inválido.-----");
          console.log("----------Defesa Diminuiu!-----------");
          console.log("                                     ");
          player.defesa -= 20;
          player.exibirStatus();
      }
      break;
    case 4:
      if (!player) {
        console.log("Opção inválida. Crie um personagem primeiro.");
        break;
      }
      player.exibirStatus();
      break;
    case 5:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}