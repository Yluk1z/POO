import Personagem from './main';
import prompt from 'prompt-sync';

let tecladouser = prompt();
let opcion: number = 0;
let person = new Personagem("Lucas", 100,800,60,35);

while (opcion !== 5 && !person.isDead()) {
  console.log("---------Personagem-----------");
  console.log("[1]. Treinar Ataque           ");
  console.log("[2]. Treinar Defesa           ");
  console.log("[3]. Descansar                ");
  console.log("[4]. Status do Personagem     ");
  console.log("[5]. Sair                     ");
  console.log("------------------------------");

  opcion = +tecladouser("Escolha uma das opções: ");

  switch (opcion) {
    case 1:
      console.log(person.comandoAttack());
      let validarcomando: string = tecladouser("Insira a sequência do comando anterior (exemplo: 2 4): ");
      person.validarComandoAttack(validarcomando);
      console.log(person.status());

  break;
    case 2:
      console.log(person.comandoDefence());
      let sequenciaComandoDefense: string = tecladouser("Insira a sequência do comando anterior (exemplo: 2 4): ")
      person.validarComandoDefense(sequenciaComandoDefense);
      console.log(person.status());
  break;
    case 3:
      let tempoDeDescanso: number = +tecladouser("Insira a quantidade de horas que você deseja desansar(somente o numero!):  ");
      person.comandoDescansar(tempoDeDescanso)
      console.log(person.status());
  break;
    case 4:
    console.log(person.status());
  break;
    case 5:
      console.log("Até a proxima jornada guerreiro!")
  break;
  }
} 

if (person.isDead()) {
  console.log("OPS! Você morreu!");
}