import { Util } from './util';
import Personagem from './main';

export default class Warrior extends Personagem {
  private _forca: number;
  private _agilidade: number;
  private _armadura: number;

  constructor(nome: string) {
    super(nome, 100, 800, 60, 35);
    this._forca = Util.randomizar(200, 800);
    this._agilidade = Util.randomizar(50, 400);
    this._armadura = Util.randomizar(200, 800);
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
      - Agilidade - ${this._agilidade.toFixed(1)}
      - Força - ${this._forca.toFixed(1)}
      - Armadura - ${this._armadura.toFixed(1)}
      `;
    }
  } 