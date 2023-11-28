import { Util } from './util';
import Personagem from './main';

export default class Mage extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string) {
        super(nome, 300, 800, 60, 35);
        this._intelecto = Util.randomizar(100, 600);
        this._velocidade = Util.randomizar(100, 600);
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
        - Intelecto: ${this._intelecto.toFixed(1)}
        - Velocidade: ${this._velocidade.toFixed(1)}
      `;
    }
  }