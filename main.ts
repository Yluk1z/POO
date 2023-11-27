export default class Personagem {
    constructor(
      private name: string,
      private energy: number,
      private life: number,
      private attack: number,
      private defense: number
    ) {}
  
    status(): string {
      return (
       "\n-----Status do Personagem----"+
      "\nNome: " + this.name +
      "\nAtaque: " + this.attack.toFixed(1) +
      "\nDefesa: " + this.defense.toFixed(1) +
      "\nEnergia: " + this.energy.toFixed(1) +
      "\nVida: " + this.life.toFixed(1) +
      "\n-------------------------------"
      );
    }
    comandoAttack(): string {
       return ("[1] 100 flexões [3] Correr 1 KM");
   }
    validarComandoAttack(sequenciaDeNumeros: string): void {
      if (sequenciaDeNumeros.includes( "1 3")) {
        this.attack += Math.random() * 35;
        this.energy -= Math.random() * 18;
        console.log (

          "\n-----Treino de ataque concluído-----\n" +
          "----------Ataque aumentou!----------\n" +
          "------------------------------------"
          );
      } else {
        this.attack -= Math.random() * 28;
        this.energy -= Math.random() * 18;
        console.log(

          "\n-----Comando de treino inválido.-----\n"+
          "----------Ataque Diminuiu!-----------\n" +
          "------------------------------------"
          );
      }
    }  
    comandoDefence():string {
      return "[1] Treino de Bloqueio [4] treino de Base"
    }
    validarComandoDefense(sequenciacomandoDefense: string):void {
      if (sequenciacomandoDefense.includes( "1 4")) {
        this.defense += Math.random() * 35;
        this.energy -= Math.random() * 18;
        console.log(
        
          "\n-----Treino de Defesa concluído-----\n" +
          "----------Defesa aumentou!----------\n" +
          "------------------------------------"
        );
      } else {
        this.defense -= Math.random() * 28;
        this.energy -= Math.random() * 18;
        console.log(
          "\n-----Comando de treino inválido.-----\n"+
          "----------Defesa Diminuiu!-----------\n" +
          "------------------------------------"
          );
      }
    }  
    comandoDescansar(hour: number):void{
     this.energy += hour * Math.random()* 10
      if(this.energy > 100) {
        this.energy = 100;
      }
    }

    isDead(): boolean {
      if(this.energy < 0){
        return true;
      } else {
      return false;

      }
    } 
  }
  