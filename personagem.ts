import { isConstructorTypeNode } from "typescript";

class  personagem {
    nome: string = "";
    energia : number = 0;
    vida: number = 0;
    ataque : number = 0;
    defesa : number = 0;
  
    constructor(){
    this.energia = 100;
    this.vida = 400;
    this.ataque =30;
    this.defesa = 40;
    }
}

let master: personagem;
master = new personagem();
master.nome = "Master Chief.";
master.energia = 100;
master.vida = 1000
master.ataque = 50
master.defesa = 45
console.log("person :>>", master);

let kratos; personagem;
kratos = new personagem();
kratos.nome = "Kratos";
console.log("person ;>>", kratos);





  