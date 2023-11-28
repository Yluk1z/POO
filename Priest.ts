import { Util } from './util';
import Personagem from './main';

export default class Priest extends Personagem {
  private _espirito: number;
  private _versatilidade: number;

  constructor(nome: string) {
    super(nome, 100, 800, 60, 35);
    this._espirito = Util.randomizar(100, 600);
    this._versatilidade = Util.randomizar(100, 600);
  }
  status(): string {
    // Adicione a lógica para fornecer o status do Mage

      return `
      Mage Status:
        - Nome: ${this.name}
        - Energia: ${this.energy.toFixed(1)}
        - Vida: ${this.life.toFixed(1)}
        - Ataque: ${this.attack.toFixed(1)}
        - Defesa: ${this.defense.toFixed(1)}
        - Espirito - ${this._espirito.toFixed(1)}
        - Versatilidade - ${this._versatilidade.toFixed(1)}
      `;
    }
  }