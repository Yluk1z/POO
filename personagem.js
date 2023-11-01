"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class personagem {
    constructor() {
        this.nome = "";
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.energia = 100;
        this.vida = 400;
        this.ataque = 30;
        this.defesa = 40;
    }
}
let master;
master = new personagem();
master.nome = "Master Chief.";
master.energia = 100;
master.vida = 1000;
master.ataque = 50;
master.defesa = 45;
console.log("person :>>", master);
let kratos;
personagem;
kratos = new personagem();
kratos.nome = "Kratos";
console.log("person ;>>", kratos);
