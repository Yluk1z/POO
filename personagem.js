"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    exibirStatus() {
        console.log("-----Status do Personagem-----");
        console.log("Nome: " + this.nome);
        console.log("Ataque: " + this.ataque);
        console.log("Defesa: " + this.defesa);
        console.log("Energia: " + this.energia);
        console.log("Vida: " + this.vida);
        console.log("-------------------------------");
    }
}
let tecladouser = (0, prompt_sync_1.default)();
let opcion = 0;
let player;
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
                    console.log("----------defesa Diminuiu!-----------");
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
