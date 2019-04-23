import { Comprador } from './comprador.entity';
import { Corretor } from './corretor.entity';
import { Imovel } from './imovel.entity';

export class FichaAtendimento {
    id: number;

    comprador: Comprador;

    corretor: Corretor;

    imoveis: Imovel[];
}
